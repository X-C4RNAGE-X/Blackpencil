let flag = 0;


function controller(x) {
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(num) {
    let slides = document.getElementsByClassName('slide');
    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for (let y of slides) {
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}

const slide = () => {
    setInterval(() => {
        controller(1)
    }, 5000);

}

$(document).ready(function () {
    var flag = false;
    $('.fa-bars').click(function () {
        flag = !flag;
        $(this).toggleClass('fa-times');
        if (!flag) {

            // $('nav').toggleClass('nav-toggle');

            document.getElementById('nt').style.display = "";
        }

        else {
            document.getElementById('nt').style.display = "block";
        }

    });
    $(window).on('scroll load', function () {
        $('fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });
    $('.count').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum + '+');
                }

            }
        )
    });

});
$('.project').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});
// let box = document.getElementById("box");
// let topv = document.getElementById("over");
// box.onmouseover=()=>{
//     topv.style.display="block";
// }
// document.getElementById("box").onmouseleave=()=> {
//     topv.style.display = "none";
// }
// let box1 = document.getElementById("box1");
// let topv1 = document.getElementById("over1");
// box1.onmouseover=()=>{
//     topv1.style.display="block";
// }
// document.getElementById("box1").onmouseleave=()=> {
//     topv1.style.display = "none";
// }
// let box2 = document.getElementById("box2");
// let topv2 = document.getElementById("over2");
// box2.onmouseover=()=>{
//     topv2.style.display="block";
// }
// document.getElementById("box2").onmouseleave=()=> {
//     topv2.style.display = "none";
// }
// let box3 = document.getElementById("box3");
// let topv3 = document.getElementById("over3");
// box3.onmouseover=()=>{
//     topv3.style.display="block";
// }
// document.getElementById("box3").onmouseleave=()=> {
//     topv3.style.display = "none";
// }
// let box4 = document.getElementById("box4");
// let topv4 = document.getElementById("over4");
// box4.onmouseover=()=>{
//     topv4.style.display="block";
// }
// document.getElementById("box4").onmouseleave=()=> {
//     topv4.style.display = "none";
// }
// let box5 = document.getElementById("box5");
// let topv5 = document.getElementById("over5");
// box5.onmouseover=()=>{
//     topv5.style.display="block";
// }
// document.getElementById("box5").onmouseleave=()=> {
//     topv5.style.display = "none";
// }

