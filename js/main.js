document.querySelector(".box1").addEventListener("click", box_selected1);
document.querySelector(".box2").addEventListener("click", box_selected2);

//declarando variables

//box1

box1 = document.querySelector(".box1");
check_bg1 = document.querySelector(".box1 .check");
icon_check1 = document.querySelector(".box1 .fa-check");

//box2

box2 = document.querySelector(".box2");
check_bg2 = document.querySelector(".box2 .check");
icon_check2 = document.querySelector(".box2 .fa-check");


value_box = 0;

function box_selected1 () {
    box2.classList.remove('box-selected');
    check_bg2.classList.remove('check-selected');
    icon_check2.classList.remove('icon-check');

    box1.classList.toggle('box-selected');
    check_bg1.classList.toggle('check-selected');
    icon_check1.classList.toggle('icon-check');

    value_box = 1;
    console.log(value_box);
}

function box_selected2 () {

    box1.classList.remove('box-selected');
    check_bg1.classList.remove('check-selected');
    icon_check1.classList.remove('icon-check');

    box2.classList.toggle('box-selected');
    check_bg2.classList.toggle('check-selected');
    icon_check2.classList.toggle('icon-check');

    value_box = 2;
    console.log(value_box);
}


document.addEventListener('DOMContentLoaded', function() {
    class PageTopScroller {
        constructor(options = null) {
            this.BODY = document.body;
            this.PARENT_BOX;
            this.PARENT_BOX_ID = 'ptsBox';
            this.IMG_SRC = null;
            this.ANIMATE_DURATION = 10;
            this.ANIMATE_INCREMENT = 100;

            // options
            if(options !== null && Object.keys(options).length > 0) {

                if(options['IMG_SRC']) {
                    this.IMG_SRC = options['IMG_SRC'];
                }

                if(options['ANIMATE_DURATION']) {
                    this.ANIMATE_DURATION = options['ANIMATE_DURATION'];
                }


                if(options['ANIMATE_DURATION']) {
                    this.ANIMATE_DURATION = options['ANIMATE_DURATION'];
                }
            }
        }
        generateHTML() {
            this.PARENT_BOX = document.createElement('DIV');
            this.PARENT_BOX.id = this.PARENT_BOX_ID;
            this.PARENT_BOX.classList.add(this.PARENT_BOX_ID);
            this.BODY.appendChild(this.PARENT_BOX);
            const a = document.createElement('A');
            this.PARENT_BOX.appendChild(a);
            if(this.IMG_SRC) {
                const img = document.createElement('IMG');
                img.src = this.IMG_SRC;
                a.appendChild(img);
            } else {
                const arrowUp = document.createElement('SPAN');
                arrowUp.classList.add('arrowUp');
                a.appendChild(arrowUp);
            }
        }
        easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if(t < 1) {
                return c / 2 * t * t + b;
            }
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        eventListener() {
            let scrollTimerId;
            window.addEventListener('scroll', (e) => {
                if(scrollTimerId != null) {
                    clearTimeout(scrollTimerId);
                }
                scrollTimerId = setTimeout(() => {
                    if(window.pageYOffset > 0) {
                        this.PARENT_BOX.classList.add('active');
                    } else {
                        this.PARENT_BOX.classList.remove('active');
                    }
                }, 100);
            }, false);
            this.PARENT_BOX.addEventListener('click', () => {
                const duration = this.ANIMATE_DURATION;
                const start = window.pageYOffset;
                const change = -start;
                const increment = this.ANIMATE_INCREMENT;
                let currentTime = 0;

                const animateScroll = () => {
                    currentTime += increment;
                    const val = this.easeInOutQuad(currentTime, start, change, duration);
                    window.scrollTo(0, val);
                    if (currentTime < duration) {
                        setTimeout(animateScroll, 10);
                    } else {
                        window.scrollTo(0, 0);
                    }
                };
                animateScroll();
            }, false);
        }
        Main() {
            this.generateHTML();
            this.eventListener();
        }

    }
    options = {
        'IMG_SRC': null,
        'ANIMATE_DURATION': null,
        'ANIMATE_INCREMENT': null,
    }
    const instance = new PageTopScroller(options);
    instance.Main();

}, false);
