function copyToClipboard() {
    const text = document.getElementById("add-input").textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Copied to clipboard!");
}

// Attach the function to the button when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", copyToClipboard);
});
