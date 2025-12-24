const dialogs = document.querySelector(".dialogs");

dialogs.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  if (button.id === "quit") history.back();

  showNextDialog(`.dialog.${button.dataset.next}`);
});

function showNextDialog(next) {
  const dialog = document.querySelector(next);
  dialog.classList.remove("hidden");
}
