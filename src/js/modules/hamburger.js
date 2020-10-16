function hamburger(hamburgerSelector, menuSelector){
    const hamburgerBtn = document.querySelector(hamburgerSelector);
    let menu = document.querySelector(menuSelector);
    let isMenuOpen = false;
    hamburgerBtn.addEventListener("click", () => {
        if (!isMenuOpen) {
            hamburgerBtn.classList.add("open");
            menu.classList.add('mobile-menu');
            
        } 
        else {
            hamburgerBtn.classList.remove("open");
             menu.classList.remove('mobile-menu');
        }

         isMenuOpen = !isMenuOpen;
    });
}

export default hamburger;