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
  const window = document.querySelector(selector);
  window.classList.toggle("hidden");
}
