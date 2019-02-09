
$('.menu').on('click',function (e) {
        e.preventDefault();
        /*$('.side-menu').toggleClass('active_side-menu');*/

        $('.active_side-menu').slideToggle('slow');
        $('.second').toggleClass('close_menu');
        $('.third').toggleClass('close_menu');
        $('.first').toggleClass('active_close_menu active-hover');
    });

/*window.addEventListener('load',function () {
   const el = document.querySelector('#active-text');
   console.log(el);

   TweenMax.to(el,1,{x:200});
},false);*/
const logo = document.querySelector('.logo');
const activeText = $('#active-text');
const hiddenText = $('.hidden-text');
const headerPhoto = $('.header_photo');

$(window).on('load',function () {
    $(headerPhoto).addClass('bef');
    TweenMax.to(logo,0.6,{opacity:"0.8"});
    /*TweenMax.to('.bef',1,{translateY:1,height:"100vh"});*/
});

$('.logo').on('mouseenter',function () {
    TweenMax.to(logo,0.5,{opacity:1});
    TweenMax.to(activeText,1,{x:240,ease:Back.easeOut});
    TweenMax.to(hiddenText,0.25,{opacity: "0.8",delay:0.4});
}).on('mouseleave',function () {
    TweenMax.to(hiddenText,0.25,{opacity: "0"});
    TweenMax.to(activeText,1,{x:0,ease:Power3.easeIn,delay: 0.2});
});

$(document).ready(function () {
    console.log('ready doc');
    $('.tabs_container>ul>li').on('click',function () {
        console.log('click')
    });
});


    /*$('.services_tab').on('click',"li:not(.active)",function () {
        $(this)
            .addClass("active_tab-link")
            .siblings()
            .removeClass("active_tab-link")
            .closest("section.services_section")
            .find("div.tabs_content_container")
            .removeClass("active_tab-content")
            .eq($(this).index())
            .addClass("active_tab-content");
    });*/



(function () {
    window.onload = function(){
        let body = document.body,
            html = document.documentElement,
            viewportHeight = window.innerHeight;

        var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

     window.documentHeight =  documentHeight;

        var scrollTopValue = function(){
            return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        };

        window.addEventListener("scroll", function(){
            var scroll = scrollTopValue();

            var progress = (scroll / (documentHeight - viewportHeight))*100;
            // var progress = scroll;


            /*progressLine.style.width = progress + "%";*/
            scrolls(progress)
        });
        window.addEventListener("resize", function(){
            documentHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        });
    }
})();


var aboutPosition = $('.about_us_section').offset().top;
var scrollDownPosition = $('.scrollDown').offset().top;
let marginTop = 80;

function scrolls (progress) {

    const isk = $('.about_us_section').offset().top;

    const currentW = documentHeight;

    let s = (isk / currentW) * 100;
    console.log(s);
    debugger
    const heightBody =  documentHeight

    var YOffset = window.pageYOffset;
    /*console.log(Math.ceil(progress));*/
    if (progress>scrollDownPosition*0.2){
        /*console.log(scrollDownPosition);*/
        console.log(YOffset);
        let opacity = 0.8 - (YOffset/scrollDownPosition)*1.1;
        marginTop > 100 ? marginTop = 80 : '';

        marginTop+=0.2;
        marginstr = `${marginTop}vh`;

        TweenMax.to('.scrollDown',0.5,{opacity:opacity,marginTop:marginstr,delay:0.1});
    }
    if (YOffset <= scrollDownPosition*0.2){
        TweenMax.to('.scrollDown',0.5,{marginTop:"80vh",delay:0.1});
    }
    if ( progress >= aboutPosition/3) {
        let opacity;
        if (progress>=250 && progress <550){
            opacity = progress/2000;
        } else if (progress>=550){
            opacity = progress/800;
        }
        TweenMax.to('.about_content_container',0.8,{opacity:opacity,delay:0.2});
    }
    if (progress >= aboutPosition/2){
        TweenMax.to('.about_text',1,{marginTop:"5%",ease:Power3.ease});
    }
    if (progress >= aboutPosition*1.1){
        $(".about_h2").addClass('line');
    }

}
