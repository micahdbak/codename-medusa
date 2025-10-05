import{l as s}from"./faceLandmark-BxCGo5NV.js";const e={x:0,y:0,z:0},o={x:0,y:0,z:0};let r=-1;function l(){if(!s||s.length===0)return;const t=s[33],n=s[263],y=s[168];if(!t||!n||!y)return;const d=(t.x+n.x)/2,x=(t.y+n.y)/2,a=n.x-t.x,c=n.y-t.y,i=Math.sqrt(a*a+c*c);o.x=d*2-1,o.y=-(x*2-1),r<0&&i>0&&(r=i),r>0&&(o.z=i/r-1)}function u(){e.x+=(o.x-e.x)*.1,e.y+=(o.y-e.y)*.1,e.z+=(o.z-e.z)*.1}function p(t){t&&(t.innerHTML=`
        Head Pose:<br>
        x: ${e.x.toFixed(3)}<br>
        y: ${e.y.toFixed(3)}<br>
        z: ${e.z.toFixed(3)}
    `)}function z(){l(),u()}export{p as d,e as s,z as u};
