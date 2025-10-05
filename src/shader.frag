#ifdef GL_ES
precision highp float;
#endif

uniform vec2 uResolution;
uniform vec2 uCamPos;
uniform vec2 uCamDir;
uniform sampler2D uMap;
uniform vec2 uMapSize;

// === Utility to access map ===
float mapAt(int x, int y) {
  vec2 uv = (vec2(float(x), float(y)) + 0.5) / uMapSize;
  return texture(uMap, uv).r;
}

// === Main ===
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 camPos = uCamPos;
  vec2 camDir = uCamDir;
  float fovFactor = 0.90;
  vec2 plane = vec2(-camDir.y, camDir.x) * fovFactor;

  // Convert pixel x into a ray direction
  float screenX = 2.0 * uv.x - 1.0;
  vec2 rayDir = normalize(camDir + plane * screenX);

  // --- DDA setup ---
  vec2 mapPos = floor(camPos);
  vec2 deltaDist = abs(vec2(1.0 / rayDir.x, 1.0 / rayDir.y));
  vec2 sideDist;
  vec2 step;

  if (rayDir.x < 0.0) { step.x = -1.0; sideDist.x = (camPos.x - mapPos.x) * deltaDist.x; }
  else                { step.x =  1.0; sideDist.x = (mapPos.x + 1.0 - camPos.x) * deltaDist.x; }

  if (rayDir.y < 0.0) { step.y = -1.0; sideDist.y = (camPos.y - mapPos.y) * deltaDist.y; }
  else                { step.y =  1.0; sideDist.y = (mapPos.y + 1.0 - camPos.y) * deltaDist.y; }

  // --- DDA loop ---
  float hit = 0.0;
  float side = 0.0;
  for (int i = 0; i < 32; i++) {
    if (sideDist.x < sideDist.y) {
      sideDist.x += deltaDist.x;
      mapPos.x += step.x;
      side = 0.0;
    } else {
      sideDist.y += deltaDist.y;
      mapPos.y += step.y;
      side = 1.0;
    }
    if (mapAt(int(mapPos.x), int(mapPos.y)) > 0.5) {
      hit = 1.0;
      break;
    }
  }

  // --- Compute distance ---
  float perpDist = (side == 0.0)
      ? (sideDist.x - deltaDist.x)
      : (sideDist.y - deltaDist.y);

  // Compute angle between rayDir and camDir
  float cosAngle = dot(rayDir, camDir); // dot product = cos(theta)
  float correctedDist = perpDist * cosAngle; // fish-eye corrected

  // --- Vertical wall height ---
  float lineHeight = uResolution.y / correctedDist;
  float drawStart = -lineHeight / 2.0 + uResolution.y / 2.0;
  float drawEnd   =  lineHeight / 2.0 + uResolution.y / 2.0;

  // --- Coloring ---
  vec3 color;
  if (hit > 0.0 && gl_FragCoord.y >= drawStart && gl_FragCoord.y <= drawEnd) {
    // Wall
    float shade = 1.0 / (1.0 + 0.15 * correctedDist * correctedDist);
    if (side == 1.0) shade *= 0.7; // darker on y-sides
    color = vec3(shade);
  } else if (gl_FragCoord.y < drawStart) {
    // Ceiling
    color = vec3(0.4, 0.6, 0.9);
  } else {
    // Floor
    color = vec3(0.2, 0.2, 0.25);
  }

  gl_FragColor = vec4(color, 1.0);
}
