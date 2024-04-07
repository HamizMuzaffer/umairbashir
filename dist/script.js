function designPageAnimation(){
  gsap.from("#designPage", {
    y: 100,
    stagger: 0.25,
    duration: 1,
    opacity: 0,


    scrollTrigger: {
      trigger: "#designPage",
      scroller: "body",
      start: "top 40%",
      end: "top 37%",
      scrub: 2
    }

  })
}  

designPageAnimation();

function editPageAnimation(){
  gsap.from("#editPage", {
    y: 100,
    stagger: 0.25,
    duration: 1,
    opacity: 0,


    scrollTrigger: {
      trigger: "#editPage",
      scroller: "body",
      start: "top 40%",
      end: "top 37%",
      scrub: 2
    }

  })
}  
editPageAnimation();


function documnetaryPageAnimation(){
  gsap.from("#editDocumentary", {
    y: 100,
    stagger: 0.25,
    duration: 1,
    opacity: 0,


    scrollTrigger: {
      trigger: "#editDocumentary",
      scroller: "body",
      start: "top 40%",
      end: "top 37%",
      scrub: 2
    }

  })
}  

function intoPageAnimation(){
  gsap.from("#editIntro", {
    y: 100,
    stagger: 0.25,
    duration: 1,
    opacity: 0,


    scrollTrigger: {
      trigger: "#editIntro",
      scroller: "body",
      start: "top 40%",
      end: "top 37%",
      scrub: 2
    }

  })
}  

intoPageAnimation();


function motionGraphicsPageAnimation(){
  gsap.from("#editMotionGraphics", {
    y: 100,
    stagger: 0.25,
    duration: 1,
    opacity: 0,


    scrollTrigger: {
      trigger: "#editMotionGraphics",
      scroller: "body",
      start: "top 40%",
      end: "top 37%",
      scrub: 2
    }

  })
}
motionGraphicsPageAnimation()

function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    speed: 3000,

  });
}
sliderAnimation()


var modal = document.getElementById("myModal");

// Get the video player
var videoPlayer = document.getElementById("videoPlayer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



const documentaryImage = document.getElementById("documentaryImage");
documentaryImage.addEventListener('click', ()=>{
  modal.style.display = "block"
  const getVideo = document.getElementById("videoPlayer")
  getVideo.src = "https://www.youtube.com/embed/o9PAA9FmgKo?si=C8_RlUl2WFu8Inmz";
})

const introImage  = document.getElementById("introImage");
introImage.addEventListener("click", ()=>{
  modal.style.display = "block"
  const getVideo = document.getElementById("videoPlayer");
  getVideo.src = "https://www.youtube.com/embed/fnMeqM7gvs4?si=wHvsQ9jqubVBBkVA";
})

const motionImage = document.getElementById("motionImage");
motionImage.addEventListener("click", ()=>{
  modal.style.display = "block"
  const getVideo = document.getElementById("videoPlayer");
  getVideo.src = "https://www.youtube.com/embed/Gno-jkAR888?si=GlTZrVw-Y_dg3kQa";
})




// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// document.addEventListener('DOMContentLoaded',  ()=> {
//   var video = document.getElementById('myVideo');
//   video.play();
// });
