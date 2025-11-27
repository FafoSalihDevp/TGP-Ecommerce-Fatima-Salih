let Btn = document.getElementById("btn");
let rightImage = document.getElementById("rightImage");
let leftImage = document.getElementById("leftImage");
let VencyTitle = document.getElementById("VencyTitle");
let loadingCertain = document.getElementById("loadingCertain");
function btnAnimation() {
  rightImage.classList.add("animateRightImage");
  leftImage.classList.add("animateLeftItmage");
  VencyTitle.classList.add("opacity-0", "duration-500", "transition-all");
  Btn.classList.add("opacity-0", "duration-500", "transition-all");
  removeLoadingCertain();
}

function removeLoadingCertain() {
  setTimeout(() => {
    loadingCertain.remove()
    // body.document.classList.remove("overflow-hidden");
  }, 2000);
}
