/*!
 * Tame Components v1.0.0
 * https://tamedev.com
 * Copyright 2020-present F Peterson
 * Released under the MIT license
 */

//UI CONTROLLER
var viewController = (function()
{
    
    var strings = {
        submitSpan: ".btn-loader span",
        submitImg: ".btn-loader img",
        submitIcon: ".btn-loader i",
        fancyLoader: ".btn-fancy-loader",
        fancyEffect: "effect",
        horizonLoader: ".btn-horizon-loader",
        allElements: "textarea,button,input,select",
        checkError: ".check-error",
        checkError_P: ".check-error p",
        checkError_I: ".check-error i",
        messageSet: ".custom-alert.message-set",
        customAlertDanger: "custom-alert danger",
        customAlertInfo: "custom-alert info",
        customAlertSuccess: "custom-alert success",
        customAlertError: "custom-alert error",
        customAlertWarning: "custom-alert warning",
        alertDanger: "alert alert-danger",
        alertDanger_style: "5px solid #b54442",
        alertInfo: "alert alert-info",
        alertInfo_style: "5px solid #3170a1",
        alertSuccess: "alert alert-success",
        alertSuccess_style: "5px solid #3c763d",
        alertWarning: "alert alert-warning",
        alertWarning_style: "5px solid #8a6d3b",
        hidden: "hidden",
        selected: "selected",
        disabled: "disabled",
        notifyIn: "animate__animated animate__bounceIn",
        notifyOut: "animate__animated animate__bounceOut",
        notifyIcon: "fa fa-info-circle",
        notifyFrom: "top",
        notifyAlign: "right",
        animateEffect: "animate__fadeIn",
        animateEffectIn: "animate__flipInY",
        animateEffectOut: "animate__flipOutY",
        animated: "animate__animated",
        swalTitle: "<p class='pop-error-title'>",
        swalHtml: "<p class='pop-error'>",
        swalClose: "</p>",
        introSkip_Done: ".introjs-skipbutton",
        fakeLoader: '',
        fakeLoaderBG: '#2ecc71',
        fakeLoaderSpinner: 'spinner1',
        winWidth: 767
    };
    
    var messageTemp = {
        success: function(parent, message)
        {
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.alertDanger);
            $(parent).find(strings.checkError).removeClass(strings.alertInfo);
            $(parent).find(strings.checkError).removeClass(strings.alertWarning);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(strings.checkError_P).css({'color': '#3c763d'});
            $(parent).find(strings.checkError_P).html(message).parents('.form-group').addClass(strings.alertSuccess).css({'border-left': strings.alertSuccess_style}).fadeIn();
        },
        danger: function(parent, message)
        {
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.alertSuccess);
            $(parent).find(strings.checkError).removeClass(strings.alertInfo);
            $(parent).find(strings.checkError).removeClass(strings.alertWarning);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(strings.checkError_P).css({'color': '#b54442'});
            $(parent).find(strings.checkError_P).html(message).parents('.form-group').addClass(strings.alertDanger).css({'border-left': strings.alertDanger_style}).fadeIn();
        },
        info: function(parent, message)
        {
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.alertSuccess);
            $(parent).find(strings.checkError).removeClass(strings.alertDanger);
            $(parent).find(strings.checkError).removeClass(strings.alertWarning);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(strings.checkError_P).css({'color': '#3170a1'});
            $(parent).find(strings.checkError_P).html(message).parents('.form-group').addClass(strings.alertInfo).css({'border-left': strings.alertInfo_style}).fadeIn();
        },
        warning: function(parent, message)
        {
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.alertSuccess);
            $(parent).find(strings.checkError).removeClass(strings.alertDanger);
            $(parent).find(strings.checkError).removeClass(strings.alertInfo);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(strings.checkError_P).css({'color': '#8a6d3b'});
            $(parent).find(strings.checkError_P).html(message).parents('.form-group').addClass(strings.alertWarning).css({'border-left': strings.alertWarning_style}).fadeIn();
        }
    };
    
    var messageTemp2 = {
        success: function(parent, message)
        {
            $(parent).find(strings.messageSet).slideUp(300, function(){$(parent).find(strings.messageSet).remove();});
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.customAlertDanger);
            $(parent).find(strings.checkError).removeClass(strings.customAlertInfo);
            $(parent).find(strings.checkError).removeClass(strings.customAlertError);
            $(parent).find(strings.checkError).removeClass(strings.customAlertWarning);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(parent).find(strings.checkError_P).html(message).parents(strings.checkError).addClass(strings.customAlertSuccess).fadeIn();
        },
        danger: function(parent, message)
        {
            $(parent).find(strings.messageSet).slideUp(300, function(){$(parent).find(strings.messageSet).remove();});
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.customAlertSuccess);
            $(parent).find(strings.checkError).removeClass(strings.customAlertInfo);
            $(parent).find(strings.checkError).removeClass(strings.customAlertError);
            $(parent).find(strings.checkError).removeClass(strings.customAlertWarning);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(parent).find(strings.checkError_P).html(message).parents(strings.checkError).addClass(strings.customAlertDanger).fadeIn();
        },
        info: function(parent, message)
        {
            $(parent).find(strings.messageSet).slideUp(300, function(){$(parent).find(strings.messageSet).remove();});
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.customAlertSuccess);
            $(parent).find(strings.checkError).removeClass(strings.customAlertDanger);
            $(parent).find(strings.checkError).removeClass(strings.customAlertError);
            $(parent).find(strings.checkError).removeClass(strings.customAlertWarning);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(parent).find(strings.checkError_P).html(message).parents(strings.checkError).addClass(strings.customAlertInfo).fadeIn();
        },
        error: function(parent, message)
        {
            $(parent).find(strings.messageSet).slideUp(300, function(){$(parent).find(strings.messageSet).remove();});
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.customAlertSuccess);
            $(parent).find(strings.checkError).removeClass(strings.customAlertDanger);
            $(parent).find(strings.checkError).removeClass(strings.customAlertInfo);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(parent).find(strings.checkError_P).html(message).parents(strings.checkError).addClass(strings.customAlertError).fadeIn();
        },
        warning: function(parent, message)
        {
            $(parent).find(strings.messageSet).slideUp(300, function(){$(parent).find(strings.messageSet).remove();});
            $(parent).find(strings.checkError).removeClass(strings.hidden);
            $(parent).find(strings.checkError).removeClass(strings.customAlertSuccess);
            $(parent).find(strings.checkError).removeClass(strings.customAlertDanger);
            $(parent).find(strings.checkError).removeClass(strings.customAlertInfo);
            $(parent).find(strings.checkError).removeClass(strings.customAlertError);
            $(parent).find(strings.checkError_I).removeClass(strings.hidden);
            $(parent).find(strings.checkError_P).html(message).parents(strings.checkError).addClass(strings.customAlertWarning).fadeIn();
        }
    };
    
    return {
        getStrings: function()
        {
            return strings;
        },
        getMessageTemp: function()
        {
            return messageTemp;
        },
        getMessageTemp2: function()
        {
            return messageTemp2;
        }
    };
})();


//SLICK SLIDERS
var slickSlider = (function()
{ 
    // Check selected dom
    var check = function(selector)
    {
        return $("html, body").find(selector).length;
    };
    
    return {
        slick: function(selector, sts_lg, sts_md, sts_sm, sts_xs)
        {
            //SLICK CAROUSEL
            if(check(selector) !== 0)
            {
                $(selector).slick({
                    slidesToShow: typeof sts_lg[0] === 'string' ? 4 : sts_lg[0],
                    slidesToScroll: 1,
                    rows: 1,
                    autoplay: typeof sts_lg[1] === 'string' ? false : sts_lg[1],
                    infinite: typeof sts_lg[2] === 'string' ? true : sts_lg[2],
                    autoplaySpeed: typeof sts_lg[3] === 'string' ? 1500 : sts_lg[3],
                    draggable:true,
                    dots:false,
                    pauseOnHover:true,
                    arrows:true,
                    centerMode: typeof sts_lg[4] === 'string' ? true : sts_lg[4],
                    slidesPerRow:1,
                    centerPadding: '0px',
                    //prevArrow: $(sts_lg[6]),
                    //nextArrow: $(sts_lg[7]),
                    speed: typeof sts_lg[5] === 'string' ? 1000 : sts_lg[5],
                    responsive: [
                        {
                          breakpoint: 991,
                          settings: {
                            slidesToShow: typeof sts_md[0] === 'string' ? 3 : sts_md[0],
                            centerMode: typeof sts_md[1] === 'string' ? true : sts_md[1]
                          }
                        },
                        {
                          breakpoint: 767,
                          settings: {
                            slidesToShow: typeof sts_sm[0] === 'string' ? 3 : sts_sm[0],
                            centerMode: typeof sts_sm[1] === 'string' ? false : sts_sm[1]
                          }
                        },
                        {
                          breakpoint: 550,
                          settings: {
                            slidesToShow: typeof sts_xs[0] === 'string' ? 2 : sts_xs[0],
                            centerMode: typeof sts_xs[1] === 'string' ? false : sts_xs[1]
                          }
                        }    
                    ]
                });  
            }
        }
    };
})();


//APP CONTROLLER
var baseController = (function(view, SLICK)
{
    // HTML DOM ELEMENTS
    var DOM = view.getStrings(),
        MSG = view.getMessageTemp(),
        MSG2 = view.getMessageTemp2(),
        faviCount = 1, 
        faviconJs,
        tameSelectCounter = 1,
        selected = [];
    
    // Check selected dom
    var check = function(selector)
    {
        return $("html, body").find(selector).length;
    };
    
    //For nodelist loops
    var nodeListForEach = function(list, callback) 
    {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };
    
    // CONSOLE WARNING
    var openConsole = function()
    {
        console.log("%cYou should'nt %cbe here!", "color: #10609f; font-size: 20px;", "color: #438106; font-size: 20px;");
    };
    
    // OPEN LOADER FOR JSON
    var openLoader = function(parent,disable,text)
    {
        if (disable) {
            $(parent).find(DOM.submitSpan).html(text);
            $(parent).find(DOM.submitImg).removeClass(DOM.hidden);
            $(parent).find(DOM.fancyLoader).find('span').html(text);
            $(parent).find(DOM.fancyLoader).addClass(DOM.fancyEffect);
            $(parent).find(DOM.horizonLoader).find('span').html(text);
            $(parent).find(DOM.horizonLoader).find(".spinner-2RT7ZC").remove();
            
            var loderCreate = "";
            loderCreate += "<small class='spinner-2RT7ZC spinner-3lTjTx'>";
            loderCreate += "<small class='inner-26JK4f pulsingEllipsis-10G8Z6'>";
            loderCreate += "    <small class='pulsingEllipsisItem-3pNmEc spinnerItem-3dCJpG'></small>";
            loderCreate += "    <small class='pulsingEllipsisItem-3pNmEc spinnerItem-3dCJpG'></small>";
            loderCreate += "    <small class='pulsingEllipsisItem-3pNmEc spinnerItem-3dCJpG'></small>";
            loderCreate += "</small>";
            loderCreate += "</small>";
            
            $(parent).find(DOM.horizonLoader).prepend(loderCreate);
        }
        else{
            $(parent).find(DOM.submitSpan).html(text);
            $(parent).find(DOM.submitImg).addClass(DOM.hidden);
            $(parent).find(DOM.fancyLoader).find('span').html(text);
            $(parent).find(DOM.fancyLoader).removeClass(DOM.fancyEffect);
            $(parent).find(DOM.horizonLoader).find('span').html(text);
            $(parent).find(DOM.horizonLoader).find(".spinner-2RT7ZC").remove();
        }
        $(parent).find(DOM.allElements).prop(DOM.disabled, disable);
    }
    
    // window position
    var winPosition = function()
    {
        return $(window).scrollTop();
    };
    
    // return element position
    var elemPostion = function(selector)
    {
        if(check(selector) !== 0){
            return $(selector).offset().top;
        }
    };
    
    // window on scroll
    var winOnScroll = function(selector, callback)
    {
        // getting the element position length
        if(check(selector) !== 0){
            selector = elemPostion(selector);
            $(window).on("scroll",function(){
                // Getting the window length only when onscroll event
                var win = winPosition();
                if (win >= selector) {
                    callback(true);
                }
                else{
                    callback(false);
                }
            })
        }
    };
    
    // window scroll detect
    var scrollDetecting = function(callback)
    {
        var position, scroll;
        position = winPosition();
        
        $(window).scroll(function(){
            scroll = winPosition();
            if(scroll > position) {
                callback(true, position, 'scrolling down');
            } else {
                callback(false, position, 'scrolling up');
            }
            position = scroll;
        });
    };
    
    //Scroll to window top
    var hideURLbar = function(scroll) 
    {
        if(scroll){
            window.scrollTo(0, 1);
        }
    };
    
    return {
        init: function() 
        {
            openConsole();
        },
        intro: function(start, cookieName, expires, timeout)
        {
            var cookieCheck = baseController.getCookie(cookieName);
            // If intro is true
            if (start) {
                // If cookie has not been set
                if (cookieCheck === "") {
                    // Start intro plugin
                    setTimeout(function(){
                       introJs().start();

                       // Set the cookie
                       baseController.introDone(cookieName, expires);
                    }, timeout === "" ? 3000 : timeout);
                }
            }
        },
        introDone: function(cookieName, expires)
        {
            var dataSkip_Done, date, cookieValue;
            
            dataSkip_Done = DOM.introSkip_Done;
            // js time syntax: Mar 25 2015 || ISO FORMATS - 2015-03-25
            date = new Date(expires);
            cookieValue = "checked";
            expires = "expires="+ date.toUTCString();
            $(dataSkip_Done).one("click",function(){
                document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
            });
        },
        setCookie: function(cookieName, cookieValue, expires)
        {
            // setCookie(cookieName, cookieValue, expires);
            var date;
            // js time syntax: Mar 25 2015 || ISO FORMATS - 2015-03-25
            date = new Date(expires);
            expires = "expires="+ date.toUTCString();
            document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
        },
        getCookie: function(cname)
        {
            // getCookie(cookiename)
            var name = cname + "=";
            var ca = document.cookie.split(';');

            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                  c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                  return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        localTime: function()
        {
            var date, dateString, convertToArr, fullDate, timeCollect, position;
            
            dateString = date = new Date(); //create date from new Date Object
            dateString = dateString.toDateString(); // convert to Date String  
            
            //convert to arrays using -- space
            convertToArr = dateString.split(' ');
            
            fullDate = convertToArr.slice(1, 4); //collect only 3 value -- ignore first elem (Days name) 
            fullDate = fullDate.join(' '); //join each array elem with a str (this converts to strings)
            
            //time create
            timeCollect = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            fullDate = fullDate + ' ' + timeCollect;
            
            return {
                'full_date' : fullDate,
                'date' : dateString,
                'time' : timeCollect
            };
        },
        datePicker: function(selector) 
        {
            // datePicker($("selector"))
            if(check(selector) !== 0){
                selector.datepicker({
                    autoHide: true
                });
            }
        },
        timePicker: function(selector) 
        {
            // timePicker($("selector"))
            if(check(selector) !== 0){
                selector.timepicker({ 
                    'scrollDefault': 'now'
                });
            } 
        },
        goBack: function(selector)
        {
            // goBack($("selector"));
            if(check(selector) !== 0){
                selector.click(function(){
                    window.history.back();
                });
            }
        },
        navBarClose: function()
        {
            $(document).click(function(event){
                $navBar = $(".navbar-collapse.show"); var name;
                if($navBar.length != 0){
                    name = $(event.target)[0].localName;
                    if($(event.target).closest(".navbar-collapse.show").length === 0){

                    }
                    if(name == 'ul'){
                        $(".navbar-toggler").click();
                    }
                }
            });
        },
        slideModals: function(options = {}){
            //extend settings default
            var selector = options.selector;
            // if selector is null | use default selector
            if(selector == null){
                selector = "[data-tame-toggle=modal]";
            }

            // slide modals toggle
            if(check(selector) !== 0){

                // modal click 
                $(selector).on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();

                    var defaultOption = {
                        selector: selector,
                        parentSelector : null,
                        allowEscapeKey : true,
                        allowOutsideClick : false,
                        before: function(elem){},
                        after: function(elem){}, //data-toggle="slide_modal"
                    };

                    //extend settings default
                    var settings = $.extend(defaultOption, options), 
                        $target = $(this).attr('data-tame-target');

                    // before modal
                    settings.before(this);
                    
                    if($target != undefined){
                        window.parentSlideModal = $target;

                        // if parent not set
                        if(settings.parentSelector == null){
                            settings.parentSelector = $target;
                        }else if(settings.parentSelector != window.parentSlideModal){
                            settings.parentSelector = $target;
                        }
                        
                        // if parent exist within DOM
                        if($(window.parentSlideModal).length != 0){
                            // bind each settings to each elements
                            $.each($("[data-tame-target]"), function(index, value){
                                if(settings.parentSelector == window.parentSlideModal){
                                    // add class to opened modal
                                    $(window.parentSlideModal).addClass('modals__show');
                                    $('body').addClass('modals__show');
                                    window.settingsSlideModal = {
                                        parentSelector: settings.parentSelector,
                                        btnClose: settings.parentSelector + " .close",
                                        allowEscapeKey: settings.allowEscapeKey,
                                        allowOutsideClick: settings.allowOutsideClick,
                                    }
                                    e.stopPropagation();
                                    return false;
                                }
                            });
                        }

                    }else{
                        if($(this).hasClass('close')){
                            $(window.parentSlideModal).toggleClass('modals__show');
                            $('body').toggleClass('modals__show');
                        }
                    }
                });

                // on mouse up detect
                $(document).on('mouseup', function(e) {
                    e.preventDefault();

                    // if is object
                    if (typeof window.settingsSlideModal == 'object'){
                        // close btn click
                        $(window.settingsSlideModal.btnClose).on('click', function(){
                            if ( $('body').hasClass('modals__show') ) {
                                $(window.settingsSlideModal.parentSelector).removeClass('modals__show');
                                $(window.parentSlideModal).removeClass('modals__show');
                                $('body').removeClass('modals__show');
                            }
                        });

                        // opened modal
                        var slideModals = $(window.settingsSlideModal.parentSelector), 
                            hasClass = $(slideModals).hasClass('modals__show');
                            // if outside click is allowed
                            if(window.settingsSlideModal.allowOutsideClick){
                                // for custom modals navbar
                                if (!slideModals.is(e.target) && slideModals.has(e.target).length === 0) {
                                    if ( $('body').hasClass('modals__show') ) {
                                        $(slideModals).removeClass('modals__show');
                                        $('body').removeClass('modals__show');
                                    }
                                }
                            }
                    }
                });

                // allow ESC button click 
                $(document).keyup(function(e) {
                    e.preventDefault();

                    // if is object
                    if (typeof window.settingsSlideModal == 'object'){
                        if(window.settingsSlideModal.allowEscapeKey){
                            if ( $('body').hasClass('modals__show') ) {
                                if (e.key == "Escape"){
                                    $(window.parentSlideModal).removeClass('modals__show');
                                    $(window.settingsSlideModal.parentSelector).removeClass('modals__show');
                                    $('body').removeClass('modals__show');
                                };   
                            }
                        }
                    }
                }); 
                
            }
        },
        tameSelectInline: function(selector, callable = function(){}){
            var tameInput = selector, 
                tameInputCreate             = "[name='" + $(tameInput).attr('data-name') + "']",
                tameSelector                = $(tameInput).parent().find(".tame_select"), 
                tameSelectorHref            = $(tameInput).parent().find(".tame_select a"), 
                tameSelected                = $(tameSelectorHref).attr('selected'), 
                tameInputindicator          = '',
                tameInputindicatorSelector  = "tame-select-indicator__" + tameSelectCounter,
                tameDisplay                 = "tame-select-display",
                tameFontBold                = "tame-select-bold";

            // if selector exist
            if(check(tameInput) !== 0){

                // create input element
                $("<input name='"
                    + $(tameInput).attr('data-name')
                    + "' type='hidden'>"
                ).insertAfter(tameInput);   
                
                // clone main input element
                var tameInputClone  = $(tameInput).clone(),
                    dataNav         = $(tameInput).attr('data-navigate'),
                    dataNavPosition = $(tameInput).attr('data-position');

                // configure indication class
                if(dataNav != undefined && dataNav == 'true'){
                    tameInputindicator = "<div class='tame-select-indicator'></div>";

                    // add position to element
                    if(dataNavPosition != undefined && dataNavPosition == 'left'){
                        var newIndHTML      = $(tameInputindicator).addClass('tame-select-indicator-left');
                        tameInputindicator  = $(newIndHTML).prop('outerHTML');
                    }
                }

                // create new inout wrapper with indicator class
                var inputWrapper = "<div class='" + tameInputindicatorSelector + "' style='position: relative'>";
                    inputWrapper +=     tameInputindicator;
                    inputWrapper += "</div>";

                // insert wrapper after input
                $(inputWrapper).insertAfter(tameInput);  
                $(tameInput).remove(); //remove main input from DOM

                // add cloned input to indicator div
                $('.' + tameInputindicatorSelector).append(tameInputClone);  
                tameSelectCounter++;

                // set default selected value
                if(tameSelected == 'selected'){
                    var $self = $(tameSelector).find('a[selected=selected]'),
                        value = $self.attr('data-value'),
                        label = $self.attr('data-label');

                    $(function(){
                        $(tameInput).addClass(tameFontBold).val(label);
                        $(tameInputCreate).val(value);
                        $self.click();
                    });
                }

                // on keyup
                $(tameInput).on("keyup", function(e) {
                    var value = $(this).val().toLowerCase();
                    $(tameSelectorHref).filter(function() {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });

                    // remove font-bold style if empty
                    if($(tameInput).val().length == 0){
                        $(tameInput).removeClass(tameFontBold);

                        // remove value on new input 
                        $(tameInputCreate).val('');
                    }

                    // on arrow up key press
                    if (e.which == 38) {      
                        e.preventDefault();
                        // 
                    }

                    // on arrow down key press
                    if (e.which == 40) {      
                        e.preventDefault();
                        // 
                    }
                });

                // on focus in
                $(tameInput).on("focusin", function() {
                    $(tameSelector).removeClass(tameDisplay);
                });

                // hide element 
                $(document).mouseup(function(e) {
                    // when clicked outside selector
                    if (!$(tameSelector).is(e.target) && $(tameSelector).has(e.target).length === 0) {
                        // if has class
                        if(!$(tameSelector).hasClass(tameDisplay)){

                            // only if input is not on focus
                            if(!$(tameInput).is(":focus")){
                                $(tameSelector).addClass(tameDisplay);
                            }
                        }
                    }
                }); 

                // href click
                $(tameSelectorHref).on('click', function(e){
                    e.preventDefault();
                    var $self       = $(this), 
                        value       = $self.attr('data-value'),
                        label       = $self.attr('data-label'),
                        fullText    = value + ' ' + label;  

                    $(tameInput).val(label);
                    $(tameInputCreate).val(value);
                    
                    $(tameSelector).addClass(tameDisplay);
                    $(tameInput).addClass(tameFontBold);

                    // return data info
                    callable({
                        value: value,
                        label: label,
                        fullText: fullText,
                        selector: selector,
                        selected: $self,
                    });
                });
            }
        },
        tameSetSelectInline: function(selector, value){
            // if selector exist
            if(check(selector) !== 0){
                var data = $(selector).parent().parent().find(".tame_select .label-tame-picker");
                $.each(data, function(arry_index, arry_value){
                    var $self = $(arry_value);
                    if(value == $self.attr('data-value')){
                        $self.click();
                        return;
                    }
                });
            }
        },
        tameButtonFloat: function(){
            // btn disabled is found
            baseController.checkDom('.btn-disable', function(selector){
                var $dom = $('html, body'),
                    $parentLength = $dom.find('.form .float_group').length,
                    $parentGroupLength = $dom.find('.form .required_group').length;
                
                // apply if exists
                if($parentLength || $parentGroupLength){
                    $(selector).prop('disabled', true);
                }
            });

            // for float input value
            $('input, textarea').on('keyup', function(e){
                var $this = $(this), 
                    $form = $this.parents('form'),
                    $button = $this.parents('form').find("button[type='submit']"),
                    error = [];
                
                $($form.prop( 'elements' )).each(function(index, value){
                    var $input              = $(value),
                        $inputValue         = $input.val().length,
                        $tagName            = $input.prop("tagName"),
                        $parent             = $input.parents('.float_group'),
                        $parentLength       = $input.parents('.float_group').length,
                        $parentGroupLength  = $input.parents('.required_group').length;

                        // check if parent is float group
                        if(($tagName === 'INPUT' && $parentLength) || ($tagName === 'TEXTAREA' && $parentLength)){
                            // if input value is empty
                            if($inputValue <= 0){
                                error.push('error');
                                $parent.find('label').removeClass('active');
                            } else{
                                $parent.find('label').addClass('active');
                            }
                        }
                        else if(($tagName === 'INPUT' && $parentGroupLength) || ($tagName === 'TEXTAREA' && $parentGroupLength)){
                            if($inputValue <= 0){
                                error.push('error');
                            } 
                        }
                });

                // if there's an error found
                if(error.length){
                    if($button.hasClass('btn-disable')){
                        $button.prop('disabled', true);
                    }
                }else{
                    if($button.hasClass('btn-disable')){
                        $button.prop('disabled', false);
                    }
                }
            });
            
        },
        scrollTopOnLoad: function(scroll)
        {
            addEventListener("load", function() {
                setTimeout(hideURLbar(scroll), 0);
            }, false);
        },
        scrollTop: function(selector, height=500, callback = function(){})
        {
            //baseController.function(selector, height=500, function(){})
            selector = $(selector);
            if(check(selector) !== 0){
                scrollDetecting(function(t, pos){
                    if(pos >= height)
                        $(selector).css({'visibility': 'visible'}).fadeIn(200);
                    else
                        $(selector).css({'visibility': 'hidden'}).fadeOut();
                });
                
                $(selector).click(function(e){
                    e.preventDefault();
                    $("html, body").animate({"scrollTop": $("html, body").offset().top}, 500, 'swing', callback());
                });
            }
        },
        scrollToObject: function(selector, scroll=10, callback = function(){})
        {
            // baseController.scrollToObject($("selector"), 90, function(){})
            selector = $(selector);
            if(check(selector) !== 0){
                $("html, body").animate({"scrollTop":selector.offset().top-scroll}, 500, callback());  
            }
        },
        scrollToElemExecute: function(selector, callback = function(){})
        {
            // baseController.scrollToElemExecute($("selector"), function(){});
            if(check(selector) !== 0){
                winOnScroll(selector, callback);
            }
        },
        scrollDetect: function(callback = function(){})
        {
            // baseController.scrollDetect(function(bool, ScrollPosition, log){});
            scrollDetecting(callback);
        },
        stickToTop: function(selector, before  = function(){}, after  = function(){}, type = 'all')
        {
            // baseController.stickToTop($(selector), function(){}, function(){}, "desktop | mobile | all");
            if(check(selector) !== 0){
                var top = $(selector).offset().top;
                scrollDetecting(function(scroll, pos, side){
                    if(!baseController.isMobile() && type == 'desktop'){
                        if (pos > top) {
                            before();
                        } else {
                            after();
                        }
                    }else if(baseController.isMobile() && type == 'mobile'){
                        if (pos > top) {
                            before();
                        } else {
                            after();
                        }
                    }else if(type == 'all'){
                        if (pos > top) {
                            before();
                        } else {
                            after();
                        }
                    }
                });
            }
        },
        generalFormSubmit: function(options = {}) 
        {
            //Usage
            // baseController.generalFormSubmit({
            //     form: form,
            //     btnText: {
            //         before : 'Subscribe',
            //         after : 'Processing'
            //     },
            //     before: function(){},
            //     error: function(message, type, data){},
            //     success: function(message, type, data){},
            //     debug: function(message){}
            // })

            var defaultOption = {
                form : $(this),
                action : $(this).attr('action'),
                normal: true,
                scroll: false,
                scrollToElement: false,
                mobile: null,
                btnText: {before: '', after: ''},
                before: function(){},
                error: function(message, type, data){},
                success: function(message, type, data){},
                debug: function(message){}
            };

            //extend settings default
            var settings = $.extend(defaultOption, options);

            // get correct form action 
            if(typeof settings.action == 'undefined'){
                settings.action = $(settings.form).attr('action');
            }

            settings.before();
            var param = new FormData(settings.form); 
            openLoader(settings.form, true, settings.btnText.before); 
            var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function(){
                if (ajax.readyState === 4 && ajax.status === 200) {
                    openLoader(settings.form, false, settings.btnText.after);
                    settings.debug(ajax.responseText);
                    if (settings.normal) {
                        //see type of result data
                        var data = ajax.responseText;
                        if(typeof data !== 'object'){
                            data = JSON.parse(data);
                        }

                        if (data.response === ajaxConf.RESPONSE_SUCCESS) {
                            settings.success(data.message, "success", data);
                            if (settings.scroll) {
                                if(check(settings.scrollToElement) !== 0){
                                    if(baseController.isMobile() && settings.mobile == 'mobile'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }else if(!baseController.isMobile() && settings.mobile == 'desktop'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                    else if(settings.mobile == 'all'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                }else{
                                    baseController.scrollToObject($(settings.form));
                                }
                            }
                        }
                        else if (data.response === ajaxConf.RESPONSE_DANGER) {
                            settings.error(data.message, "danger", data);
                            if (settings.scroll) {
                                if(check(settings.scrollToElement) !== 0){
                                    if(baseController.isMobile() && mobile == 'mobile'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }else if(!baseController.isMobile() && mobile == 'desktop'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                    else if(mobile == 'all'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                }else{
                                    baseController.scrollToObject($(settings.form));
                                }
                            }
                        }
                        else if (data.response === ajaxConf.RESPONSE_ERROR) {
                            settings.error(data.message, "error", data);
                            if (settings.scroll) {
                                if(check(settings.scrollToElement) !== 0){
                                    if(baseController.isMobile() && settings.mobile == 'mobile'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }else if(!baseController.isMobile() && settings.mobile == 'desktop'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                    else if(settings.mobile == 'all'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                }else{
                                    baseController.scrollToObject($(settings.form));
                                }
                            }
                        }
                        else if (data.response === ajaxConf.RESPONSE_INFO) {
                            settings.error(data.message, "info", data);
                            if (settings.scroll) {
                                if(check(settings.scrollToElement) !== 0){
                                    if(baseController.isMobile() && settings.mobile == 'mobile'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }else if(!baseController.isMobile() && settings.mobile == 'desktop'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                    else if(settings.mobile == 'all'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                }else{
                                    baseController.scrollToObject($(settings.form));
                                }
                            }
                        }
                        else{
                            settings.error(data.message, "warning", data);
                            if (settings.scroll) {
                                if(check(settings.scrollToElement) !== 0){
                                    if(baseController.isMobile() && settings.mobile == 'mobile'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }else if(!baseController.isMobile() && settings.mobile == 'desktop'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                    else if(settings.mobile == 'all'){
                                        baseController.scrollToObject($(settings.scrollToElement));
                                    }
                                }else{
                                    baseController.scrollToObject($(settings.form));
                                }
                            }
                        }
                    }
                }else{
                    if(ajax.status == 500 || ajax.status == 419){
                        openLoader(settings.form, false, settings.btnText.before);
                        settings.debug(ajax.responseText);
                    }
                }
            };
            ajax.open("POST", settings.action, true);
            ajax.send(param);

           return false;
        },
        generalPromiseSubmit: function(options = {})
        {
            //Usage
            // baseController.generalPromiseSubmit({
                // csrf: "{{ csrf_token() }}",
                // url: "",
                // param: "",
                // title: "",
                // html: "",
                // icon: 'question',
                // confirmText: 'Confirm',
                // cancelText: 'Cancel',
                // allowOutsideClick: true,
                // allowEscapeKey: true,
                // showCancelButton: true,
                // showLoaderOnConfirm: true,
                // reverseButtons: true,
                // before: function(){},
                // error: function(message, type, data){},
                // success: function(message, type, data){},
                // debug: function(message){}
            // })

            var defaultOption = {
                csrf : '',
                url : window.location.origin,
                param : '',
                title: '',
                html: '',
                icon: 'question',
                confirmText: 'Confirm',
                cancelText: 'Cancel',
                allowOutsideClick: true,
                allowEscapeKey: true,
                showCancelButton: true,
                showLoaderOnConfirm: true,
                reverseButtons: true,
                before: function(){},
                error: function(message, type, data){},
                success: function(message, type, data){},
                debug: function(message){}
            };

            //extend settings default
            var settings = $.extend(defaultOption, options);

            //if csrf token is not found
            if(typeof settings.csrf == 'undefined' || settings.csrf == ''){
                settings.csrf = $('meta[name="csrf-token"]').attr('content');
            }

            //add token to param
            settings.param = settings.param + '&_token='+settings.csrf;

            Swal.fire({
                title: settings.title,
                html: settings.html,
                icon: settings.icon,
                allowOutsideClick: settings.allowOutsideClick,
                allowEscapeKey: settings.allowEscapeKey,
                showCancelButton: settings.showCancelButton,
                showLoaderOnConfirm: settings.showLoaderOnConfirm,
                confirmButtonText: settings.confirmText,
                cancelButtonText: settings.cancelText,
                reverseButtons: settings.reverseButtons,
                preConfirm: function () 
                {
                    return new Promise(function (resolve, reject) {
                        settings.before();
                        $.post(
                            settings.url, 
                            settings.param
                        )
                        .done(function(result){
                            settings.debug(result);
                            resolve(result);
                        })
                        .fail(function(xhr, status, error) {
                            resolve(error);
                            settings.debug(xhr.responseText);
                        });
                    })
                }
            })
            .then(function(data){
                if(data.isConfirmed){
                    //see type of result data
                    if(data.hasOwnProperty('value')){
                        data = JSON.parse(data.value);
                    }
                    if (data.response === ajaxConf.RESPONSE_SUCCESS) {
                        settings.success(data.message, "success", data);
                    }
                    else if (data.response === ajaxConf.RESPONSE_DANGER) {
                        settings.error(data.message, "danger", data);
                    }
                    else if (data.response === ajaxConf.RESPONSE_ERROR) {
                        settings.error(data.message, "error", data);
                    }
                    else if (data.response === ajaxConf.RESPONSE_INFO) {
                        settings.error(data.message, "info", data);
                    }
                    else{
                        settings.error(data.message, "warning", data);
                    }
                }
            })
            .catch(error => {
                Swal.showValidationMessage(
                    `Request failed: ${error}`
                )
            }); 
        },
        generalDirectSubmit: function(options = {})
        {
            //Usage
            // baseController.generalDirectSubmit({
            //     csrf: "{{ csrf_token() }}",
            //     url: "",
            //     param: "",
            //     before: function(){},
            //     error: function(message, type){},
            //     success: function(message, type){},
            //     debug: function(message){}
            // })

            var defaultOption = {
                csrf : '',
                url : window.location.origin,
                param : '',
                before: function(){},
                error: function(message, type, data){},
                success: function(message, type, data){},
                debug: function(message){}
            };

            //extend settings default
            var settings = $.extend(defaultOption, options);

            //if csrf token is not found
            if(typeof settings.csrf == 'undefined' || settings.csrf == ''){
                settings.csrf = $('meta[name="csrf-token"]').attr('content');
            }

            //add token to param
            settings.param = settings.param + '&_token='+settings.csrf;

            settings.before();
            $.post(
                settings.url, 
                settings.param, 
            )
            .done(function(result){
                settings.debug(result);

                //see type of result data
                var data = result;
                if(typeof data !== 'object'){
                    data = JSON.parse(data);
                }
                
                if (data.response === ajaxConf.RESPONSE_SUCCESS) {
                    settings.success(data.message, "success", data);
                }
                else if (data.response === ajaxConf.RESPONSE_DANGER) {
                    settings.error(data.message, "danger", data);
                }
                else if (data.response === ajaxConf.RESPONSE_ERROR) {
                    settings.error(data.message, "error", data);
                }
                else if (data.response === ajaxConf.RESPONSE_INFO) {
                    settings.error(data.message, "info", data);
                }
                else{
                    settings.error(data.message, "warning", data);
                }
            })
            .fail(function(xhr, status, error) {
                settings.debug(xhr.responseText);
            });
        },
        showResponseMSG: function(parent, message, type, callback = function(){})
        {
            // showResponseMSG(parent, message, type);
            if (type === "success") {
                MSG.success(parent, message);
            } 
            else if(type === "danger"){
                MSG.danger(parent, message);
            }
            else if(type === "info"){
                MSG.info(parent, message);
            }
            else{
                MSG.warning(parent, message);
            }
            
            callback();
        },
        showResponseMSG2: function(parent, message, type, callback = function(){})
        {
            // showResponseMSG2(parent, message, type);
            if (type === "success") {
                MSG2.success(parent, message);
            } 
            else if(type === "danger"){
                MSG2.danger(parent, message);
            }
            else if(type === "info"){
                MSG2.info(parent, message);
            }
            else if(type === "error"){
                MSG2.error(parent, message);
            }
            else{
                MSG2.warning(parent, message);
            }
            
            callback();
        },
        showResponseMSG_POP: function(title, html, type, btnText, callback = function(){})
        {
            // showResponseMSG_POP(title, html, type, btnText, function(){});
            Swal.fire({
                title: DOM.swalTitle + title + DOM.swalClose,
                html: DOM.swalHtml + html + DOM.swalClose,
                icon: type,
                backdrop: true,
                allowOutsideClick: true,
                allowEscapeKey: false,
                confirmButtonText: btnText == '' ? 'Okay' : btnText,
            }).then(function(resolve){
                callback(resolve);
            });
        },
        fetchOnKeyUp: function(select, before, after, message, debugError)
        {
            // fetchOnKeyUp(select, function(){}, function(m, t){}, function(m, t){}, function(e){});
            $(select).keyup(function(){
                var param = before(this.value);
                $.post(ajaxConf.XHR, param, function(result){
                    debugError(result);
                    var data = JSON.parse(result);
                    if (data.response === ajaxConf.RESPONSE_SUCCESS) {
                        after(data.message, "success");
                    }
                    else if (data.response === ajaxConf.RESPONSE_DANGER) {
                        message(data.message, "danger");
                    }
                    else if (data.response === ajaxConf.RESPONSE_ERROR) {
                        message(data.message, "error");
                    }
                    else if (data.response === ajaxConf.RESPONSE_INFO) {
                        message(data.message, "info");
                    }
                    else{
                        message(data.message, "warning");
                    }
                });
            });
        },
        toastNotify: function(type, message, closeBtn, newOnTop, progressBar, position, prevDuplicate, timeOut, callback = function(){}, bgColor = "#000000")
        {
            // baseController.toastNotify(type, message, true, false, false, "toast-top-center", false, 3000, function(){});
            toastr.options = {
                closeButton: closeBtn, //true | false
                debug: false,
                newestOnTop: newOnTop, //true | false
                progressBar: progressBar, //true | false
                positionClass: position, //"toast-top-right" | "toast-bottom-right"
                preventDuplicates: prevDuplicate, //true | false
                showDuration: "300",
                hideDuration: "1000",
                timeOut: timeOut, //in ms
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
                escapeHtml: false
            };
            
            switch (type) {
                case 'success':
                    toastr.success(message);
                    callback();
                    break;
                    
                case 'error':
                    toastr.error(message);
                    if(typeof (bgColor) !== null || bgColor !== ''){
                        $('.toast-error').css({'background-color': bgColor});
                    }
                    callback();
                    break;
                    
                case 'info':
                    toastr.info(message);
                    callback();
                    break;
                    
                default:
                    toastr.warning(message);
                    callback();
                    break;
            }
        },
        jToast: function(options = {}, callback = function(){})
        {
            // https://kamranahmed.info/toast
            // baseController.jToast({'text': ''}, function(){});
            
            // Default options
            var settings = $.extend({
                text: '',
                heading: '',
                icon: 'warning',
                showHideTransition: 'plain',
                allowToastClose: true,
                hideAfter: 3000, 
                stack: false,
                position: 'bottom-right',
                positionMobile: false,
                textAlign: 'left',
                loader: true,
                loaderBg: '#9EC600',
                beforeShow: function () {}, // will be triggered before the toast is shown
                afterShown: function () {}, // will be triggered after the toat has been shown
                beforeHide: function () {}, // will be triggered before the toast gets hidden
                afterHidden: function () {}  // will be triggered after the toast has been hidden
            }, options);

            // check if error type is known
            if( $.inArray( settings.icon, ["success", "error", "warning", "info"] ) == -1){
                settings.bgColor = "#2a2727";
                settings.textColor = "#ffffff";
                delete settings.icon;
            }

            // check for mobile position
            if(settings.positionMobile !== false){
                if(baseController.isMobile()){
                    settings.position = settings.positionMobile;
                }
            }
            $.toast(settings);
        },
        boostrapNotify: function(allowDismiss, type, delay, icon, title, msg, enterAM, exitAM, from, align, callback = function(){})
        {
            // baseController.customNotify(true,"info",5000,"fa fa-paw","Title","Hello All","","","bottom","left", function(){})
            $.notifyDefaults({
                type: type,
                offset: 15,
                z_index: 1031,
                delay: delay === "" ? 3000 : delay,
                allow_dismiss: allowDismiss,
                newest_on_top: true,
                showProgressbar: false,
                onShow: function(){
                    //
                }
            });
            $.notify({
                icon: icon === "" ? DOM.nofityIcon : icon,
                title: title,
                message: msg
            }, {
                animate: {
                    enter: enterAM === "" ? DOM.nofityIn : DOM.animated + ' ' + enterAM,
                    exit: exitAM === "" ? DOM.nofityOut : DOM.animated + ' ' + exitAM
                },
                placement: {
                    from: from === "" ? DOM.nofityFrom : from,
                    align: align === "" ? DOM.nofityAlign :align
                }
            });
            callback();
        },
        animateCss: function (element, animation, callback = function(){})
        {
            // baseController.animateCss('.selector', 'zoomIn');
            const baseCSS = 'animate__';
            // We create a Promise and return it

            if(check(element) !== 0){
                new Promise((resolve, reject) => {
                    const animationName = baseCSS + animation;
                    const node = document.querySelector(element);
    
                    node.classList.add('animate__animated', animationName);
                    
                    // When the animation ends, we clean the classes and resolve the Promise
                    function handleAnimationEnd(event) {
                          event.stopPropagation();
                          node.classList.remove('animate__animated', animationName);
                          resolve('Animation ended');
                    }
    
                    node.addEventListener('animationend', handleAnimationEnd, {once: true});
                }).then((message) => {
                    callback(message);
                });
            }
        },
        animateElem: function(before, selector, element, effect)
        {
            // baseController.animateElem(function(){},$("selector"),$("element"),"effect")
            if(check(selector) !== 0){
                effect === "" ? DOM.animateEffect : effect; //bounceIn
                var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend";
                selector.on("click", function(){
                        before();
                        element.addClass(DOM.animated);
                        element.addClass(effect).one(animationend, function(){
                            element.removeClass(effect);
                    });
                });
            }
        },
        animateDropdown: function(selector, options = {})
        {
            // baseController.animateDropdown($('selector'), $('element'), 'flipInY', 'flipOutY');
            if(check(selector) !== 0){
                var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd animationend";
                var defaultOption = {
                    element: '',
                    effectIn: DOM.animateEffectIn, //flipInX
                    effectOut: DOM.animateEffectOut, //flipOutX
                    show: function(selector){},
                    hide: function(selector){},
                    hidden: function(selector){} 
                };
    
                //extend settings default
                var settings = $.extend(defaultOption, options);

                // add animate__ class to element
                settings.element.addClass(DOM.animated);
                
                
                //https://www.w3schools.com/bootstrap/bootstrap_ref_js_dropdown.asp
                //https://stackoverflow.com/questions/12115833/adding-a-slide-effect-to-bootstrap-dropdown
                selector.on('show.bs.dropdown', function() {
                    $(this).find('.dropdown-menu')
                        .first()
                        .stop(true, true)
                        .addClass(settings.effectIn)
                        .one(animationend, function(){
                            settings.show(selector);
                    });
                }).on('hide.bs.dropdown', function(e) {
                    e.preventDefault();
                    $(this).find('.dropdown-menu')
                        .first()
                        .stop(true, true)
                        .addClass(settings.effectOut)
                        .one(animationend, function(){
                            settings.element.removeClass(settings.effectIn);
                            settings.element.removeClass(settings.effectOut);
                            settings.element.removeClass('show');
                            settings.element.removeAttr('data-bs-popper');
                            settings.element.removeAttr('data-popper');
                            selector.removeClass("show");
                            selector.find('.dropdown-toggle').removeClass('show');
                            selector.find('.dropdown-toggle').attr('aria-expanded', 'false');
                            settings.hide(selector);
                    });
                }).on('hidden.bs.dropdown', function() {
                    //hidden completed
                    settings.hidden(selector);
                });
            }
        },
        toggleSelector: function(selector, size, onText, offText, onColor, offColor)
        {
            // baseController.toggleSelector($(selector), "onText", "offText", "small", "onColor","offColor")
            if(check(selector) !== 0){
                selector.bootstrapToggle({
                    on: onText,
                    off: offText,
                    size: size,
                    onstyle: onColor,
                    offstyle: offColor
                }); 
            }
        },
        toggleDataForm: function(selector, inputName, page, after, debugError)
        {
            // baseController.toggleDataForm($("#selector"),"inputName",page,function(a){},function(e){})
            if(check(selector) !== 0){
                selector.change(function(){
                    var param;
                    param = inputName+"=1&page="+page;
                    if ($(this).prop('checked')) {
                        $(selector).val("0");
                        $.post(ajaxConf.XHR,param,function(result){
                            debugError(result);
                            var json=JSON.parse(result);
                            if (json.response === ajaxConf.RESPONSE_SUCCESS) {
                                // return Success message
                                after(json.message,"success");
                            }
                        });
                    }
                    else{
                        param = inputName+"=0&page="+page;
                        $(selector).val("1"); 
                        $.post(ajaxConf.XHR,param,function(result){
                            debugError(result);
                            var json=JSON.parse(result);
                            if (json.response === ajaxConf.RESPONSE_DANGER) {
                                // return disabled message
                                after(json.message,"danger");
                            }
                        });
                    }
                });
            }
            
        },
        toggleHamburger: function(selector,sidebar)
        {
            // baseController.toggleHamburger($("#sidebarCollapse"),$("#sidebar"))
            if(check(selector) !== 0){
                selector.on('click', function () {
                    sidebar.toggleClass('active');
                    $('.collapse.in').toggleClass('in');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                });
            }
        },
        slickSlider: function(selector, sts_lg, sts_md, sts_sm, sts_xs)
        {
            // baseController.slickSlider(selector, sts_lg, sts_md, sts_sm, sts_xs);
            if(check(selector) !== 0){
                SLICK.slick(selector, sts_lg, sts_md, sts_sm, sts_xs);
            }
        },
        tableFilter: function(selector, table)
        {
            // baseController.tableFilter($(selector), "");
            // $('table tr');
            if(check(selector) !== 0){
                selector.on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    $(table).filter(function() {
                      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                    });
                });
            }
        },
        fakeLoader: function(start, selector, bgColor, spinner, time)
        {
            // baseController.fakeLoader($(selector), '', '');
            // Spinners -- spinner1 | spinner2 | spinner3 | spinner4 | spinner5 | spinner6 | spinner7
            if(check(selector) !== 0){
                if(!start){
                    selector.css({'display': 'none'});
                }else{
                    selector.css({'display': 'block', 'z-index':'9999999999'});
                    $.fakeLoader({
                        bgColor: bgColor == '' ? DOM.fakeLoaderBG : bgColor,
                        spinner: bgColor == '' ? DOM.fakeLoaderSpinner : spinner,
                        timeToHide: typeof time == 'string' ? 1200 : time
                    });
                }
            }
        },
        imgAutoUpload: function(imgid, btnid, debug)
        {
            // imgAutoUpload(imgid,btnid,function(fn,ft,fs,len){}) 
            if(check(imgid) !== 0){
                var fileToRead = document.getElementById(imgid);
                var getSubmitBTN = document.getElementById(btnid);

                fileToRead.addEventListener("change", function(event) {
                    var files = fileToRead.files;
                    var len = files.length;

                    if (len) {
                        var filename = files[0].name;
                        var filetype = files[0].type;
                        var filesize = files[0].size;

                        debug(filename,filetype,filesize,len);  
                        getSubmitBTN.click();  
                    }
                }, false);
            }
            
        },
        imagePreview: function(selector, container)
        {
            
        },
        checkCheckBox: function(selector, callback = function(){})
        {
            // baseController.checkCheckBox("#selector", function(e){});
            if(check(selector) !== 0){
                $(selector).change(function() {
                    if($(this).is(":checked")) {
                        callback($(this)[0].checked, $(this));
                    } else {
                        callback($(this)[0].checked, $(this));
                    }
                });
            }
        },
        customCheckAll: function(selector, callback = function(){})
        {
            //baseController.customCheckAll('.selector', function(value, id){});
            if(check(selector) !== 0){
                $(selector).click(function(){
                    id = $(this).attr('id');
                    value = parseInt($(this).val());
                    if($(this).is(':checked')){
                        if(value == 1){
                            $(this).val(0);
                        }else{
                            $(this).val(1);
                        }
                    }else{
                        if(value == 0){
                            $(this).val(1);
                        }else{
                            $(this).val(0);
                        }
                    }  
                    callback(value, id);
                });
            }
            return false;
        },
        customCheckBox: function(elem, className, callback = function(){})
        {
            //baseController.customCheckBox(elem, ".className", function(){});
            var ctype, cid;
            $className = $(className); $elem = $(elem); ctype = $elem.attr('ctype');
            if(ctype == 'parent')
            {
                if($elem.is(':checked')){
                    selected = [];
                    $.each($className, function(index, aElem){
                        aElem =  $(aElem);
                        aElem.prop('checked', true);
                        aElem.parents('tr').addClass('select--active');
                        selected.push({
                            'value' : aElem.attr('cid'),
                            'element' : aElem
                        });
                    });
                }else{
                    $.each($className, function(index, aElem){
                        aElem =  $(aElem);
                        aElem.prop('checked', false);
                        aElem.parents('tr').removeClass('select--active');
                    });
                    selected = [];
                }
            }
            else
            {
                cid = $elem.attr('cid'); var found = true;
                if($elem.is(':checked')){
                    $.each(selected, function(index, value){
                        if(cid != value.value){
                            found = false;
                        }
                    });
                    
                    if(found === false){
                        selected.push({
                            'value' : cid,
                            'element' : $elem
                        }); //push into array if not found
                        $elem.parents('tr').addClass('select--active');
                    }
                    
                    //if length is empty
                    if(selected.length == 0){
                        selected.push({
                            'value' : cid,
                            'element' : $elem
                        });
                        $elem.parents('tr').addClass('select--active');
                    }
                }
                else{
                    $.each(selected, function(index, value){
                        if(typeof (value) != 'undefined'){
                            if(cid == value.value){
                                selected.splice(index, 1); //remove from array if exist
                                $elem.parents('tr').removeClass('select--active');
                            }
                        }
                    });
                }  
            }

            var values = [];
            $.each(selected, function(index, value){
                values.push(value.value);
            });
            
            callback({
                'data'   : selected,
                'values' : values,
                'length' : selected.length
            });
        },
        customNotice: function(selector, options = {})
        {
            // baseController.customNotice('.selector', {onText: '', offText: ''});
            var settings = $.extend({
                'changeText': true,
                'label': 'label',
                'onText': 'On',
                'offText': 'Off',
                'onValue': 1,
                'offValue': 0
            }, options);

            if(check(selector) !== 0){
                $(selector).click(function(){
                    if($(this).prop("checked")){
                        if(settings.changeText){
                            $(this).parents('.form-group, .custom-control, .custom-switch, .float_group, .form_group, .cust_group, .cust_sett_switch').find(settings.label).html(settings.onText);
                        }
                        $(this).val(settings.onValue);
                    }
                    else{
                        if(settings.changeText){
                            $(this).parents('.form-group, .custom-control, .custom-switch, .float_group, .form_group, .cust_group, .cust_sett_switch').find(settings.label).html(settings.offText);
                        }
                        $(this).val(settings.offValue);
                    }
                });
            }
        },
        isMobile: function()
        {
            var win = window.innerWidth;
            return win <= DOM.winWidth ? true : false;
        },
        isEmpty: function(string)
        {
            return !$.trim(string);
        },
        windows: function()
        {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        internet: function()
        {
            if(navigator.onLine){
                return true;
            }
            return false;
        },
        findDom: function(selector)
        {
            return check(selector);
        },
        checkDom: function(selector, callback = function(){})
        {
            if(check(selector) != 0){
                callback(selector);
            }
        },
        internetNavigator: function(selector, options = {}){
            // baseController.internetNavigator('.selector', {animateIn: 'zoomIn', animateOut: 'zoomOut'});
            var settings = $.extend({
                'animateIn': 'zoomIn',
                'animateOut': 'zoomOut',
                'start': true,
                'duration': 2000,
            }, options);

            var animateIn = 'animate__' + settings.animateIn,
                animateOut = 'animate__' + settings.animateOut;

            if(settings.start){
                if(check(selector) != 0){
                    setInterval(function(){
                        if(baseController.internet()){
                            if(!$(selector).hasClass(animateOut) ){
                                if(!$(selector).hasClass('resolvedOut')){
                                    $(selector).removeClass('resolvedIn ' + animateIn);
                                    baseController.animateCss(selector, settings.animateOut);
                                    $(selector).addClass('d-none hidden resolvedOut');
                                }
                            }
                        }else{
                            if(!$(selector).hasClass(animateIn)){
                                if(!$(selector).hasClass('resolvedIn')){
                                    $(selector).removeClass('d-none hidden resolvedOut ' + animateOut);
                                    baseController.animateCss(selector, settings.animateIn);
                                    $(selector).addClass('resolvedIn');
                                }
                            }
                        }
                    }, settings.duration);
                }
            }
        },
        copyToClipboard: function(elemID, callback = function(){})
        {
            // baseController.copyToClipboard(elemID, function(e){});
            /* Get the text field */
            $elem = $('#'+ elemID);

            // Create a "hidden" input
            var aux = document.createElement("input");

            // Assign it the value of the specified element
            aux.setAttribute("value", document.getElementById(elemID).innerText);

            // Append it to the element selected
            document.getElementById(elemID).appendChild(aux);

            //set to readonly
            $elem.prop('readonly', false);

            // Highlight its content
            aux.select();

            // Copy the highlighted text
            document.execCommand("copy");

            // Remove it from the body
            document.getElementById(elemID).removeChild(aux);

            //remove blur
            $elem.blur();
            $elem.prop('readonly', true);
            callback();
        },
        loopText: function(loopText, selector, callback = function(){})
        {
            // baseController.loopText(loopText, $(selector), function(){});
            if(typeof (loopText) == 'object' || typeof (loopText) == 'array'){
                if(check(selector) !== 0){
                    var i = 0;
                    var $text = $(selector);
                    var css = {};
                    function changeText() {
                        if (i < loopText.length) {
                            $text
                                .fadeOut(0)
                                .text(loopText[i++])
                                .css(css)
                                .fadeIn(500);

                            if (i == loopText.length) {
                                i = 0
                            }
                            setTimeout(changeText, 2000)
                        }
                    }
                    changeText();
                    callback();
                }
            }
        },
        loopImage: function(loopImage, selector, options = {}, callback = function(){})
        {
            // baseController.loopText(loopText, $(selector), function(){});
            if(typeof (loopImage) == 'object' || typeof (loopImage) == 'array'){
                if(check(selector) !== 0){
                    var i = 0;
                    var $parent = $(selector);
                    // Default options
                    var settings = $.extend({
                        timeout: 5000,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        transition: '1s ease-in-out all'
                    }, options);
                    function changeImage() {
                        if (i < loopImage.length) {
                            $parent.css({
                                'background-image' : 'url('+loopImage[i++]+')', 
                                'background-size' : settings.backgroundSize, 
                                'background-position': settings.backgroundPosition,
                                'background-repeat': settings.backgroundRepeat,
                                'transition': settings.transition,
                            });

                            if (i == loopImage.length) {
                                i = 0
                            }
                            setTimeout(changeImage, settings.timeout);
                        }
                    }
                    changeImage();
                    callback();
                }
            }
        },
        passwordGenerator: function (max_char = 12, max_symbol = 4)
        {
            var password = {
                // Add another object to the rules array here to add rules.
                // They are executed from top to bottom, with callbacks in between if defined.
                rules: [

                    //Take a combination of 12 letters and numbers, both lower and upper case.
                    {
                        characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
                        max: max_char
                    },

                    //Take 4 special characters, use the callback to shuffle the resulting 16 character string
                    {
                        characters: '!@#$%^&*()_+|~-={}[]:";<>?,./',
                        max: max_symbol,
                        callback: function (s) {
                            var a = s.split(""),
                                n = a.length;

                            for (var i = n - 1; i > 0; i--) {
                                var j = Math.floor(Math.random() * (i + 1));
                                var tmp = a[i];
                                a[i] = a[j];
                                a[j] = tmp;
                            }
                            return a.join("");
                        }
                    }
                ],
                generate: function () 
                {
                    var g = '';

                    $.each(password.rules, function (k, v) {
                        var m = v.max;
                        for (var i = 1; i <= m; i++) {
                            g = g + v.characters[Math.floor(Math.random() * (v.characters.length))];
                        }
                        if (v.callback) {
                            g = v.callback(g);
                        }
                    });
                    return g;
                }
            }
            return password.generate();
        },
        startPrint: function(btn, elem, header = null, footer = null, callback = function(){})
        {
            // start print
            $(btn).on('click', function(){
                callback(); 
                return $(elem).printThis({
                    importCSS: true,
                    loadCSS: "",
                    header: "",
                    header: header,   // prefix to html
                    footer: footer
                });
            });
        },
        topBar: function(autorun, thickness, colors = {'left': '', 'middle': '', 'right': ''}, blur = 5)
        {
            // topBar(false, '', {'left': '', 'middle': '', 'right': ''})
            if(typeof(topbar) === 'object')
            {
                topbar.config({
                    autoRun      : typeof(autorun) == 'string' ? false : autorun, 
                    barThickness : typeof(thickness) == 'string' ? 3 : thickness,
                    barColors    : {
                        '0'        : typeof(colors.left) == 'string' ? 'lightgrey' : colors.left,
                        '.3'       : typeof(colors.middle) == 'string' ? 'lightgrey' : colors.middle,
                        '1.0'      : typeof(colors.right) == 'string' ? 'black' : colors.right
                    },
                    shadowBlur   : blur,
                    shadowColor  : 'rgba(0, 0, 0, .5)',
                    className    : 'topbar',
                });
            }
        },
        topBarHide: function()
        {
            // topBarHide();
            if(typeof(topbar) === 'object'){ topbar.hide(); }
        },
        topBarShow: function()
        {
            // topBarShow();
            if(typeof(topbar) === 'object'){ topbar.show(); }
        },
        autoPlay: function(url, loop = false)
        {
            window.AudioContext = window.AudioContext||window.webkitAudioContext; //fix up prefixing
            var context = new AudioContext(); //context
            var source = context.createBufferSource(); //source node
            source.connect(context.destination); //connect source to speakers so we can hear it
            var request = new XMLHttpRequest();
            request.open('GET', url, true); 
            request.responseType = 'arraybuffer'; //the  response is an array of bits
            request.onload = function() {
                context.decodeAudioData(request.response, function(response) {
                    source.buffer = response;
                    source.start(0); //play audio immediately
                    source.loop = loop;
                }, function () { console.error('The request failed.'); } );
            };
            request.send();
        },
        titleChange: function(newTitle, change = false)
        {
            if(change){
                //var title = $(document).attr('title');
                $(document).prop('title', newTitle);
            }
        },
        favico: function(options = {})
        {
            //http://lab.ejci.net/favico.js/
            var self = $(this);
            
            /**
            * Default pusher options
            */
            var defaultOptions = {
                position : 'up',
                animation : 'popFade',
                bgColor : '#dd2c00',
                textColor : '#fff0e2'
            };
            
             /**
            * create configuration handler object
            */
            self.options = $.extend({}, defaultOptions, options);
            
            if(typeof(faviconJs) != 'object'){
                faviconJs = new Favico({
                    position  : self.options.position,
                    animation : self.options.animation,
                    bgColor   : self.options.bgColor,
                    textColor : self.options.textColor
                });
            }
            //faviconJs.reset();
            faviconJs.badge(faviCount);
            faviCount++;
        },
        pusher: function(options = {})
        {
            //to begin --- add service-worker.js to the root directory
            var channel, pusher; var self = $(this);
            
            /**
            * Default pusher options
            */
            var defaultOptions = {
                key : '',
                cluster : 'ap4',
                type : 'development',
                callback : function(encoded, data){
                    return (encoded, data);
                }
            };
            
            /**
            * create configuration handler object
            */
            self.options = $.extend({}, defaultOptions, options);
            
            //init pusher
            pusher = new Pusher(self.options.key, {
                cluster: self.options.cluster
            });
            
            // Enable pusher logging - don't include this in production
            if(self.options.type !== 'production')
                Pusher.logToConsole = true;
            
            channel = pusher.subscribe('my-channel');
            channel.bind('my-event', function(data) {
                self.options.callback(JSON.stringify(data), data);
            });
        },
        pushNotification: function(instanceId, callback = function(){})
        {
            //to begin --- add service-worker.js to the root directory
            const beamsClient = new PusherPushNotifications.Client({
                instanceId: instanceId,
            });

            beamsClient.start()
                .then(() => beamsClient.addDeviceInterest('hello'))
                .then(() => console.log('Successfully registered and subscribed!'))
                .catch(console.error);
            
            callback();
        },
        lottie: function(configure = {}, options = {})
        {
            //baseController.lottie('.selector', 3, true, path, css = {}, false);
            //Play an animation back on second click

            // Default cofiguration
            var settings = $.extend({
                'selector': '',
                'loop': true,
                'autoplay': true,
                'hover': false,
                'path': ''
            }, configure);

            // Default css options
            var css = $.extend({
                'width': '100%',
                'height': '120px',
                'margin_top': '0px',
                'top': '0px'
            }, options);


            if(check($(settings.selector)) !== 0){
                var iconMenu = document.querySelector(settings.selector);
            }else{
                return false;
            }
            
            $(settings.selector).css(css);
            let animationMenu = bodymovin.loadAnimation({
                container: iconMenu,
                renderer: 'svg',
                loop: settings.loop,
                autoplay: settings.autoplay,
                path: settings.path,
                background: 'yellow',
            });

            //allow animate on hover effect
            if(settings.hover && settings.loop && settings.autoplay == false){
                //loop and autoplay must be set to false, when initiating hover effect
                var directionMenu = 1;
                iconMenu.addEventListener('mouseenter', (e) => {
                    animationMenu.setDirection(directionMenu);
                    animationMenu.play();
                });

                iconMenu.addEventListener('mouseleave', (e) => {
                    animationMenu.setDirection(-directionMenu);
                    animationMenu.play();
                });
            }
        },
        countDownTimer: function(options = {})
        {
            //js date format  --- new Date("Jan 5, 2022 15:37:25")
            //PHP date format --- date('M j, Y H:i:s', 1634476856)

            var settings = $.extend({
                'timer': 0,
                'display': function(days, hours, minutes, seconds){},
                'expired': function(expired){} 
            }, options);
            
            var countDownDate = new Date(settings.timer).getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {
                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // return countdown timer
                settings.display(days, hours, minutes, seconds);

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(x);
                    settings.expired('expired');
                }
            }, 1000);
        },
        shareOnWhatsApp: function(options = {}, callback = function(){})
        {
            var settings = $.extend({
                'element': null,
                'message': null,
                'phone': null,
                'event': 'click'
            }, options);


            var whatsappMessage = window.encodeURIComponent(settings.message);
            if(check(settings.element) !== 0){
                if(settings.event == 'click'){
                    $(settings.element).on("click", function(){
                        if (settings.phone === null) {
                            $(settings.element).attr("href", "https://api.whatsapp.com/send?text="+whatsappMessage); 
                        }else{
                            $(settings.element).attr("href","https://api.whatsapp.com/send?phone="+settings.phone+"&text="+whatsappMessage); 
                        }
                    });
                }else{
                    if (settings.phone === null) {
                        $(settings.element).attr("href", "https://api.whatsapp.com/send?text="+whatsappMessage); 
                    }else{
                        $(settings.element).attr("href","https://api.whatsapp.com/send?phone="+settings.phone+"&text="+whatsappMessage); 
                    }
                }
                callback();
            }
        },
        shareOnFacebook: function(options = {}, callback = function(){})
        {
            var settings = $.extend({
                'element': null,
                'url': null,
                'event': 'direct'
            }, options);


            var url = window.encodeURIComponent(settings.url);
            if(check(settings.element) !== 0){
                if(settings.event == 'click'){
                    $(settings.element).on("click", function(){
                        $(settings.element).attr("href", "https://www.facebook.com/sharer?u="+url);   
                    });
                }else{
                    $(settings.element).attr("href", "https://www.facebook.com/sharer?u="+url);   
                }
                callback();
            }
        },
        shareOnTwitter: function(options = {}, callback = function(){})
        {
            var settings = $.extend({
                'element': null,
                'text': null,
                'event': 'direct'
            }, options);

            var text = window.encodeURIComponent(settings.text);
            if(check(settings.element) !== 0){
                if(settings.event == 'click'){
                    $(settings.element).on("click", function(){
                        $(settings.element).attr("href", "https://twitter.com/intent/tweet?text="+text);   
                    });
                }else{
                    $(settings.element).attr("href", "https://twitter.com/intent/tweet?text="+text); 
                }
                callback();
            }
        },
        shareOnSMS: function(options = {}, callback = function(){})
        {
            var settings = $.extend({
                'element': null,
                'text': null,
                'event': 'click'
            }, options);

            var text = window.encodeURIComponent(settings.text);
            if(check(settings.element) !== 0){
                if(settings.event == 'click'){
                    $(settings.element).on("click", function(){
                        $(settings.element).attr("href", "sms://?body="+text);   
                    });
                }else{
                    $(settings.element).attr("href", "sms://?body="+text); 
                }
                callback();
            }
        },
        getURLParam: function(param)
        {
            //GetURLParam(param);
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) 
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == param) 
                {
                    return sParameterName[1];
                }
            }
        },
        getPaginationResult: function(getURL, loader)
        {
            // getPaginationResult("url", false);
            $.ajax({
                url: getURL,
                type: 'GET',
                data: {
                    rowcount: $("#rowcount").val(),
                    query: GetURLParam('query'),
                    pagination_setting: $("#pagination-setting").val(),
                    param: $("#param").val()
                },
                beforeSend: function(){
                    if(loader){
                        $("#overlay").show();
                    }
                },
                success: function(data){
                    //Creating a new function
                    printResult(data);
                    if(loader){
                        setInterval(function(){
                            $("#overlay").hide();
                        }, 1500);
                    }
                }
            });
        },
        changePagination: function(selector, getURL, loader)
        {
            // changePagination($(selector),'url',false);
            if(check(selector) !== 0){
                selector.change(function(){
                    var getSelect = selector.val();
                    if(getSelect !== ''){
                        getPaginationResult(getURL, loader);
                    }
                });
            }
        },
        greetCookie: function(options = {})
        {
            // Default options
            var settings = $.extend({
                selector: ".grt-cookie",
                linkColor: "#fff",
                textcolor: "#333",
                background: "#fff",
                buttonBgColor: "#333",
                buttonColor: "#fff",
                duration: 365,
                animateType: 'zoomIn',
                classType: 'grt-move-normal',
                zIndex: 1000
            }, options);
            
            $parent = $(settings.selector);
            
            // Check cookie
            if(check($parent) !== 0){
                if (!(document.cookie.indexOf("acceptgrt=0") > -1)) {

                    // Text and Background color
                    $parent.css({
                        color: settings.textcolor,
                        background: settings.background,
                    });

                    // Button Colors
                    $('span.grt-cookie-button').css({
                        background: settings.buttonBgColor,
                        color: settings.buttonColor
                    });
                    
                    //text and link color
                    $(".grt-cookies-msg p, .grt-cookies-msg a").css({ 
                        color: settings.textcolor
                    })
                    $(".grt-cookies-msg a").css({ 
                        color: settings.linkColor,
                        'font-weight': 600,
                    })
                    
                    baseController.animateCss(".grt-cookie", settings.animateType);
                    $parent.addClass(settings.classType);

                    // Show message and calculate date
                    $(settings.selector).addClass("grt-cookie-active");
                    var d1 = new Date();
                    var days1 = settings.duration;
                    d1.setTime(d1.getTime() + days1 * 24 * 60 * 60 * 1000);
                    var expiredate = "expires=" + d1.toUTCString();
                    document.cookie = "acceptgrt=1;" + expiredate + ";path=/";

                    // On click accept button
                    $(".grt-cookie-button").on("click", function () {
                        $parent.remove();
                        //$(this).parents('.form-group').remove();
                        document.cookie = "acceptgrt=0;" + expiredate + ";path=/";
                    });
                } else {
                        $parent.remove();
                }
                return this;
            }
        },
        getBaseUrl: function()
        {
            var baseUrl,
                path = window.location.href.split('/'),
                baseURLPath = window.location.href.match(/^.*\//),
                reGix = new RegExp(/^.*\//);

            // if url path is currently on the root section
            if(path[3] == '' || path.length == 3){
                baseUrl = window.location.origin;
            }else{
                // reGix = reGix.exec(window.location.href);
                // reGix = reGix.shift(); 
                baseUrl = baseURLPath.shift();
            }
            return baseUrl;
        },
        intelConfigure: function(selectorID, options = {}, intelIsValid = {})
        {
            // Default options
            var settings = $.extend({
                autoHideDialCode: true,
                autoPlaceholder: "polite",
                dropdownContainer: null,
                formatOnDisplay: false,
                hiddenInput: "",
                initialCountry: "",
                geoIpLookup: function(callback = function(){}) {
                    $.get('https://ipinfo.io', function() {}, "json").always(function(resp) {
                        var countryCode = (resp && resp.country) ? resp.country : "us";
                        callback(countryCode);
                    });
                },
                nationalMode: false,
                placeholderNumberType: "MOBILE", 
                preferredCountries: ['hk', 'cn', 'us'],
                separateDialCode: true,
                utilsScript: typeof(options.utilsScript) == undefined
                        ? baseController.getBaseUrl() + "/assets/build/js/utils.js?1613236686837"
                        : options.utilsScript
            }, options);

            $(selectorID).intlTelInput({
                autoHideDialCode: settings.autoHideDialCode,
                autoPlaceholder: settings.autoPlaceholder,
                dropdownContainer: settings.dropdownContainer,
                formatOnDisplay: settings.formatOnDisplay,
                hiddenInput: settings.hiddenInput,
                initialCountry: settings.initialCountry,
                geoIpLookup: settings.geoIpLookup,
                nationalMode: settings.nationalMode,
                placeholderNumberType: settings.placeholderNumberType, 
                preferredCountries: settings.preferredCountries,
                separateDialCode: settings.separateDialCode,
                utilsScript: settings.utilsScript
            });

            // css fix
            if(check($('.iti__selected-dial-code'))){
                $parent = $('.iti__selected-dial-code').parents('.iti--allow-dropdown, .iti--separate-dial-code');
                $parent.find('input').attr('style', 'padding-left: 95px !important');
            }else{
                $parent = $('.iti__selected-dial-code').parents('.iti--allow-dropdown, .iti--separate-dial-code');
                $parent.find('input').attr('style', 'padding-left: 65px !important');
            }

            // is valid
            baseController.intelIsValid(selectorID, intelIsValid);
        },
        intelIsValid: function(selector, options = {})
        {
            var settings, input, iti_IsValid, iti_Error, reset, errorMap, errorMsg, validMsg,
                className  = {error : ".error-msg", valid : ".valid-msg"},
                parent = $(selector).parents();
            
            // Default options
            settings = $.extend({
                show: false,
                invalid_no: "Invalid number",
                invalid_country_code: "Invalid country code",
                too_short: "Too short",
                too_long: "Too long",
                too_null: "null",
                valid: "✓ valid"
            }, options);
            
            if(check($(selector)) !== 0 && settings.show){
                input = document.querySelector(selector);
                errorMsg = document.querySelector(".error-msg"),
                validMsg = document.querySelector(".valid-msg");

                    // here, the index maps to the error code returned from getValidationError - see readme
                errorMap = [settings.invalid_no, settings.invalid_country_code, settings.too_short, settings.too_long, settings.too_null];

                reset = function() {
                    $(selector).removeClass("error");
                    parent.find(className.error).html("");
                    parent.find(className.error).addClass("hidden");
                    parent.find(className.valid).addClass("hidden");
                };

                // on blur: validate
                input.addEventListener('blur', function() {
                    reset();
                    if (input.value.trim()) {

                        iti_IsValid = $(selector).intlTelInput("isValidNumber");
                        iti_Error = $(selector).intlTelInput("getValidationError");

                        if (iti_IsValid && iti_IsValid !== null) {
                            parent.find(className.valid).removeClass("hidden");
                            parent.find(className.valid).html(settings.valid);
                        } else {
                            $(selector).addClass("error");
                            var errorCode = iti_Error;

                            if(iti_IsValid == null || errorCode == -99){
                                errorCode = 0;
                            }
                            parent.find(className.error).html(errorMap[errorCode]);
                            parent.find(className.error).removeClass("hidden");
                        }
                    }
                });

                // on keyup / change flag: reset
                input.addEventListener('change', reset);
                input.addEventListener('keyup', reset);
            }
        },
        intelGetData: function(inputSelector)
        {
            if(check($(inputSelector)) !== 0){
                var code, phone, name, country_code, isvalid;
                code =  $(inputSelector).intlTelInput("getSelectedCountryData").dialCode;
                phone = $(inputSelector).val();
                name = $(inputSelector).intlTelInput("getSelectedCountryData").name;
                country_code = $(inputSelector).intlTelInput("getSelectedCountryData").iso2;
                isvalid = $(inputSelector).intlTelInput("isValidNumber");

                return {
                    'code': code,
                    'phone': phone,
                    'name': name,
                    'full_number': '+' + code + phone,
                    'dialing_code': '+' + code,
                    'country_code': country_code,
                    'valid': isvalid
                };
            }
        },
        select2: function(selector, options = {})
        {

            // Default options
            var settings = $.extend({
                onMobile: false,
                parentSelector: ".modal" 
            }, options);

            if($.isFunction($.fn.select2)){
                // $check for modal parent
                $.each($(selector), function(index, value){
                    var $selectInput = $(value), 
                        dropElement;
        
                    // modal fix -- attach to the modal body parent
                    if($selectInput.parents(settings.parentSelector).length){
                        dropElement = $selectInput.parents(settings.parentSelector);
                    }

                    // check to disallow on mobile device
                    if(!settings.onMobile){
                        if(baseController.isMobile()){
                            return false;
                        }
                    }
                    $selectInput.select2({
                        dropdownParent: dropElement
                    });
                    $selectInput.on('select2:open', () => {
                        document.querySelector('.select2-search__field').focus();
                    });
                });
            }
        },
        tooltip: function(){
            $('[data-toggle="tooltip"]').tooltip();
        },
        b2top: function(options = {})
        {
            // Default options
            var settings = $.extend({
                class: '.b2top',
                height: 500,
                background: "#fdbd13",
                padding: "10px",
                bottom: "",
                right: '20px'
            }, options); 

            $(settings.class).css({
                'background': settings.background,
                'padding': settings.padding,
                'bottom': settings.bottom,
                'right': settings.right
            });
            baseController.scrollTop(settings.class, settings.height);
        },
        popUpWindow: function(options = {})
		{
            // baseController.popUpWindow({'url': '', 'width': 1000, 'height': 700});
            // http://www.xtf.dk/2011/08/center-new-popup-window-even-on.html
            // Fixes dual-screen position  Most browsers      Firefox

            // Default options
            var settings = $.extend({
                title: "",
                url: window.location.origin,
                width: 1000,
                height: 700
            }, options);


            const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
            const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;
    
            const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    
            const systemZoom = width / window.screen.availWidth;
            const left = (width - settings.width) / 2 / systemZoom + dualScreenLeft
            const top = (height - settings.height) / 2 / systemZoom + dualScreenTop
    
            const newWindow = window.open(settings.url, settings.title, 'scrollbars=yes, width=' + settings.width + ', height=' + settings.height + ', top=' + top + ', left=' + left); 
            
            if (window.focus) newWindow.focus();
        },
        numberFormat: function(number, allowRand = true, rand = 2)
		{
            //http://www.mredkj.com/javascript/numberFormat.html
            number += '';
            x = number.split('.');
            x1 = x[0];
            x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            var amount = parseFloat(x1 + x2);
            if(allowRand){
                return amount.toFixed(rand);
            }
            return x1 + x2;
        }
    };
})(viewController, slickSlider);