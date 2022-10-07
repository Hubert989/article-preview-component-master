const btn = document.querySelector(".button");
const option = document.querySelector(".share-option")


/*btn.addEventListener("click", function() {
    if (option.style.display === "none") {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
});*/
btn.addEventListener("click", function() {
option.classList.toggle("active")
})
