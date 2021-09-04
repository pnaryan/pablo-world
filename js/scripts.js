/*!
* Start Bootstrap - Agency v7.0.6 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    //play song 1
    var song = document.getElementById("song");
    var playBTN = document.getElementById("imgPlay");
    playBTN.onclick = function (){
        if (song.paused){
            song.play();
            playBTN.src = "assets/img/pauseBTN.png"
        }else {
            song.pause();
            playBTN.src = "assets/img/playBTN.png"
        }
    }
//play song 2
    var song2 = document.getElementById("song2");
    var playBTN2 = document.getElementById("imgPlay2");
    playBTN2.onclick = function (){
        if (song2.paused){
            song2.play();
            playBTN2.src = "assets/img/pauseBTN.png"
        }else {
            song2.pause();
            playBTN2.src = "assets/img/playBTN.png"
        }
    }
//play song 3
    var song3 = document.getElementById("song3");
    var playBTN3 = document.getElementById("imgPlay3");
    playBTN3.onclick = function (){
        if (song3.paused){
            song3.play();
            playBTN3.src = "assets/img/pauseBTN.png"
        }else {
            song3.pause();
            playBTN3.src = "assets/img/playBTN.png"
        }
    }

});


