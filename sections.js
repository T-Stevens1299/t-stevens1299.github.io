
let sections = document.getElementsByClassName("portfolio");
let buttons = document.getElementsByClassName("tab");

buttons[0].classList.add("activeTab");

function showSection(sectionIndex) {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = i === sectionIndex ? "flex" : "none";

    if (i === sectionIndex) {
        sections[i].scrollIntoView({ behavior: 'instant', block: 'center' });
      }
  }
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("activeTab");
  }
  buttons[sectionIndex].classList.add("activeTab");
};

function toTop(){
  window.scrollTo(0, 0);
};

window.onload = function() {
    sections[0].style.display = "flex";
    buttons[0].classList.add("activeTab");
  };

  const nav = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
  

