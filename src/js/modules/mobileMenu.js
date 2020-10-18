function mobileMenu(menuLinks, mobileMenuSelector, mobileClass, hamburgerSelector){
    const links = document.querySelectorAll(menuLinks),
            menu = document.querySelector(mobileMenuSelector),
            hamburger = document.querySelector(hamburgerSelector);

    links.forEach(item => {
        item.addEventListener('click', () => {
            if(menu.classList.contains(mobileClass)){
                menu.classList.remove(mobileClass);
                hamburger.classList.remove("open");
            }
        });
    });
}

export default mobileMenu;