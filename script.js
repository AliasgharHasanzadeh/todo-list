const btn = document.querySelector("button");
const task = document.querySelector("input");
const list = document.querySelectorAll("li");
btn.addEventListener("click", function () {
    setline();
  let newli = document.createElement("li");
  let text = document.querySelector("input").value;
  let textnode = document.createTextNode(text);
  newli.appendChild(textnode);
  document.querySelector(".ul").appendChild(newli);
  setline();
});
function setline() {
  document.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", function () {
      if (item.style.textDecoration == "line-through red") {
        item.style.textDecoration = "none";
      } else {
        item.style.textDecoration = "line-through red";
      }
    });
  });
}
setline();
