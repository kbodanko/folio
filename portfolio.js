let rootElement = document.documentElement;
// let messengerIcon = document.querySelector('#messengerIcon');
let githubIcon = document.querySelector('#githubIcon');
// let fbIcon = document.querySelector('#fbIcon');
// let contactMessengerIcon = document.querySelector('#contactMessengerIcon');
let contactGithubIcon = document.querySelector('#contactGithubIcon');
// let contactFbIcon = document.querySelector('#contactFbIcon');
// let mailIcon = document.querySelector('#mailIcon');
let blackBg = document.querySelector('.blackBg');
let orangeBg = document.querySelector('.orangeBg');
let allAvatar = document.querySelector('.home_avatar');
let avatar = document.querySelector('.home_avatar_img');
let handWraper = document.querySelector('.home_hand_img');
let hand = document.querySelector('#hand');
let hiWraper = document.querySelector('.home_hi_img');
let hi = document.querySelector('#hi');
// let frontend = document.querySelector('.home_description_frontend');
// let developer = document.querySelector('.home_description_developer');
let homeDescription = document.querySelector('.home_description_about');
let line1 = document.querySelector('#line1');
let line2 = document.querySelector('#line2');
let line3 = document.querySelector('#line3');
let close = document.querySelector('.home_menu_close_img');
let hamburgerMenu = document.querySelector('.home_hamburger_menu');
let isMenuOpen = false;
let toparrow = document.querySelector('.toparrow');
let more = document.querySelectorAll('.example_photo_more');
let postApo = document.querySelector('#post_apo');
let winePage = document.querySelector('#wine_page');
let screenHeight = window.innerHeight - 100;
let swiperButtons = document.querySelector('.swiper-button-prev', '.swiper-button-next');
let prev = document.querySelector('.swiper-button-prev');
let webImg = document.querySelectorAll('.swiper_slide_web');
let designImg = document.querySelectorAll('.swiper_slide_design');

function setNameAnimation() {

    // const nameSpinning = [
    //     { width: '0' },
    //     { width: '125px' }
    // ];
    // const nameSpinningWide = [
    //     { width: '0' },
    //     { width: '205px' }
    // ];

    // const nameTiming = {
    //     duration: 2000,
    //     iterations: 1,
    // };

    const name = document.querySelector(".home_description_name");

    if (window.innerWidth < 800) {
        name.classList.add('home_description_name_under800');
        console.log('<800');
    } else {
        name.classList.add('home_description_name_over800');
    }

}

setNameAnimation();

// prev.addEventListener('mouseover', function () {
//     console.log('light');
//     for (let i = 0; i < webImg.length; i++) {
//         console.log(i);
//         webImg[i].style.filter = 'brightness(100%)';
//         console.log(webImg[i].style.filter);
//     }
// });
// prev.addEventListener('mouseleave', function () {
//     console.log('light');
//     for (let i = 0; i < webImg.length; i++) {
//         console.log(i);
//         webImg[i].style.filter = 'brightness(20%)';
//         console.log(webImg[i].style.filter);
//     }
// });
// for (let i = 0; i < designImg.length; i++) {
//     designImg[i].addEventListener('mouseleave', function () {
//         designImg[i].style.filter = 'brightness(100%)';
//     });
// }
// for (let i = 0; i < designImg.length; i++) {
//     designImg[i].addEventListener('mouseover', function () {
//         designImg[i].style.filter = 'brightness(20%)';
//     });
// }
// prev.addEventListener('mouseleave', function () {
//     console.log('light');
//     for (let i = 0; i < designImg.length; i++) {
//         console.log(i);
//         designImg[i].style.filter = 'brightness(20%)';
//         console.log(designImg[i].style.filter);
//     }
// });
// for (let i = 0; i < designImg.length; i++) {
//     designImg[i].addEventListener('mouseleave', function () {
//         designImg[i].style.filter = 'brightness(100%)';
//     });
// }
// for (let i = 0; i < designImg.length; i++) {
//     designImg[i].addEventListener('mouseover', function () {
//         designImg[i].style.filter = 'brightness(20%)';
//     });
// }



// }
// for (let i = 0; i < swiperButtons.length; i++) {
//     swiperButton[i].addEventListener('mouseover', function () {
//         swiperImg.style.filter = 'brightness:99%';
//     });

// }

function scrollToMore() {
    console.log(event.target === more[0]);
    if (event.target === document.querySelector('#more_design_p') || event.target === postApo)
        document.querySelector('#more_graphics').scrollIntoView({ behavior: "smooth" });
    else if (event.target === document.querySelector('#more_www_p') || event.target === winePage)
        document.querySelector('#more_design').scrollIntoView({ behavior: "smooth" });
}
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener(',click', scrollToMore);
}
document.querySelector('#more_design_p').addEventListener('click', scrollToMore);
document.querySelector('#more_graphics_p').addEventListener('click', scrollToMore);

postApo.addEventListener('click', scrollToMore);
winePage.addEventListener('click', scrollToMore);
// messengerIcon.addEventListener('mouseover', function () {
//     messengerIcon.classList.add('animate__headShake');
// });
// messengerIcon.addEventListener('mouseleave', function () {
//     messengerIcon.classList.remove('animate__headShake');
// });
// githubIcon.addEventListener('mouseover', function () {
//     githubIcon.classList.add('animate__headShake');
// });
// githubIcon.addEventListener('mouseleave', function () {
//     githubIcon.classList.remove('animate__headShake');
// });
// mailIcon.addEventListener('mouseover', function () {
//     mailIcon.classList.add('animate__headShake');
// });
// mailIcon.addEventListener('mouseleave', function () {
//     mailIcon.classList.remove('animate__headShake');
// });
let designSlideContent = ["xd/mob/good.png", "xd/mounts.png", "xd/phones4.png", "xd/ala.png", "xd/Group12.png"];

// let designSlideContent = ['xd/mob/good.png', 'xd/mounts.png', 'xd/phones4.png', "http://all4desktop.com/data_images/original/4189613-digital-abstract-eye-2.jpg"];
let webSlideContent = ['xd/mob/wine.png', 'xd/mob/doc.png', 'xd/mob/BigBangGame.png', 'xd/mob/Konfigurator.png',];
let webSlideUrl = ['https://kbodanko.github.io/wine-page/', 'https://kbodanko.github.io/doc/', 'https://kbodanko.github.io/BigBangGameVue/', 'https://kbodanko.github.io/Layan_konfigurator/'];
function fillDesignSlider() {
    let slidesDesign = document.querySelectorAll('.swiper_slide_design');
    for (let i = 0; i < designSlideContent.length; i++) {
        const designImg = designSlideContent[i];
        slidesDesign[i].style.backgroundImage = 'url(' + designImg + ')';
        slidesDesign[i].addEventListener('click', function () {
            window.open(designSlideContent[i]);
        });

    }
}
function fillWebSlider() {
    let slidesWeb = document.querySelectorAll('.swiper_slide_web');
    for (let i = 0; i < webSlideContent.length; i++) {
        const webImg = webSlideContent[i];
        slidesWeb[i].style.backgroundImage = 'url(' + webImg + ')';
        slidesWeb[i].addEventListener('click', function () {
            window.open(webSlideUrl[i]);
        });
    }
}
fillDesignSlider();
fillWebSlider();
let socialIcons = document.querySelectorAll('.social_icons_img');
// headShakeOFF = function (icon) {
//     icon.classList.remove('animate__headShake');
// };
// headShakeOn = function (icon) {
//     icon.classList.add('animate__headShake');
//     console.log('headShakeOn', icon);
// };

for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].addEventListener('mouseleave', function () {
        socialIcons[i].classList.remove('animate__headShake');
    });
}

for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].addEventListener('mouseover', function () {
        socialIcons[i].classList.add('animate__headShake');
    });
    console.log('headShakeOn');
}
// setTimeout(() => {

//     frontend.style.visibility = 'visible';
//     homeDescription.classList.add('animate__fadeIn'); homeDescription.style.visibility = 'visible';
// }, 500);
// frontend.classList.add('animate__zoomIn');

// setTimeout(() => { frontend.style.visibility = 'visible'; }, 300);
blackBg.style.transform = 'translateX(0) translateY(0)';
// setTimeout(() => {
//     developer.style.animationName = 'rotate';
// }, 300);
// setTimeout(() => {
//     developer.style.visibility = 'visible';
// }, 1000);
ejectAvatar = function () {
    avatar.classList.add('animate__bounceInRight'); avatar.style.visibility = 'visible';
    hand.style.animationName = 'wagging';

    handWraper.classList.add('animate__bounceInRight'); handWraper.style.visibility = 'visible';
    setTimeout(() => {
        hiWraper.classList.add('animate__zoomIn'); hiWraper.style.visibility = 'visible';
    }, 900);
    setTimeout(() => {
        hiWraper.classList.add('animate__zoomOut');
    }, 2500);

    setTimeout(() => { avatar.classList.add('animate__bounceInRight'); avatar.style.visibility = 'visible'; }, 700);
    // setTimeout(() => {

    //     hand.style.animation = 'none';
    // }, 500);

};
let aboutHeaders = document.querySelectorAll('.about_header');
aboutHeadersSlide = function () {
    for (let i = 0; i < aboutHeaders.length; i++) {
        if (aboutHeaders[i].getBoundingClientRect().top < screenHeight) {
            aboutHeaders[i].style.visibility = 'visible';
            aboutHeaders[i].classList.add('animate__animated', 'animate__zoomIn');
        }

    }
};
let article = document.querySelectorAll('article');
let tittles = document.querySelectorAll('.tittle');
let styleTittles = document.querySelectorAll('.style_tittle');

// function slideSocialIcons() {
//     for (let i = 0; i < styleTittles.length; i++) {
//         // console.log(tittles[i].getBoundingClientRect().top, topHeight, tittles[i].classList);
//         if (styleTittles[i].getBoundingClientRect().top < screenHeight) {
//             tittles[i].style.visibility = 'visible';
//             styleTittles[i].style.visibility = 'visible';
//             styleTittles[i].classList.add('animate__animated', 'animate__bounceInLeft');

//         }
//     }

// }


function tittleSlide() {
    let topHeight = window.pageYOffset + window.innerHeight;
    for (let i = 0; i < styleTittles.length; i++) {
        // console.log(tittles[i].getBoundingClientRect().top, topHeight, tittles[i].classList);
        if (styleTittles[i].getBoundingClientRect().top < screenHeight) {
            styleTittles[i].style.visibility = 'visible';
            tittles[i].style.visibility = 'visible';
            styleTittles[i].classList.add('animate__animated', 'animate__bounceInLeft');

        }
    }
    // for (let i = 0; i < tittles.length; i++) {
    //     // console.log(tittles[i].getBoundingClientRect().top, topHeight, tittles[i].classList);
    //     if (tittles[i].getBoundingClientRect().top < screenHeight) {
    //         tittles[i].style.visibility = 'visible';
    //         tittles[i].classList.add('animate__bounceInLeft');
    //     }
    // }
}
let describeParas = document.querySelectorAll('.about_describe_paras');
describeParasSlide = function () {
    for (let i = 0; i < describeParas.length; i++) {
        // console.log(describeParas[i].getBoundingClientRect().top, topHeight, describeParas[i].classList);
        if (describeParas[i].getBoundingClientRect().top < screenHeight) {
            describeParas[i].style.visibility = 'visible';
            describeParas[i].classList.add('animate__animated', 'animate__bounceInLeft');
        }
    }
};
let aboutWorksBg = document.querySelector('.about_works');
aboutWorksBg.style.display='none';
// aboutWorksBgSlide = function () {
//     if (aboutWorksBg.getBoundingClientRect().top < 200) {
//         aboutWorksBg.style.transform = 'translateX(0) translateY(0)';
//     }
// };
let contactBg = document.querySelector('.contact_bg');
let contact = document.querySelector('.kontakt');
contactSlide = function () {
    if (contact.getBoundingClientRect().bottom < 1350) {
        contact.style.transform = 'translateX(0) translateY(0)';
        // setTimeout(() => {
        // }, 200);
        tittles[6].classList.add('animate__bounceInLeft');
        setTimeout(() => {
            tittles[6].style.visibility = 'visible';
        }, 220);
    }
};


slideContactSocialIcons = function () {
    if (contact.getBoundingClientRect().top < screenHeight) {
        setTimeout(() => { contactMessengerIcon.classList.add('animate__bounceInLeft'); contactMessengerIcon.style.visibility = 'visible'; }, 500);
        setTimeout(() => { contactGithubIcon.classList.add('animate__bounceInLeft'); contactGithubIcon.style.visibility = 'visible'; }, 600);
        setTimeout(() => { contactFbIcon.classList.add('animate__bounceInLeft'); contactFbIcon.style.visibility = 'visible'; }, 700);

        // setTimeout(() => { contactMessengerIcon.classList.remove('animate__bounceInLeft'); }, 2000);
        // setTimeout(() => { contactGithubIcon.classList.remove('animate__bounceInLeft'); }, 2100);
        // setTimeout(() => { contactFbIcon.classList.remove('animate__bounceInLeft'); }, 2200);
    }
};
let aboutWorksIconsWraper = document.querySelectorAll('.about_works_icons_wraper');
function showIcons() {
    for (let i = 0; i < aboutWorksIconsWraper.length; i++) {
        // console.log(aboutWorksIconsWraper[i].getBoundingClientRect().top, topHeight, aboutWorksIconsWraper[i].classList);
        if (aboutWorksIconsWraper[i].getBoundingClientRect().top < screenHeight) {
            aboutWorksIconsWraper[i].style.visibility = 'visible';
            aboutWorksIconsWraper[i].classList.add('animate__animated', 'animate__fadeIn');
        }
    }
}
function techSkillsFlip() {
    let techSkills = document.querySelectorAll('.tech_skill');
    let animationDelay = 0.2;
    for (let i = 0; i < techSkills.length; i++) {
        const techSkill = techSkills[i];
        if (techSkill.getBoundingClientRect().top < screenHeight) {
            techSkill.style.visibility = 'visible';
            // animationDelay = animationDelay + 0.13;
            animationDelay += 0.13;
            techSkill.style.animationDelay = animationDelay + 's';
            techSkill.classList.add('animate__animated', 'animate__flipInY');
        }
    }
    setTimeout(() => {
        contactSlide();
    }, 300);
}
function portfolioDisplay() {
    let portfolio = document.querySelector('.portfolio_header');
    setTimeout(() => {
        if (portfolio.getBoundingClientRect().top < screenHeight) {
            portfolio.style.visibility = 'visible';
            portfolio.classList.add('animate__animated', 'animate__tada');
        }
    }, 500);
}
function showExamplePhoto() {
    let examplePhoto = document.querySelectorAll('.example_photo');
    for (let i = 0; i < examplePhoto.length; i++) {
        if (examplePhoto[i].getBoundingClientRect().top < screenHeight) {
            examplePhoto[i].style.visibility = 'visible';
            if (i === 0) {
                examplePhoto[i].classList.add('animate__animated', 'animate__fadeInTopLeft');
            } else {
                examplePhoto[i].classList.add('animate__animated', 'animate__fadeInTopRight');
            }

        }
    }
}
function load() {
    showIcons();
    showSwipers();
    techSkillsFlip();
    portfolioDisplay();
    tittleSlide();
//     aboutWorksBgSlide();
    showExamplePhoto();
    describeParasSlide();
    aboutHeadersSlide();
    slideContactSocialIcons();
    showEmail();


}
window.addEventListener('scroll', load);
window.addEventListener('load', load);
// window.addEventListener('scroll', showSwipers);
// window.addEventListener('scroll', techSkillsFlip);
// window.addEventListener('scroll', portfolioDisplay);
// window.addEventListener('scroll', tittleSlide);
// window.addEventListener('scroll', aboutWorksBgSlide);
// window.addEventListener('scroll', showExamplePhoto);
// window.addEventListener('scroll', describeParasSlide);
// window.addEventListener('scroll', aboutHeadersSlide);

// let email = document.querySelector('.e-mail');
// function showEmail() {
//     if (email.getBoundingClientRect().top < screenHeight) {
//         setTimeout(() => {
//             email.classList.add('animate__fadeIn');
//         }, 490);
//         setTimeout(() => {
//             email.style.visibility = 'visible';
//         }, 500);
//     }
// }
let orderButton = document.querySelectorAll('.order_button');
setTimeout(() => {
    for (let i = 0; i < orderButton.length; i++) {
        setTimeout(() => {
            orderButton[i].style.visibility = 'visible';
        }, 500);
        orderButton[i].classList.add('animate__rubberBand');

    }
}, 500);
rubberOrderButton = function () {
    for (let i = 0; i < orderButton.length; i++) {
        orderButton[i].classList.remove('animate__rubberBand');
        orderButton[i].offsetHeight;
        orderButton[i].classList.add('animate__rubberBand');


    }
};
let popUp = document.querySelector('.pop_up');
toparrowUpSlideOut = function () {
    toparrow.style.visibility = 'visible';
    toparrow.classList.add('animate__animated', 'animate__bounceInUp');
};
toparrowUpSlideOut();
for (let i = 0; i < orderButton.length; i++) {
    orderButton[i].addEventListener('mouseover', rubberOrderButton);
    orderButton[i].addEventListener('click', function () {
        popUp.style.zIndex = '9';
        popUp.style.visibility = 'visible';
        popUp.classList.remove('animate__rollOut');
        popUp.classList.add('animate__animated', 'animate__rollIn');
        blurBg();
    });


}
popUp.addEventListener('click', function () {
    popUp.classList.remove('animate__rollIn');
    popUp.classList.add('animate__rollOut');
    setTimeout(() => {
        popUp.style.visibility = 'hidden';
    }, 900);
    focusBg();
});
sayHi = function () {
    // hiWraper.classList.remove('animate__zoomIn');
    // hiWraper.classList.remove('animate__zoomOut');
    // hiWraper.classList.remove('animate__zoomIn animate__zoomOut');
    // setTimeout(() => {
    //     hiWraper.classList.add('animate__zoomIn'); hiWraper.style.visibility = 'visible';
    // }, 300);

    hiWraper.classList.add('animate__zoomIn');
    // hiWraper.style.visibility;
    // setTimeout(() => {
    //     hiWraper.classList.add('animate__zoomOut');
    // }, 2500);
    hand.style.animationName = null;
    hand.offsetHeight;
    hand.style.animationName = 'wagging';
    hand.style.animationIterationCount = '3';

};
window.addEventListener('click', function () {
    console.log(event.target.id);
});
function moreGraphics() {

}
document.querySelector('.home_menu_paras').addEventListener('click', scrollToElement);
document.querySelector('.home_menu_paras').addEventListener('keydown', function () {
    if (event.keyCode == 13) { document.querySelector('.home_menu_paras').click(); }

});

function scrollToElement() {

    let scrollTarget = (event.target.id.length > 0 ? event.target.id : event.target.parentElement.id);
    console.log(event.target, 'eventtrget', event.target.parentElement.id);
    let scrollTargetClass = '.' + scrollTarget;
    console.log(scrollTargetClass, typeof (scrollTargetClass));
    let currentScrollTargetClass = document.querySelector(scrollTargetClass);
    console.log(scrollTarget, currentScrollTargetClass);
    document.querySelector(scrollTargetClass).scrollIntoView({ behavior: "smooth" });
    closeMenu();

}
// function eventListenerSet() {
//     let menuOptions=document.querySelectorAll('.') = document.querySelectorAll('.article_bg');
//     for (let i = 0; i < picsUrlsBg.length; i++) {
//         picsUrlsBg[i].addEventListener('click', checkArticle);
//     }
// }
function scrollToTop() {
    console.log('top');
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
toparrow.addEventListener('click', scrollToTop);
slideHamburger = function () {
    setTimeout(() => { line1.style.visibility = 'visible'; line1.classList.add('animate__animated', 'animate__bounceInLeft'); }, 500);
    setTimeout(() => { line2.classList.add('animate__animated', 'animate__bounceInLeft'); line2.style.visibility = 'visible'; }, 600);
    setTimeout(() => { line3.classList.add('animate__animated', 'animate__bounceInLeft'); line3.style.visibility = 'visible'; }, 700);
    setTimeout(() => { line1.classList.remove('animate__animated', 'animate__bounceInLeft'); }, 2000);
    setTimeout(() => { line2.classList.remove('animate__animated', 'animate__bounceInLeft'); }, 2100);
    setTimeout(() => { line3.classList.remove('animate__animated', 'animate__bounceInLeft'); }, 2200);
    // line1.classList.remove('animate__animated', 'animate__bounceInLeft');
    // line2.classList.remove('animate__animated', 'animate__bounceInLeft');
    // line3.classList.remove('animate__animated', 'animate__bounceInLeft');

};
dropDownSocialIcons = function () {
//     setTimeout(() => { mailIcon.classList.add('animate__bounceInDown'); mailIcon.style.visibility = 'visible'; }, 500);
//     setTimeout(() => { messengerIcon.classList.add('animate__bounceInDown'); messengerIcon.style.visibility = 'visible'; }, 700);
    setTimeout(() => { githubIcon.classList.add('animate__bounceInDown'); githubIcon.style.visibility = 'visible'; }, 600);
//     setTimeout(() => { mailIcon.classList.remove('animate__bounceInDown'); }, 2000);
//     setTimeout(() => { messengerIcon.classList.remove('animate__bounceInDown'); }, 2100);
    setTimeout(() => { githubIcon.classList.remove('animate__bounceInDown'); }, 2200);
};
dropDownSocialIcons();
slideHamburger();
orangeBg.style.transform = 'translateX(0) translateY(0)';
setTimeout(() => {
    ejectAvatar();
}, 700);
hi.addEventListener('mouseover', sayHi);
window.addEventListener('click', function () {
    console.log(event.target);
});
hi.addEventListener('mouseleave', function () {
    hiWraper.classList.add('animate__zoomOut');
    hand.style.animationDelay = '0';
    hand.style.animationName = null;
    // setTimeout(() => {
    //     hiWraper.classList.remove('animate__zoomOut');
    // }, 2500);

});
let menu = document.querySelector('.home_menu');
let container = document.querySelector('.blur_container');
let blurBg = function () {
    container.style.filter = 'blur(5px) brightness(50%)';

};
let focusBg = function () {
    container.style.filter = 'blur(0) brightness(100%)';
    console.log('focus');
};
function showSwipers() {
    let swipers = document.querySelectorAll('.swiper');
    for (let i = 0; i < swipers.length; i++) {
        if (swipers[i].getBoundingClientRect().top < screenHeight) {
            swipers[i].style.visibility = 'visible';
            swipers[i].classList.add('animate__animated', 'animate__jackInTheBox');
        }
    }
}
window.addEventListener('scroll', function () {
    if (isMenuOpen) {
        window.scrollTo(0, 0);
    }
});
function openCloseMenu() {
    console.log(isMenuOpen);
    // console.log(event.target !== menu);
    if (isMenuOpen) {
        menu.style.top = '-100rem';
        focusBg();
        // console.log('close');
    } else {
        blurBg();
        menu.style.top = '0';
        // console.log('open');
    }
    isMenuOpen = !isMenuOpen;
    console.log(isMenuOpen);
}
let homeChildrens = document.querySelector('.home').children;
closeMenu = function () {
    console.log('close');
    let container = document.querySelector('.blur_container');
    if (isMenuOpen & event.target !== menu & event.target !== hamburgerMenu) {
        menu.style.top = '-100rem';
        container.style.filter = 'blur(0) brightness(100%)';
    }
    isMenuOpen = false;
};
// document.querySelectorAll(homeChildrens).addEventListener('click', closeMenu);
close.addEventListener('click', openCloseMenu);
hamburgerMenu.addEventListener('click', openCloseMenu);
let notMenu = !menu;
// window.addEventListener('click', closeMenu);
