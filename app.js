const btn = document.getElementById("btn");
let isClick = true;
btn.addEventListener("click", () => {
  if (isClick) {
    document.body.style = `
  background: #000;
        background-image: url("./flashlight.png");
        background-repeat: no-repeat;
        background-size: 500px 500px;
        background-position: center;
  `;
    btn.style.background = "#fff200";
    btn.style.color = "#000";
  } else {
    document.body.style = ` `;
    btn.style.background = "#000";
    btn.style.color = "#fff200";
  }
  isClick = !isClick;
});
document.body.addEventListener("mousemove", () => {
  let x, y;
  document.onmousemove = (e) => {
    x = e.clientX;
    y = e.clientY;
    document.body.style.backgroundPosition = `${x - 250}px ${y - 250}px`;
  };
});
