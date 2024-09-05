
function landingPageAnimation() {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.frontPage',
            start: 'top top',
            scrub: true,
        }
    })
    tl.from('#transition-circle', {
        top: '150%',
        rotate: 4 * 360,
        scale: 0,
    }, 'a')
        .to('.main-text', {
            left: '5rem',
            top: '2rem',
            fontSize: '2rem',
        }, 'a')
        .to('#transition-circle', {
            scaleY: 28,
            scale: 1,
            duration: .5
        }, '.2+a')
        .to('#transition-circle', {
            opacity: 0,
            duration: .1
        }, "qum")
        .to("#introContent", {
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100% )"
        }, "qum")
    // .from("#glitchImgs", {
    //     y:200,
    // },"qum")





}
// landingPageAnimation()

function jumpSmooth() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
jumpSmooth();

function footerAnimation() {
    function preventDefault() {
        document.querySelectorAll('a').forEach(e => {
            e.addEventListener('click', (event) => {
                event.preventDefault();
                console.log('clicked');
            })
            e.classList.add('hover')
        })
    }
    // preventDefault();

    const large_text = document.getElementById('idm-vton')
    const letters = large_text.textContent.split('')
    let clutter = "";
    letters.forEach(e => {
        clutter += `<span class="bgImg">${e}</span>`;
    })
    large_text.innerHTML = clutter;
    gsap.set('#idm-vton span', { display: 'inline-block' })
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 20%',
            end: '10% 10%',
            scrub: 2,
        }
    })
    tl.from('#idm-vton span', {
        transform: 'translateY(100%)',
        stagger: 0.05,
        duration: 2,
    })
    gsap.to('.ending-page .overlay', {
        y : -2,
        duration: 1,
        scrollTrigger: {
            trigger: '.ending-page',
            start: 'top 20%',
            end: '100% top',
            scrub: true,
            // markers :true,
        }
    })
    gsap.to('.top-section, .middle-text', {
        transform: 'translateY(0)',
        duration: 1,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 20%',
            end: '10% top',
            scrub: true,
        }
    }, 'b')
}
footerAnimation()

function imgGlitchEffect() {

    let tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: 'linear'
    })

    // tl

    tl
        .to('#img1', {
            opacity: 0,
            duration: 1,
        },'i0')
        .to('#img2', {
            opacity: 1,
            duration: 1,
        }, "i0")
        
}
imgGlitchEffect()

function minmap() {

    const tl = gsap.timeline({
        scrollTrigger: {
            scroller: 'body',
            trigger: '.minimap-wrapper',
            start: 'top 0',
            end: 'top -200%',
            scrub: 1,
            snap: [0.00, 0.33, 0.67, 1.00]
        }
    })

    gsap.set('.minimap .images .img-box', {
        y: '160%'
    })

    tl
        .to('.virtual-photu', {
            scale: 0.8,
            x: '-50%',
            opacity: 0
        }, 'START')
        .from('.minimap .images , .minimap .showimage , .minimap .details', {
            x: '100vw',
        }, 'START')

        .to('.minimap  .imgBox', {
            y: '-=100%'
        }, 'a')
        .to('.minimap .images .img-box', {
            y: '-=135%'
        }, 'a')
        .to('.minimap .images .img-box', {
            y: '-=135%'
        }, 'b')
        .to('.minimap  .imgBox', {
            y: '-=105%'
        }, 'b')

}

minmap();

function textHover() {
    const texts = document.querySelectorAll('.text-hover');
    texts.forEach((elem) => {

        elem.addEventListener("mousemove", (e) => {
            let x = e.offsetX;
            let y = e.offsetY;
            let btnWidth = elem.offsetWidth / 2;
            let btnHeight = elem.offsetHeight / 2;
            let tranX = x - btnWidth;
            let tranY = y - btnHeight;
            elem.style.transform = `translateX(${tranX}px) translateY(${tranY}px)`;
        });
        elem.addEventListener("mouseout", () => {
            elem.style.transform = 'translate(0,0)';
        });
    })

}
    

textHover();

function skewEffect() {
    let skewTime;

    gsap.to('.skew-bar h1', {
        translateX: '-100%',
        repeat: -1,
        ease: 'linear',
        duration: 5,
    })

    window.addEventListener('mousemove', (e) => {
        clearTimeout(skewTime)
        if (e.movementX > 0) {
            gsap.to('.skew-bar h1', {
                skewX: '-5deg'
            })

        }
        else {
            gsap.to('.skew-bar h1', {
                skewX: '5deg'
            })
        }
        skewTime = setTimeout(() => {
            gsap.to('.skew-bar h1', {
                skewX: '0deg'
            })
        }, 100)
    })
}

skewEffect();


function circleAnime() {

    function circlePageAnime() {
        const tl = gsap.timeline({
            scrollTrigger: {
                scroller: 'body',  // Corrected 'scoller' to 'scroller'
                trigger: '.circlePage',
                start: 'top -1%',
                end: 'top -150%',
                scrub: 1,
            }
        });

        tl.to('.circleDiv img', {
            scale: 3
        }, 'a')
            .to('.circleDiv', {
                delay: .1,
                height: '510vh',
                width: '510vh',
            }, 'a')
            .to('.circleDiv', {
                right: '50%',
            }, 'a')
            .from('.leftText', {
                width: 0,
            }, 'a')
            .from('.leftText h1', {
                left: '200%',
            }, 'a')
            .from('.rightText', {
                width: 0,
            }, 'a')
            .from('.rightText h1', {
                left: '-300%',
            }, 'a')

            .to('.circleDiv', {
                right: '80%',
            }, 'b')
            .to('.circleDiv img', {
                scale: 3.5
            }, 'b')
            .from('.ourMission', {
                opacity: 0,
                right: '10%'
            }, 'b')


    }
    function circlePageAnimeResponsive() {
        const tl = gsap.timeline({
            scrollTrigger: {
                scroller: 'body',  // Corrected 'scoller' to 'scroller'
                trigger: '.circlePage',
                start: 'top -1%',
                end: 'top -150%',
                scrub: 1,
            }
        });

        tl.to('.circleDiv img', {
            scale: 3
        }, 'a')
            .to('.circleDiv', {
                delay: .1,
                height: '210vh',
                width: '210vh',
            }, 'a')
            .to('.circleDiv', {
                right: '50%',
            }, 'a')
            .from('.leftText', {
                width: 0,
            }, 'a')
            .from('.leftText h1', {
                left: '00%',
            }, 'a')
            .from('.rightText', {
                width: 0,
            }, 'a')
            .from('.rightText h1', {
                left: '-100%',
            }, 'a')

            .to('.circleDiv', {
                right: '60%',
            }, 'b')
            .to('.circleDiv img', {
                scale: 1.5,
                marginTop: '-35vh',
                marginLeft: '-5vh',

            }, 'b')

            .to('.rightText', {
                left: '37%',
                top: '40%'
            }, 'b')
            .to('.leftText', {
                left: '30%'
            }, 'b')

            .from('.ourMission', {
                opacity: 0,
                right: '10%'
            }, 'b')


    }

    if (window.innerWidth > 600) {
        circlePageAnime();
    }
    else {
        circlePageAnimeResponsive();
    }
}

circleAnime();


function stepCanvas() {
    const canvas = document.querySelector("#canvas1");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/1.7;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
   ./assets/images/canvas/frame00001.png
./assets/images/canvas/frame00002.png
./assets/images/canvas/frame00003.png
./assets/images/canvas/frame00004.png
./assets/images/canvas/frame00005.png
./assets/images/canvas/frame00006.png
./assets/images/canvas/frame00007.png
./assets/images/canvas/frame00008.png
./assets/images/canvas/frame00009.png
./assets/images/canvas/frame00010.png
./assets/images/canvas/frame00011.png
./assets/images/canvas/frame00012.png
./assets/images/canvas/frame00013.png
./assets/images/canvas/frame00014.png
./assets/images/canvas/frame00015.png
./assets/images/canvas/frame00016.png
./assets/images/canvas/frame00017.png
./assets/images/canvas/frame00018.png
./assets/images/canvas/frame00019.png
./assets/images/canvas/frame00020.png
./assets/images/canvas/frame00021.png
./assets/images/canvas/frame00022.png
./assets/images/canvas/frame00023.png
./assets/images/canvas/frame00024.png
./assets/images/canvas/frame00025.png
./assets/images/canvas/frame00026.png
./assets/images/canvas/frame00027.png
./assets/images/canvas/frame00028.png
./assets/images/canvas/frame00029.png
./assets/images/canvas/frame00030.png
./assets/images/canvas/frame00031.png
./assets/images/canvas/frame00032.png
./assets/images/canvas/frame00033.png
./assets/images/canvas/frame00034.png
./assets/images/canvas/frame00035.png
./assets/images/canvas/frame00036.png
./assets/images/canvas/frame00037.png
./assets/images/canvas/frame00038.png
./assets/images/canvas/frame00039.png
./assets/images/canvas/frame00040.png
./assets/images/canvas/frame00041.png
./assets/images/canvas/frame00042.png
./assets/images/canvas/frame00043.png
./assets/images/canvas/frame00044.png
./assets/images/canvas/frame00045.png
./assets/images/canvas/frame00046.png
./assets/images/canvas/frame00047.png
./assets/images/canvas/frame00048.png
./assets/images/canvas/frame00049.png
./assets/images/canvas/frame00050.png
./assets/images/canvas/frame00051.png
./assets/images/canvas/frame00052.png
./assets/images/canvas/frame00053.png
./assets/images/canvas/frame00054.png
./assets/images/canvas/frame00055.png
./assets/images/canvas/frame00056.png
./assets/images/canvas/frame00057.png
./assets/images/canvas/frame00058.png
./assets/images/canvas/frame00059.png
./assets/images/canvas/frame00060.png
./assets/images/canvas/frame00061.png
./assets/images/canvas/frame00062.png
./assets/images/canvas/frame00063.png
./assets/images/canvas/frame00064.png
./assets/images/canvas/frame00065.png
./assets/images/canvas/frame00066.png
./assets/images/canvas/frame00067.png
./assets/images/canvas/frame00068.png
./assets/images/canvas/frame00069.png
./assets/images/canvas/frame00070.png
./assets/images/canvas/frame00071.png
./assets/images/canvas/frame00072.png
./assets/images/canvas/frame00073.png
./assets/images/canvas/frame00074.png
./assets/images/canvas/frame00075.png
./assets/images/canvas/frame00076.png
./assets/images/canvas/frame00077.png
./assets/images/canvas/frame00078.png
./assets/images/canvas/frame00079.png
./assets/images/canvas/frame00080.png
./assets/images/canvas/frame00081.png
./assets/images/canvas/frame00082.png
./assets/images/canvas/frame00083.png
./assets/images/canvas/frame00084.png
./assets/images/canvas/frame00085.png
./assets/images/canvas/frame00086.png
./assets/images/canvas/frame00087.png
./assets/images/canvas/frame00088.png
./assets/images/canvas/frame00089.png
./assets/images/canvas/frame00090.png
./assets/images/canvas/frame00091.png
./assets/images/canvas/frame00092.png
./assets/images/canvas/frame00093.png
./assets/images/canvas/frame00094.png
./assets/images/canvas/frame00095.png
./assets/images/canvas/frame00096.png
./assets/images/canvas/frame00097.png
./assets/images/canvas/frame00098.png
./assets/images/canvas/frame00099.png
./assets/images/canvas/frame00100.png
./assets/images/canvas/frame00101.png
./assets/images/canvas/frame00102.png
./assets/images/canvas/frame00103.png
./assets/images/canvas/frame00104.png
./assets/images/canvas/frame00105.png
./assets/images/canvas/frame00106.png
./assets/images/canvas/frame00107.png
./assets/images/canvas/frame00108.png
./assets/images/canvas/frame00109.png
./assets/images/canvas/frame00110.png
./assets/images/canvas/frame00111.png
./assets/images/canvas/frame00112.png
./assets/images/canvas/frame00113.png
./assets/images/canvas/frame00114.png
./assets/images/canvas/frame00115.png
./assets/images/canvas/frame00116.png
./assets/images/canvas/frame00117.png
./assets/images/canvas/frame00118.png
./assets/images/canvas/frame00119.png
./assets/images/canvas/frame00120.png
./assets/images/canvas/frame00121.png
./assets/images/canvas/frame00122.png
./assets/images/canvas/frame00123.png
./assets/images/canvas/frame00124.png
./assets/images/canvas/frame00125.png
./assets/images/canvas/frame00126.png
./assets/images/canvas/frame00127.png
./assets/images/canvas/frame00128.png
./assets/images/canvas/frame00129.png
./assets/images/canvas/frame00130.png
./assets/images/canvas/frame00131.png
./assets/images/canvas/frame00132.png
./assets/images/canvas/frame00133.png
./assets/images/canvas/frame00134.png
./assets/images/canvas/frame00135.png
./assets/images/canvas/frame00136.png
./assets/images/canvas/frame00137.png
./assets/images/canvas/frame00138.png

 `;
        return data.split("\n")[index];
    }

    const frameCount = 138;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#canvas1`,
            //   set start end according to preference
            start: `top top`,
            end: `300% top`,
            scroller: `body`,
        },
        onUpdate: render,
    });
    gsap.from('.leftSteps h1', {
        y:100,
        opacity:0,
        stagger:.5,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `.leftSteps`,
            start: `top top`,
            end: `300% top`,
            scroller: `body`,
        },
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width ;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: ".mainstepwrapper",
        // markers:true,
        scroller: `body`,
        //   set start end according to preference
        start: `top top`,
        end: `300% top`,
    });
}

stepCanvas();


function introAnime(){

    const loading = document.querySelector('.loading')
    var x = Number(loading.innerText.split('%')[0])

    const loadingInterval = setInterval(() => {
        x += Math.floor(Math.random()*20)
        loading.innerText = x + '%';
        if(x >=100){
            loading.innerText = '100%';
            gsap.to('.intro',{
                transform:'rotateX(-70deg)',
                duration:.8,
                top:'60%',
            })
            clearInterval(loadingInterval)
        }
    }, 100);



}

introAnime();


function cursor(){
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

// for intro motion
let mouseMoved = false;

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}
const params = {
    pointsNumber: 40,
    widthFactor: .3,
    mouseThreshold: .6,
    spring: .4,
    friction: .5
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    }
}

window.addEventListener("click", e => {
    updateMousePosition(e.clientX, e.clientY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.clientX, e.clientY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);


function update(t) {

    // for intro motion
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    ctx.lineCap = "round";
    ctx.strokeStyle = "white"; 
	 ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }
    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();
    
    window.requestAnimationFrame(update);
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
}
cursor();



function openCloseMenu() {
    let isOpen = false;
    document.querySelector('#menu-icon').addEventListener('click', () => {
        console.log("hey")
      if (!isOpen) {
        const tl = gsap.timeline()
        tl.to('.menu-scroll', {
          opacity: 1,
          duration: 0.8
        }, 'x')
          .to('.menu-left', {
            transform: 'translate(0%)',
            duration: .8,
            opacity: 1
          }, 'x')
          .to('.menu-right', {
            transform: 'translate(0%)',
            duration: .8,
            opacity: 1
          }, 'x')
          .to('.menu-page', {
            top: '0%',
            duration: .6
          }, 'x')
          isOpen = true;
      } else {
        const tl = gsap.timeline()
        tl.to('.menu-scroll', {
          // opacity: 0,
          duration: 0.8
        }, 'x')
          .to('.menu-left', {
            transform: 'translate(-100%)',
            duration: .8,
            opacity: 0
          }, 'x')
          .to('.menu-right', {
            transform: 'translate(100%)',
            duration: .8,
            opacity: 0
          }, 'x')
          .to('.menu-page', {
            top: '-120%',
            duration: .6
          }, 'x')
          isOpen = false;
  
      }
  
    })
  }

  openCloseMenu()