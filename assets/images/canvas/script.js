const canvas1 = document.querySelector('canvas');


const textAnim = (canvas,text) => {
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    let particles = [];
    const mouse = {
        x: 0,
        y: 0,
        radius: 20000
    }

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0.1, 'blue');
    gradient.addColorStop(0.5, 'white');
    gradient.addColorStop(0.8, 'blue');
    ctx.lineWidth = 10
    ctx.strokeStyle = '#FFFFFF';
    ctx.fillStyle = gradient


    function textWrap(text) {
        const words = text.split(' ')
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        let lineArray = [];
        let line = ''
        let count = 0;
        ctx.font = '200px sans-serif';
        for (let index = 0; index < text.split(' ').length; index++) {
            if (ctx.measureText(line).width > canvas.width / 2) {
                line = words[index] + ' ';
                count++;
            } else {
                line += words[index] + ' ';
            }
            lineArray[count] = line;
        }


        let textheight = canvas.height / 2 - (200 * count) / 2
        lineArray.forEach((e, i) => {
            ctx.fillText(e, canvas.width / 2, textheight + i * 200);
        })


        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data


        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < canvas.width; i += 1) {
            for (let j = 0; j < canvas.height; j += 1) {
                const index = (i + (j * canvas.width)) * 4;
                const red = data[index];
                const green = data[index + 1];
                const blue = data[index + 2];
                const alpha = data[index + 3];
                if (alpha > 0) {
                    particles.push(new Particles(i, j, `rgba(${red}, ${green}, ${blue}, 1)`));
                }

            }
        }
    }


    class Particles {
        constructor(i, j, color) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.originX = i;
            this.originY = j;
            this.color = color;
            this.size = 2;
            this.dx = 0;
            this.dy = 0;
            this.vx = 0;
            this.vy = 0;
            this.force = 0;
            this.angle = 0;
            this.friction = Math.random() * .1 + .1;
            this.ease = Math.random() * 0.1 + 0.05;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }

        update() {
            this.dx = mouse.x - this.x;
            this.dy = mouse.y - this.y;
            this.distance = (this.dx * this.dx + this.dy * this.dy);
            this.force = -mouse.radius / this.distance;

            if (this.distance < mouse.radius) {
                this.angle = Math.atan2(this.dy, this.dx);
                this.vx += this.force * Math.cos(this.angle);
                this.vy += this.force * Math.sin(this.angle);
            }

            this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
            this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        }
    }

    const render = () => {
        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        })
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        render();
        requestAnimationFrame(animate);
    }

    canvas1.addEventListener('mousemove', (e) => {
        mouse.x = e.offsetX;
        mouse.y = e.offsetY;
    })
    textWrap(text)
    animate();
}

textAnim(canvas1,"hello bhai")




