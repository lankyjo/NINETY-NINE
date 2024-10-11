let tl = gsap.timeline();


tl.to('.overlay', {
    opacity: 0.3,
    duration: 4,
    ease: 'power4.Out'
})
tl.to('.overlay', {
    opacity: 0
})
tl.to('.white-overlay', {
    opacity: 0.9,
    duration:1
})
tl.to('#intro',{
    opacity: 0,
    duration: 1,
    onComplete: function() {
        document.querySelector(".intro").remove(); 
      }
})
tl.to('.intro-logo', {
    delay: -1,
    opacity: 1,
    duration: 1,
})
tl.to('.intro-logo', {
    top: '3vh',
    duration: 1,
    fontSize: 'clamp(1.2rem, 0.5455rem + 3.2727vw, 3rem)'
})
tl.from('.home-content', {
    opacity: 0
})
// tl.from('.home-circle', {
//     opacity: 1,
//     // delay: 2
// })
tl.from('.home-swiper, footer, .header a', {
    opacity: 0
})



// let swiperHome = new Swiper('.home-swiper', {
//     loop: true,
//     // grabCursor: true,
//     slidesPerView: 'auto',
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         768: {

//             slidesPerView: 3,
//             centeredSlides: 'auto',
//         },
//         1152:{
//             centeredSlides: 'auto',
//             spaceBetween: -64,
//         }
//     }
//   });

//   let cancelBtns = document.querySelectorAll('.cancel-btn');
//   let productPages = document.querySelectorAll('.product-page');
//   let articles = document.querySelectorAll('.home-article');
  
//   function showProductPage(articles, productPages) {
//       articles.forEach((article, i) => {
//           article.addEventListener('click', () => {
//               // Remove 'active' class from all pages
//               productPages.forEach(page => {
//                   page.classList.remove('active');
//               });
              
//               // Add 'active' class only to the correct product page
//               productPages[i].classList.add('active');
//           });
//       });
//   }
  
//   // Handle cancel buttons
//   cancelBtns.forEach((cancelBtn, i) => {
//       cancelBtn.addEventListener('click', () => {
//           productPages[i].classList.remove('active');
//       });
//   });
  
//   showProductPage(articles, productPages);
  




  let swiperHome = new Swiper('.home-swiper', {
    loop: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: 'auto',
        },
        1152: {
            centeredSlides: 'auto',
            spaceBetween: -64,
        }
    },
    on: {
        init: function () {
            setupProductPageInteraction(this);
        },
        loopFix: function () {
            setupProductPageInteraction(this);
        }
    }
});

function setupProductPageInteraction(swiper) {
    let productPages = document.querySelectorAll('.product-page');
    let cancelBtns = document.querySelectorAll('.cancel-btn');

    swiper.slides.forEach((slide, index) => {
        slide.onclick = function() {
            let realIndex = parseInt(slide.getAttribute('data-swiper-slide-index'));
            productPages.forEach(page => page.classList.remove('active'));
            if (productPages[realIndex]) {
                productPages[realIndex].classList.add('active');
            }
        };
    });

    cancelBtns.forEach((cancelBtn, i) => {
        cancelBtn.onclick = () => {
            productPages[i].classList.remove('active');
        };
    });
}