var navbarClass = {
    'open' 		: '.menu-icon .icon-open',
    'close' 	: '.menu-icon .icon-close',
    'navbar' 	: '.navbar',
    'collapse' 	: 'navbar-collapse',
    'active' 	: 'active',
    'screen'    : 767
};


// elements we want to remove from the html DOM
// we added attribute of mobile to them
// even though we have already styled them to be hidden on mobile
// most times we may want to remove it entirely from the DOM using javascript and not jquery
// this will allow our website speed up so fast and contribute to better SEO ranking as well
// mostly images, we don't want out websit to load too many images, and mostly on the homepage
function removeElements(element = null){
    const elementsToRemove = document.querySelectorAll(element);
    if (elementsToRemove.length > 0) {
        elementsToRemove.forEach(element => {
            element.remove();
        });
    }
}

// for nav menu harmbugger
// we used only javascript for that, so the application won't wait for jquery package to be loaded 
removeElements('[mobile-remove]');


// icon tracking
function iconMenu(elem){
    var $elem = $(elem),
        $parent = $elem.parent();

    // add class active to all child element
    $parent.children().addClass(navbarClass.active);

    // remove active class from clicked element
    $elem.removeClass(navbarClass.active);
}


// We should wrap all of our jquery into a ready loader
// Same as when we call $(document).ready();
$(function(){
    'use strict';

    // if window sreen-size is less than or equal to 767
    if(window.innerWidth <= navbarClass.screen){
        $(navbarClass.open).addClass(navbarClass.active);
    }

    // on window resize
    window.addEventListener('resize', () => {
        if(window.innerWidth <= navbarClass.screen){
            if(!$(navbarClass.close).hasClass(navbarClass.active)){
                $(navbarClass.open).addClass(navbarClass.active);
            }
        } else{
            $(navbarClass.open).removeClass(navbarClass.active);
            $(navbarClass.close).removeClass(navbarClass.active);
        }
    });

    // on open click
    $(navbarClass.open).click(function() {
        iconMenu(this);
        $(navbarClass.navbar).removeClass(navbarClass.collapse);
    });

    // on close click
    $(navbarClass.close).click(function() {
        iconMenu(this);
        $(navbarClass.navbar).addClass(navbarClass.collapse);
    });

    // scroll to top
    // this is from our `baseController` custom package
    baseController.b2top({
        class: '.b2top', 
        background: '#F9F6E6'
    });

    // meals-clicker
    baseController.checkDom('.meals-clicker', function(selector){
        $(selector).click(() => {
            baseController.scrollToObject(".testimonial_section", 10);
        });
    });

    
});

