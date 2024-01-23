/* eslint-disable max-len */document.addEventListener("click",t=>{let e=document.querySelector(".spider"),i=document.querySelector(".wall"),n=getComputedStyle(i),l=parseInt(n.borderWidth,10),c=t.clientX-e.clientWidth/2-i.getBoundingClientRect().left-l,d=t.clientY-e.clientHeight/2-i.getBoundingClientRect().top-l,h=i.clientWidth-e.clientWidth,o=i.clientHeight-e.clientHeight;e.style.left=Math.max(0,Math.min(c,h))+"px",e.style.top=Math.max(0,Math.min(d,o))+"px"});//# sourceMappingURL=index.3bc86ba3.js.map

//# sourceMappingURL=index.3bc86ba3.js.map
