const sidebaar = document.querySelector("#menu");
// console.log(sidebaar);
// const sidebar = document.querySelector(".sidebar")

sidebaar.addEventListener("click",()=>{
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex";
})

const hidesidebar = document.querySelector("#hidesidebar");

hidesidebar.addEventListener("click",()=>{
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none";
})