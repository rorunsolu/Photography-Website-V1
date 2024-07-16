window.addEventListener('scroll',
    function () {
        document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
    });

const nav = document.querySelector('.nav__list');
const openNavButton = document.querySelector('#nav__toggle-open');
const closeNavButton = document.querySelector('#nav__toggle-close');

/**
 * Toggles the display of the navigation menu.
 * If the menu is not displayed, it is displayed and the open and close buttons are updated.
 * If the menu is displayed, it is hidden and the open and close buttons are updated.
 */
const openNav = function () {
    // If the menu is not displayed, display it and update the buttons
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
        openNavButton.style.display = 'none';
        closeNavButton.style.display = 'inline-block';
    }
    // If the menu is displayed, hide it and update the buttons
    else {
        nav.style.display = 'none';
        openNavButton.style.display = 'inline-block';
        closeNavButton.style.display = 'none';
    }
};

openNavButton.addEventListener('click', openNav);

/**
 * Hides the navigation menu and updates the display of the open and close buttons.
 */
const closeNav = function () {
    // Hide the navigation menu
    nav.style.display = 'none';

    // Show the open navigation button
    openNavButton.style.display = 'inline-block';

    // Hide the close navigation button
    closeNavButton.style.display = 'none';
};

closeNavButton.addEventListener('click', closeNav);

if (document.body.clientWidth < 1000) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    });
}