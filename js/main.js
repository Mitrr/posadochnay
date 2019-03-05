/*sending forms*/
/*document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    let registerForm = document.forms["sendContacts"];
    let name = registerForm.elements["name"].value;
    let contact = registerForm.elements["contact"].value;
    let message = registerForm.elements["message"].value;

    let client = JSON.stringify({name: name, contact: contact, message: message});
    let request = new XMLHttpRequest();
    // посылаем запрос на адрес "/user"
    request.open("POST", "http://localhost:3001/send", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", function () {

        console.log(request.response);   // смотрим ответ сервера
    });
    request.send(client);
});*/

$('form').on('submit', function (e) {
    e.preventDefault();
    let form = $(this);
    var frmdata = form.serialize();
    console.log(frmdata);

    $.ajax({
        dataType: "json",
        method:"post",
        url: "/contact",
        data: frmdata,
        success : function(response)
        {
            if (response.code == "200"){
                console.log("ok");
                console.log(response);
            }
            else console.log("fuck///");
        }
    });
});

/*animations and functionality*/
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
    showLogoText();
}).on('mouseleave',function () {
    hideLogoText();
});

function showLogoText(){
    let l =  hiddenText.css("width");
    let x = parseInt(l)+3;
    TweenMax.to(logo,0.4,{opacity:1});
    TweenMax.to(hiddenText,0,{display: "inline"});
    TweenMax.to(activeText,1,{x:x,ease:Back.easeOut});
    TweenMax.to(hiddenText,0.2,{opacity: "0.8"});
}
function hideLogoText(){
    TweenMax.to(activeText,1,{x:0,ease:Power3.easeIn,delay: 0.2});
    TweenMax.to(hiddenText,0.2,{opacity: 0});
}

let start = Date.now();

setInterval(function () {
    if (window.screen.width > 1024){
        let timePassed = Date.now() - start;
        /*var textTimer = setInterval();*/
        if (timePassed >= 1000 && timePassed < 2000 && window.pageYOffset<aboutPosition){
            showLogoText();
            return;
        }
        if (timePassed >= 2000 && window.pageYOffset<aboutPosition){
            hideLogoText();
            start = Date.now();
            return;
        }
        showLogoText();
    }
},2000);


$(".case_wrapper").on("click",function () {
    let id;
    if ($(this).attr('id') === "case1"){
        id = "#full_case1";
    } else {id = "#full_case2";}
    openForm(id);
    $(".cases_section").css({"opacity":1});
});


let html = document.documentElement;
$(".call,.contact_button").on("click",function () {
    let id = "#form";
    openForm(id);
});
/*$(".contact_button").on("click",function () {
    let id = "#form";
   openForm(id);
});*/
function openForm(id){
    $(html).css({"overflow":"hidden"});
    $(id).css({"height":"100vh","display":"block","width":"100%","z-index":1000})
}

$(".close_btn").on("click",function () {
    let btnID = $(this).attr('id');
    let parentElID = '#'+document.querySelector(`#${btnID}`).parentElement.id;

    $(html).css({"overflow":"auto"});
    $(parentElID).css({"height":"0","display":"none","width":"0","z-index":0});
});

let nameNotEmpty = false;
let contactNotEmpry = false;
$("#form").on("click",function (e) {
    let inputs = $(".input>.inp");

    for (var i = 0; i<inputs.length; i++){
        var id = inputs[i].name;
        if (inputs[i].value !== ""){
            $("#"+id).addClass("not_empty");
            if (i === 0){
                nameNotEmpty = true;
            } else if (i === 1){
                contactNotEmpry = true;
            }
        } else {
            if (i === 0){
                nameNotEmpty = false;
            } else if (i === 1){
                contactNotEmpry = false;
            }
            $("#"+id).removeClass("not_empty");
        }
    }
    if (nameNotEmpty && contactNotEmpry) $(".submit_btn>button").css({"color": "#1C1D1E"});
    else $(".submit_btn>button").css({"color": "rgba(28, 29, 30, 0.67)"});
});

$(".toolbar_icons_wrapper div").on('click',function () {
    let elem = $(this)[0].childNodes[1];
    let count = parseInt($(this)[0].childNodes[1].innerHTML);
    count++;
    elem.innerHTML = count;

    console.log(count);

    console.log($(this)[0].childNodes[1].innerHTML);
    console.log($(this))
});

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
$('.min').hover(function () {
   $('.top').toggleClass("disable_contact");
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
var casesSecPos = $(".cases_section").offset().top;
var casesH2Position = $(".cases_h2").offset().top;
let marginTop = 80;

function scrolls (progress) {

    var YOffset = window.pageYOffset;

    if (progress<aboutPosition){
        let opacity = 0.8 - (progress/logo.offset().top)*0.9;

        TweenMax.to(logo,0,{y:progress,opacity:opacity,delay:0});
    }
    if (progress>scrollDownPosition*0.2 && progress<=aboutPosition){
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
    if (progress>=casesSecPos){
        TweenMax.to(".about_text",0.1,{display: "none"});
    }
    if (progress<=casesSecPos){
        TweenMax.to(".about_text",0.1,{display: "block"});
    }
    if (progress < aboutH2osition) {
        TweenMax.to(".about_text",1,{opacity:0.8});
    }
    if (progress<aboutPosition*1.05){
        $(".about_h2").removeClass('line');
        TweenMax.to(".about_text",0,{position:"absolute",top:"5%",left:"0"});
    }
    /*if (progress>=casesSecPos*0.7){
        let op = (progress/scrollDownPosition)*0.3;
        TweenMax.to(".cases_section",0.5,{opacity:op,delay:0.1});
    }*/
    if (progress>=casesSecPos*0.85){
        TweenMax.to(".cases_container",0.8,{y:"0vh",ease:Power2.easeOut});
    }
    /*if (progress>=casesH2Position){
        $(".cases_h2").addClass('line');

        TweenMax.to
    } */
    if (progress>=servicesSecPos*0.8){
        TweenMax.to(".services_section",0.8,{y:"0vh",ease:Power2.easeOut});
    }

}
