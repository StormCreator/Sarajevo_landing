import tabs from './modules/tabs';
import hamburger from './modules/hamburger';
import scrolling from './modules/scrolling';
import modalInit from './modules/modal';
import mobileMenu from './modules/mobileMenu';


window.addEventListener('DOMContentLoaded', function() {
    
    tabs('.works__tab', '.gallery__content', 'works__tab-active', 'gallery__content-active');
    hamburger('.hamburger-btn__burger', '.header__navigation');
    scrolling();
    modalInit('.modal', '.modal__close', '.discuss__form-submit button');
    mobileMenu('.header__navigation-link', '.header__navigation', 'mobile-menu', '.hamburger-btn__burger');
});




