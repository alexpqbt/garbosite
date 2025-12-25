const nav = document.querySelector("#nav");
const windows = document.querySelectorAll(".window");

nav.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  if (button.id === "info") {
    toggleWindow(".short-about-me");
  }

  if (button.id === "likes") {
    toggleWindow(".my-likes");
  }

  if (button.id === "dislikes") {
    toggleWindow(".my-dislikes");
  }

  if (button.id === "notToDo") {
  }
  if (button.id === "links") {
  }

  if (button.id === "wip") {
    toggleWindow(".wip");
  }
});

windows.forEach((window) => {
  window.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;

    if (button.id === "close") {
      button.parentNode.classList.add("hidden");
    }
  });
});

function toggleWindow(selector) {
  const [x, y] = randomPosition();
  const window = document.querySelector(selector);
  window.style.top = y;
  window.style.right = x;
  window.classList.toggle("hidden");
}

function randomPosition() {
  x = `${Math.random() * 762}px`;
  y = `${Math.random() * 368}px`;

  return [x, y];
}
