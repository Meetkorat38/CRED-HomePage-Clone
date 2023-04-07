

// // section-4

const section4 = document.querySelector('.section-4')

const section4Leftone = document.querySelector('.section-4-left-1')
const section4Lefttwo = document.querySelector('.section-4-left-2')
const section4Leftthree = document.querySelector('.section-4-left-3')
const section4Leftfour = document.querySelector('.section-4-left-4')

const section4Rightimage = document.querySelector('.section-4-right-image')

const section4Rightimage1 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png"
const section4Rightimage2 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png"
const section4Rightimage3 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png"
const section4Rightimage4 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png"

// const scrolling effect

window.addEventListener('scroll', () => {

    const scrollPosition = window.scrollY
    const section4_Of_setTop = section4.offsetTop; 
    const section4_Hight = section4.clientHeight;

    if ((scrollPosition > section4_Of_setTop) && (scrollPosition < section4_Hight + section4_Of_setTop)) {

        if ((scrollPosition > section4_Of_setTop) && (scrollPosition < section4_Of_setTop + 300)) {
            section4Leftone.style.opacity = 1;
            section4Leftone.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section4_Of_setTop + innerHeight && scrollPosition < section4_Of_setTop + innerHeight + 300) {
            section4Lefttwo.style.opacity = 1;
            section4Lefttwo.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section4_Of_setTop + innerHeight && scrollPosition < section4_Of_setTop + innerHeight * 2 + 300) {
            section4Leftthree.style.opacity = 1;
            section4Leftthree.style.transition = "opacity 1s ease-in-out"
        } else if (scrollPosition > section4_Of_setTop + innerHeight && scrollPosition < section4_Of_setTop + innerHeight * 3 + 300) {
            section4Leftfour.style.opacity = 1;
            section4Leftfour.style.transition = "opacity 1s ease-in-out"
        } else {
            section4Leftone.style.opacity = 0;
            section4Lefttwo.style.opacity = 0;
            section4Leftthree.style.opacity = 0;
            section4Leftfour.style.opacity = 0;
        }

        if (scrollPosition > section4_Of_setTop && scrollPosition < section4_Of_setTop + innerHeight) {
            section4Rightimage.src = section4Rightimage1
            section4Rightimage.style.transition = "opacity 1s ease-in-out"

        } else if (scrollPosition > section4_Of_setTop + innerHeight && scrollPosition < section4_Of_setTop + innerHeight * 2) {
            section4Rightimage.src = section4Rightimage2
            section4Rightimage.style.transition = "opacity 1s ease-in-out"

        } else if (scrollPosition > section4_Of_setTop + innerHeight * 2 && scrollPosition < section4_Of_setTop + innerHeight * 3) {
            section4Rightimage.src = section4Rightimage3
            section4Rightimage.style.transition = "opacity 1s ease-in-out"

        } else if (scrollPosition > section4_Of_setTop + innerHeight * 3 && scrollPosition < section4_Of_setTop + innerHeight * 4) {
            section4Rightimage.src = section4Rightimage4
            section4Rightimage.style.transition = "opacity 1s ease-in-out"

        }else{
            section4Rightimage.src = section4Rightimage1
        }
    }

})

// // window
// // scroll 
// // clientHeight
// // innerHeight
// // dom


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////
