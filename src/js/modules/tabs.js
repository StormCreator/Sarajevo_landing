function tabs(tabsSelector, galleryContent, tabActiveClass, contentActiveClass){

    const allTabs = document.querySelectorAll(tabsSelector),
            allContent = document.querySelectorAll(galleryContent);
    
    console.log(allTabs);
    allTabs.forEach((item, index) => {
        item.addEventListener('click', () => {
            document.getElementsByClassName('works__tab-active')[0].classList.remove(tabActiveClass);
            item.classList.add(tabActiveClass);
            allContent.forEach((item, i) => {
                item.classList.remove(contentActiveClass);
                if(index === i){
                    item.classList.add(contentActiveClass);
                }
            });
        });
    })    

}

export default tabs;