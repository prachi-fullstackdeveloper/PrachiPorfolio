//GSAP animation
 
// GSAP Animation for Navbar
// Show/hide navbars on scroll
if (window.innerWidth > 1024) {
    gsap.fromTo(".lap-fis-navbar",
      {
        opacity: 1,
        y: 0,
        pointerEvents: "auto"
      },
      {
        scrollTrigger: {
          trigger: ".home",
          scroller: "body",
          start: "top -5%",
          end: "top -10%",
          scrub: 2,
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: -100,
        pointerEvents: "none"
      }
    );
   
    gsap.fromTo(".lap-seco-navbar",
      {
        opacity: 0,
        y: -100,
        pointerEvents: "none"
      },
      {
        scrollTrigger: {
          trigger: ".home",
          scroller: "body",
          start: "top -5%",
          end: "top -10%",
          scrub: 2,
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        pointerEvents: "auto"
      }
    );
  }
   
   
  // Slide bar toggle function
  function mob_slidingNavbar() {
    const slidebar = document.getElementById("mobSlidebar");
    const body = document.body;
   
    // Toggle active class to show/hide slidebar
    slidebar.classList.toggle("active");
   
    // Toggle body blur effect
    body.classList.toggle("blur-background");
  }
   
  // Close the slidebar when the user scrolls
  window.addEventListener("scroll", function () {
    const slidebar = document.getElementById("mobSlidebar");
    const body = document.body;
   
    if (slidebar.classList.contains("active")) {
      // Remove the active class and blur effect when scrolling
      slidebar.classList.remove("active");
      body.classList.remove("blur-background");
    }
  });
   
  // typing animation
   
  const textArray = ["Full Stack Developer", "Creative Coder", "Tech Enthusiast"];
  let textIndex = 0;
  let charIndex = 0;
  let typing = true;
   
  function typeEffect() {
    const currentText = textArray[textIndex];
    const display = document.getElementById("typed-text");
   
    if (typing) {
      if (charIndex <= currentText.length) {
        display.textContent = currentText.substring(0, charIndex++);
        setTimeout(typeEffect, 100);
      } else {
        typing = false;
        setTimeout(typeEffect, 1000); // pause before deleting
      }
    } else {
      if (charIndex >= 0) {
        display.textContent = currentText.substring(0, charIndex--);
        setTimeout(typeEffect, 50);
      } else {
        typing = true;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 300); // pause before next word
      }
    }
  }
   
  // Start typing on load
  typeEffect();
   
  // project category changer
   
  function showProjects(category){
   
    // Hide all project sections
    document.getElementById("html_css-projects").style.display = "none";
    document.getElementById("javascript-projects").style.display = "none";
    document.getElementById("bootstrap-projects").style.display = "none";
    document.getElementById("react-projects").style.display = "none";
   
    // Show the selected category
    if (category === "html_css") {
      document.getElementById("html_css-projects").style.display = "flex";
    } else if (category === "javascript") {
      document.getElementById("javascript-projects").style.display = "flex";
    } else if (category === "bootstrap") {
      document.getElementById("bootstrap-projects").style.display = "flex";
    } else if (category === "react") {
      document.getElementById("react-projects").style.display = "flex";
    }
  }
   