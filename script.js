const icon= document.querySelector(".icon");
const iconh= document.querySelector(".iconh");

console.log(icon);
console.log(iconh);

icon.addEventListener("mouseenter",()=>{
	iconh.style.top="95px";

})

icon.addEventListener("mouseleave",()=>{
	iconh.style.top="-100px";

})