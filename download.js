const downloadButton = document.getElementById("downloadButton");

downloadButton.addEventListener("click", function() {
  const fileURL = "assets\cv\thomasstevens_cv.pdf"; // Replace with the actual file URL

  const downloadLink = document.createElement("a");
  event.preventDefault(); // Prevent default navigation
  downloadLink.href = fileURL;
  downloadLink.click();
});
