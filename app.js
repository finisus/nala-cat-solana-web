// execute after dom load
document.addEventListener('DOMContentLoaded', function() {

  // cat sound
  const sideCat = document.getElementById('side-cat');
  sideCat.addEventListener('mouseover', function() {
    let audio = new Audio("./metadata/softmeow1.mp3");
    audio.play();
  });
  const sideCat2 = document.getElementById('side-cat');
  sideCat2.addEventListener('click', function() {
    let audio = new Audio("./metadata/softmeow1.mp3");
    audio.play();
  });

  // copy button logic
  const copyButton = document.getElementById('copy-ca-button');
  const textToCopy = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });
});