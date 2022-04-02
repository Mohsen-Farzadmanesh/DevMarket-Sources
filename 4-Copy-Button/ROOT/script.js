let copy = document.getElementById("copy");
let paste = document.getElementById("paste");

copy.addEventListener("click", () => {
    let copy_text = document.getElementById("copy-text");
    navigator.clipboard.writeText(copy_text.innerHTML);
});

paste.addEventListener("click", () => {
      let paste_input = document.getElementById("paste-text");
      navigator.clipboard.readText().then(clipText => paste_input.value = clipText);
})