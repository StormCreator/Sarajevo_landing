import tabs from './modules/tabs';
import hamburger from './modules/hamburger';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', function() {
    
    tabs('.works__tab', '.gallery__content', 'works__tab-active', 'gallery__content-active');
    hamburger('.hamburger-btn__burger', '.header__navigation');
    scrolling();

});




