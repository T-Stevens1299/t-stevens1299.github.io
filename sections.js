
let sections = document.getElementsByClassName("portfolio");
let buttons = document.getElementsByClassName("tab");

buttons[0].classList.add("activeTab");

function showSection(sectionIndex) {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = i === sectionIndex ? "block" : "none";

    if (i === sectionIndex) {
        sections[i].scrollIntoView({ behavior: 'instant' });
      }
  }
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("activeTab");
  }
  buttons[sectionIndex].classList.add("activeTab");
}

window.onload = function() {
    sections[0].style.display = "block";
    buttons[0].classList.add("activeTab");
  };
  
