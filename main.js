window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

// function handleScroll() {
//   const docHeight = document.body.offsetHeight;
//   const winHeight = window.innerHeight;
//   const scrollPos = window.pageYOffset;
//   const scrollPercentage = scrollPos / (docHeight - winHeight);

//   document.body.style.setProperty('--scroll', scrollPercentage);
// }

// window.addEventListener('scroll', handleScroll, false);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".scroll").forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top",
    pin: true,
    pinSpacing: false,
  });
});

//create a basic form

var modal = document.querySelector(".modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
