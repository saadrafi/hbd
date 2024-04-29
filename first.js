document.getElementById("NO").addEventListener("click", function () {
  const text = document.getElementById("info");
  text.innerHTML = "Sorry, you are not allowed to enter this site.";
  text.style.color = "red";
  text.style.fontSize = "30px";
  document.getElementById("btns").classList.add("invisible");
});

document.getElementById("YES").addEventListener("click", function () {
  window.location.href = "show.html";
});
