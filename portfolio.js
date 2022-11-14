let rootElement = document.documentElement;
// let messengerIcon = document.querySelector('#messengerIcon');
let githubIcon = document.querySelector('#githubIcon');
// let fbIcon = document.querySelector('#fbIcon');
// let contactMessengerIcon = document.querySelector('#contactMessengerIcon');
let contactGithubIcon = document.querySelector('#contactGithubIcon');
// let contactFbIcon = document.querySelector('#contactFbIcon');
// let mailIcon = document.querySelector('#mailIcon');
// let blackBg = document.querySelector('.blackBg');
// let orangeBg = document.querySelector('.orangeBg');
// let allAvatar = document.querySelector('.home_avatar');
// let avatar = document.querySelector('.home_avatar_img');
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

function setNameAnimation() {

    const name = document.querySelector(".home_description_name");

    if (window.innerWidth < 800) {
        name.classList.add('home_description_name_under800');
        console.log('<800');
    } else {
        name.classList.add('home_description_name_over800');
    }

}

setNameAnimation();
let designSlideContent = ["xd/mob/good.png", "xd/mounts.png", "xd/phones4.png", "xd/ala.png", "xd/Group12.png", "xd/Desktop2.png"];

let webSlideContent = ['xd/mob/doc.png', 'xd/mob/BigBangGame.png', 'xd/mob/Konfigurator.png', 'xd/mob/wine.png'];
let webSlideUrl = ['https://kbodanko.github.io/doc/', 'https://kbodanko.github.io/BigBangGameVue/', 'https://kbodanko.github.io/Layan_konfigurator/', 'https://kbodanko.github.io/wine-page/'];
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

let socialIcons = document.querySelectorAll('.social_icons_img');


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

function tittleSlide() {
    let topHeight = window.pageYOffset + window.innerHeight;
    for (let i = 0; i < styleTittles.length; i++) {
        if (styleTittles[i].getBoundingClientRect().top < screenHeight) {
            styleTittles[i].style.visibility = 'visible';
            tittles[i].style.visibility = 'visible';
            styleTittles[i].classList.add('animate__animated', 'animate__bounceInLeft');

        }
    }
}
let describeParas = document.querySelectorAll('.about_describe_paras');
describeParasSlide = function () {
    for (let i = 0; i < describeParas.length; i++) {
        if (describeParas[i].getBoundingClientRect().top < screenHeight) {
            describeParas[i].style.visibility = 'visible';
            describeParas[i].classList.add('animate__animated', 'animate__bounceInLeft');
        }
    }
};

slideContactSocialIcons = function () {
    if (contact.getBoundingClientRect().top < screenHeight) {
        setTimeout(() => { contactMessengerIcon.classList.add('animate__bounceInLeft'); contactMessengerIcon.style.visibility = 'visible'; }, 500);
        setTimeout(() => { contactGithubIcon.classList.add('animate__bounceInLeft'); contactGithubIcon.style.visibility = 'visible'; }, 600);
        setTimeout(() => { contactFbIcon.classList.add('animate__bounceInLeft'); contactFbIcon.style.visibility = 'visible'; }, 700);

    }
};
let aboutWorksIconsWraper = document.querySelectorAll('#githubIcon');
function showIcons() {
    for (let i = 0; i < aboutWorksIconsWraper.length; i++) {

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


}
window.addEventListener('scroll', load);
window.addEventListener('load', load);

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
window.addEventListener('click', function () {
    console.log(event.target.id);
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
function ejectAvatar() {
    let avatar = document.querySelector('#avatar');

    // avatar.classList.add('animate__bounceInRight'); avatar.style.visibility = 'visible';

    // handWraper.classList.add('animate__bounceInRight'); handWraper.style.visibility = 'visible';
    // setTimeout(() => {
    //     hiWraper.classList.add('animate__zoomIn'); hiWraper.style.visibility = 'visible';
    // }, 900);
    // setTimeout(() => {
    //     hiWraper.classList.add('animate__zoomOut');
    // }, 2500);

    setTimeout(() => { avatar.classList.add('animate__bounceInRight'); avatar.style.visibility = 'visible'; }, 100);
    // setTimeout(() => {

    //     hand.style.animation = 'none';
    // }, 500);

}
ejectAvatar();

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


};
dropDownSocialIcons = function () {
    setTimeout(() => { githubIcon.classList.add('animate__bounceInDown'); githubIcon.style.visibility = 'visible'; }, 600);
    setTimeout(() => { githubIcon.classList.remove('animate__bounceInDown'); }, 2200);
};
dropDownSocialIcons();
slideHamburger();

window.addEventListener('click', function () {
    console.log(event.target);
});
let menu = document.querySelector('.home_menu');
let container = document.querySelector('.blur_container');
let blurBg = function () {
    container.style.filter = 'blur(5px) brightness(50%)';

};

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
