function showMore() {
    var moreText = document.getElementById("more");
    var button = document.getElementById("btn");
    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      button.innerHTML = "Read less";
    } else {
      moreText.style.display = "none";
      button.innerHTML = "Read more";
    }
  }
  