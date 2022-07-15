$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header-bottom').toggleClass('active');
        $('body').toggleClass('lock')
    });
});
let btn = document.querySelector('.scroll__btn')
let header = document.querySelector('.header-bottom')
let animationn = document.querySelector('.header-bottom__image-img4')
const mediaquery = window.matchMedia('(min-width: 572px)')
const mediaquerymax = window.matchMedia('(max-width: 572px)')
//
function magic() {
    if (window.pageYOffset > 400) {
        btn.style.opacity = '1'
    }
   
    else { btn.style.opacity = '0' }
    if(window.matchMedia('(min-width: 768px)')){
        abdu();
    }
    
}
//
btn.onclick = function () {
    window.scrollTo(0,0)
}
function abdu(){
    if(mediaquery.matches){
        header.style.position = 'relative';
        animationn.style.animationName = "bounce-4";
        if(window.pageYOffset > 170){
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.width = '100%';
            header.style.background = "#292E36"
            header.style.zIndex = '50';
            // header.style.borderBottom = "1px solid silver"
            animationn.style.animationName = "none";
        }
    }
    if(mediaquerymax.matches){
            header.style.position = 'fixed';
    }
}

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0){
    window.addEventListener('scroll',animOnScroll);
     function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active')
            }
            else{
                if (!animItem.classList.contains( '_anim-no-hide')){
                    animItem.classList.remove('_active')
                }
               
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
}


// When scrolling, we run the function
window.onscroll = magic;

   