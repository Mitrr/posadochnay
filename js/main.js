
$('.menu').on('click',function (e) {
        e.preventDefault();
        $('.active_side-menu').slideToggle('slow');
        $('.second').toggleClass('close_menu');
        $('.third').toggleClass('close_menu');
        $('.first').toggleClass('active_close_menu active-hover');
    });

const logo = $('.logo');
const activeText = $('#active-text');
const hiddenText = $('.hidden-text');
const headerPhoto = $('.header_photo');

$(window).on('load',function () {
    $(headerPhoto).addClass('bef');
    TweenMax.to(logo,0.8,{x:0,transitionDuration:"0.1s",opacity:"0.8",delay:0.1});
});

logo.on('mouseenter',function () {
    var l =  hiddenText.css("width");
    let x = parseInt(l)+3;
    TweenMax.to(logo,0.4,{opacity:1});
    TweenMax.to(hiddenText,0,{display: "inline"});
    TweenMax.to(activeText,1,{x:x,ease:Back.easeOut});
    TweenMax.to(hiddenText,0.2,{opacity: "0.8"});
}).on('mouseleave',function () {
    TweenMax.to(activeText,1,{x:0,ease:Power3.easeIn,delay: 0.2});
    TweenMax.to(hiddenText,0.2,{opacity: 0});
});

/*setInterval(function () {
    for (var i=0;i<5;i++){

    }
},500);*/


$('.tabs_container>ul>li').hover(function () {
    $(this)
        .addClass("active_tab-link")
        .siblings()
        .removeClass("active_tab-link")
        .closest("section.services_section")
        .find("div.tabs_content_container")
        .removeClass("active_tab-content")
        .eq($(this).index())
        .addClass("active_tab-content");
});

(function () {
    window.onload = function(){
        let body = document.body,
            html = document.documentElement,
            viewportHeight = window.innerHeight;

        var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        var scrollTopValue = function(){
            return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        };

        window.addEventListener("scroll", function(){
            var scroll = scrollTopValue();

            /*var progress = (scroll / (documentHeight - viewportHeight))*100;*/
            var progress = scroll;

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
var largeTextPosition = $(".large-block_wrapper").offset().top;
var aboutH2osition = $(".about_h2").offset().top;
var servicesSecPos = $(".services_section").offset().top;
let marginTop = 80;

function scrolls (progress) {

    var YOffset = window.pageYOffset;

    if (progress<aboutPosition){
        let opacity = 0.8 - (progress/logo.offset().top)*0.9;

        TweenMax.to(logo,0,{y:progress,opacity:opacity,delay:0});
    }
    if (progress>scrollDownPosition*0.2 && progress<=aboutPosition){
        console.log(YOffset);
        let opacity = 0.8 - (YOffset/scrollDownPosition)*1.1;
        if(marginTop > 105){
            marginTop = 80;
        }
        marginTop+=0.2;
        marginstr = `${marginTop}vh`;

        TweenMax.to('.scrollDown',0.5,{opacity:opacity,marginTop:marginstr,delay:0.1});
    }
    if (YOffset <= scrollDownPosition*0.2){
        TweenMax.to('.scrollDown',0.5,{marginTop:"80vh",opacity:0.8,delay:0.1});
    }
    if ( progress >= aboutPosition/3 && progress < aboutPosition*1.1) {
        let opacity;
        if (progress>=250 && progress <550){
            opacity = progress/2000;
        } else if (progress>=550){
            opacity = progress/800;
        }
        TweenMax.to('.about_content_container',0.5,{opacity:opacity});
    }
    if (progress >= aboutPosition/2){
        TweenMax.to('.about_text',0.5,{y:"10vh",marginTop:0,ease:Power3.ease});
    }
    if (progress >= aboutH2osition*0.9 && progress < largeTextPosition*1.1){
        $(".about_h2").addClass('line');
        TweenMax.to(".about_text",0,{position:"fixed",width:"80%",top:"15%",left:"10%"});
    }
    if (progress >= aboutH2osition){
        let opacity  = 1 - (YOffset/aboutH2osition)*0.85;
        TweenMax.to(".about_text",0.1,{opacity:opacity});
    }
    if (progress < aboutH2osition) {
        TweenMax.to(".about_text",1,{opacity:0.8});
    }
    if (progress<aboutPosition*1.05){
        $(".about_h2").removeClass('line');
        TweenMax.to(".about_text",0,{position:"absolute",top:"5%",left:"0"});
    }
    if (progress>=servicesSecPos*0.8){
        TweenMax.to(".services_section",0.8,{y:"0vh",ease:Power2.easeOut});
    }

    /*if (progress >= aboutH2osition ){

    }*/
    /*if (progress<$(".large-block_wrapper").offset().top*0.9){
        TweenMax.to($(".about_text"),0.2,{opacity:1});

    }*/
    /*box-shadow: 0 0 41px 0 #0f0f0f;*/


}
