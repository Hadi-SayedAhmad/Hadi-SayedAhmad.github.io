let hamburger = document.getElementById("1");
let closeBtn = document.getElementById("2");
let sideBar = document.querySelector(".sideBar");
hamburger.addEventListener("click", function()
{
  sideBar.style.display = "flex";
});
closeBtn.addEventListener("click", function()
{
  sideBar.style.display = "none";

});


