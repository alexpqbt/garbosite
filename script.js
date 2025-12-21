document.body.addEventListener("click", (e) => {
    const currentDialog = e.target.closest(".dialog")
    if (!currentDialog) return

    const currentIndex = parseInt(currentDialog.dataset.index, 10)
    if (isNaN(currentIndex)) return

    if (!e.target.classList.contains("option-1") && currentIndex === 3) {
        history.back()
    }

    const nextDialog = document.querySelector(`.dialog[data-index="${currentIndex + 1}"]`)
    if (!nextDialog) return

    if (e.target.classList.contains("option-1")) {
        nextDialog.classList.remove("hidden")
    }

    if (e.target.classList.contains("option-2")) {
        nextDialog.innerHTML = `
        <p>...</p>
        <div class="option">
            <button class="option-2">...</button>
        </div>
        `
        nextDialog.classList.remove("hidden")
    }
})
