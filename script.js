function toggleMenu() {
    let menu = document.querySelector(".menu-links");
    menu.classList.toggle("open");
    let icon = document.querySelector(".hamburger-icon");  
    icon.classList.toggle("open");
  }

function downloadCV() {
  var cvFilePath = 'CV.pdf';

  var downloadLink = document.createElement('a');
  downloadLink.href = cvFilePath;

  // Set the download attribute with a desired filename
  downloadLink.download = 'ShuZhang_CV.pdf';

  // Append the anchor to the body
  document.body.appendChild(downloadLink);

  // Trigger a click on the anchor element
  downloadLink.click();

  // Remove the anchor from the body
  document.body.removeChild(downloadLink);
}

// Attach the download function to the button click event
document.getElementById('downloadButton').addEventListener('click', downloadCV);