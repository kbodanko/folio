let rootElement = document.documentElement;
let messengerIcon = document.querySelector('#messengerIcon');
let githubIcon = document.querySelector('#githubIcon');
let fbIcon = document.querySelector('#fbIcon');
let mailIcon = document.querySelector('#mailIcon');
let blackBg = document.querySelector('.blackBg');
let orangeBg = document.querySelector('.orangeBg');
let allAvatar = document.querySelector('.home_avatar');
let avatar = document.querySelector('.home_avatar_img');
let handWraper = document.querySelector('.home_hand_img');
let hand = document.querySelector('#hand');
let hiWraper = document.querySelector('.home_hi_img');
let hi = document.querySelector('#hi');
let frontend = document.querySelector('.home_description_frontend');
let developer = document.querySelector('.home_description_developer');
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
let beGood = document.querySelector('#be_good');

function scrollToMore() {
    if (event.target === more[0] || event.target === postApo)
        document.querySelector('#more_graphics').scrollIntoView({ behavior: "smooth" });
    else if (event.target === more[1] || event.target === beGood)
        document.querySelector('#more_design').scrollIntoView({ behavior: "smooth" });
}
for (let i = 0; i < more.length; i++) {
    more[i].addEventListener(',click', scrollToMore);
}
postApo.addEventListener('click', scrollToMore);
beGood.addEventListener('click', scrollToMore);
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
setTimeout(() => {

    frontend.style.visibility = 'visible';
    homeDescription.classList.add('animate__fadeIn'); homeDescription.style.visibility = 'visible';
}, 500);
frontend.classList.add('animate__zoomIn');

// setTimeout(() => { frontend.style.visibility = 'visible'; }, 300);
blackBg.style.transform = 'translateX(0) translateY(0)';
setTimeout(() => {
    developer.style.animationName = 'rotate';
}, 300);
setTimeout(() => {
    developer.style.visibility = 'visible';
}, 1000);
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
        if (aboutHeaders[i].getBoundingClientRect().top < 700) {
            aboutHeaders[i].style.visibility = 'visible';
            aboutHeaders[i].classList.add('animate__animated', 'animate__zoomIn');
        }

    }
};
let article = document.querySelectorAll('article');
let tittles = document.querySelectorAll('.tittle');
let styleTittles = document.querySelectorAll('.style_tittle');
function tittleSlide() {
    let topHeight = window.pageYOffset + window.innerHeight;
    for (let i = 0; i < styleTittles.length; i++) {
        // console.log(tittles[i].getBoundingClientRect().top, topHeight, tittles[i].classList);
        if (styleTittles[i].getBoundingClientRect().top < 700) {
            styleTittles[i].style.visibility = 'visible';
            styleTittles[i].classList.add('animate__animated', 'animate__bounceInLeft');

        }
    }
    for (let i = 0; i < tittles.length; i++) {
        // console.log(tittles[i].getBoundingClientRect().top, topHeight, tittles[i].classList);
        if (tittles[i].getBoundingClientRect().top < 700) {
            tittles[i].style.visibility = 'visible';
            tittles[i].classList.add('animate__bounceInLeft');
        }
    }
}
let describeParas = document.querySelectorAll('.about_describe_paras');
describeParasSlide = function () {
    for (let i = 0; i < describeParas.length; i++) {
        // console.log(describeParas[i].getBoundingClientRect().top, topHeight, describeParas[i].classList);
        if (describeParas[i].getBoundingClientRect().top < 700) {
            describeParas[i].style.visibility = 'visible';
            describeParas[i].classList.add('animate__animated', 'animate__bounceInLeft');
        }
    }
};
let aboutWorksBg = document.querySelector('.about_works_bg');
aboutWorksBgSlide = function () {
    if (aboutWorksBg.getBoundingClientRect().top < 200) {
        aboutWorksBg.style.transform = 'translateX(0) translateY(0)';
    }
};
let aboutWorksIconsWraper = document.querySelectorAll('.about_works_icons_wraper');
function showIcons() {
    for (let i = 0; i < aboutWorksIconsWraper.length; i++) {
        // console.log(aboutWorksIconsWraper[i].getBoundingClientRect().top, topHeight, aboutWorksIconsWraper[i].classList);
        if (aboutWorksIconsWraper[i].getBoundingClientRect().top < 700) {
            aboutWorksIconsWraper[i].style.visibility = 'visible';
            aboutWorksIconsWraper[i].classList.add('animate__animated', 'animate__fadeIn');
        }
    }
}
function techSkillsFlip() {
    let techSkills = document.querySelectorAll('.tech_skill');
    let animationDelay = 0.5;
    for (let i = 0; i < techSkills.length; i++) {
        const techSkill = techSkills[i];
        if (techSkill.getBoundingClientRect().top < 700) {
            techSkill.style.visibility = 'visible';
            animationDelay = animationDelay + 0.2;
            techSkill.style.animationDelay = animationDelay + 's';
            techSkill.classList.add('animate__animated', 'animate__flipInY');
        }
    }
}
function portfolioDisplay() {
    let portfolio = document.querySelector('.portfolio_header');
    setTimeout(() => {
        if (portfolio.getBoundingClientRect().top < 700) {
            portfolio.style.visibility = 'visible';
            portfolio.classList.add('animate__animated', 'animate__tada');
        }
    }, 500);
}
function showExamplePhoto() {
    let examplePhoto = document.querySelectorAll('.example_photo');
    for (let i = 0; i < examplePhoto.length; i++) {
        if (examplePhoto[i].getBoundingClientRect().top < 700) {
            examplePhoto[i].style.visibility = 'visible';
            if (i === 0) {
                examplePhoto[i].classList.add('animate__animated', 'animate__fadeInTopLeft');
            } else {
                examplePhoto[i].classList.add('animate__animated', 'animate__fadeInTopRight');
            }

        }
    }
}
window.addEventListener('scroll', showIcons);
window.addEventListener('scroll', showSwipers);
window.addEventListener('scroll', techSkillsFlip);
window.addEventListener('scroll', portfolioDisplay);
window.addEventListener('scroll', tittleSlide);
window.addEventListener('scroll', aboutWorksBgSlide);
window.addEventListener('scroll', showExamplePhoto);
window.addEventListener('scroll', describeParasSlide);
window.addEventListener('scroll', aboutHeadersSlide);
let orderButton = document.querySelectorAll('.order_button');
setTimeout(() => {
    for (let i = 0; i < orderButton.length; i++) {
        orderButton[i].style.visibility = 'visible';
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
        document.querySelector('.pop_up').style.zIndex = '9';
        document.querySelector('.pop_up').style.visibility = 'visible';
        popUp.classList.remove('animate__rollOut');
        document.querySelector('.pop_up').classList.add('animate__animated', 'animate__rollIn');
        blurBg();
    });


}
popUp.addEventListener('click', function () {
    popUp.classList.remove('animate__rollIn');
    popUp.classList.add('animate__rollOut');
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
function scrollToElement() {

    let scrollTarget = (event.target.id.length > 0 ? event.target.id : event.target.parentElement.id);
    console.log(scrollTarget);
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
    setTimeout(() => { mailIcon.classList.add('animate__bounceInDown'); mailIcon.style.visibility = 'visible'; }, 500);
    setTimeout(() => { messengerIcon.classList.add('animate__bounceInDown'); messengerIcon.style.visibility = 'visible'; }, 700);
    setTimeout(() => { githubIcon.classList.add('animate__bounceInDown'); githubIcon.style.visibility = 'visible'; }, 600);
    setTimeout(() => { mailIcon.classList.remove('animate__bounceInDown'); }, 2000);
    setTimeout(() => { messengerIcon.classList.remove('animate__bounceInDown'); }, 2100);
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
    console.log(event.target, event.target !== menu);
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
        if (swipers[i].getBoundingClientRect().top < 700) {
            swipers[i].style.visibility = 'visible';
            swipers[i].classList.add('animate__animated', 'animate__jackInTheBox');
        }
    }
}
function openCloseMenu() {
    console.log(isMenuOpen);
    // console.log(event.target !== menu);
    if (isMenuOpen) {
        menu.style.top = '-60rem';
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
        menu.style.top = '-60rem';
        container.style.filter = 'blur(0) brightness(100%)';
    }
    isMenuOpen = false;
};
// document.querySelectorAll(homeChildrens).addEventListener('click', closeMenu);
close.addEventListener('click', openCloseMenu);
hamburgerMenu.addEventListener('click', openCloseMenu);
let notMenu = !menu;
// window.addEventListener('click', closeMenu);
