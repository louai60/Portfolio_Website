// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.scrollY;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
  
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href='#" + sectionId + "']").classList.add("active");
    } else {
      document.querySelector(".navigation a[href='#" + sectionId + "']").classList.remove("active");
    }
  });
}
