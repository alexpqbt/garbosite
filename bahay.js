const nav = document.querySelector("#nav");
const windows = document.querySelectorAll(".window");

nav.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  if (button.id === "info") {
    const info = document.querySelector(".short-about-me");
    info.classList.toggle("hidden");
  }

  if (button.id === "likes") {
    const likes = document.querySelector(".my-likes");
    likes.classList.toggle("hidden");
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
