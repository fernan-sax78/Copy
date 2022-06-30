(function(){
    "use strict";


let copyBtn = document.querySelector(".fa-copy");

copyBtn.addEventListener("click", () => {
  let copyText = document.querySelector(".box_");
  let input = document.querySelector('input[type = "text"]');
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(() => {
    copyText.classList.remove("active");
  }, 3000);
});






}());