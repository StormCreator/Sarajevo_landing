function modalOpen(modalSelector) {
    console.log('this is open function!');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');

    overlay.style.width = "100%";
    modal.style.display = "block";

}

function modalClose(){
    console.log('this is close function!');
    const overlay = document.querySelector('.overlay'),
            modal = document.querySelector('.modal');

    modal.style.display = "none";
    overlay.style.width = "0";
}

function modalInit(modalSelector, closeSelector, modalTrigger){
    const trigger = document.querySelector(modalTrigger),
            modal = document.querySelector(modalSelector),
            closeTrigger = document.querySelector(closeSelector);

    trigger.addEventListener('click', e => {
        e.preventDefault();
        modalOpen(modal)
    });

    closeTrigger.addEventListener('click', () => {
        modalClose();
    });
}

export default modalInit;
