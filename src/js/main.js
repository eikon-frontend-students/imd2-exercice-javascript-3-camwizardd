var textInput = document.querySelector(".form-input");
var formButton = document.querySelector(".form-button");
var artcicles = document.querySelectorAll(".articles-item");

function search() {
  var textInputContent = textInput.value;

  artcicles.forEach(function (article) {
    if (article.textContent.includes(textInputContent)) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}

formButton.addEventListener("click", search);
