const canvas = document.querySelector('canvas');
canvas.width = 500;  // Set your desired width
canvas.height = 500; // Set your desired height
const img = new Image();
let particles = [];

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})

const mouse = {
    x: 0,
    y: 0,
    radius: 20000
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
        this.friction = Math.random() * .1;
        this.ease = Math.random() * 0.1 + 0.7;
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

// Set the crossOrigin attribute to allow cross-origin requests
img.crossOrigin = 'anonymous';

img.src = 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8';

const ctx = canvas.getContext('2d');

// Set canvas dimensions based on its style or a desired size

img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    try {
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < canvas.width; i += 2) {
            for (let j = 0; j < canvas.height; j += 2) {
                const index = (i + (j * canvas.width)) * 4;
                const red = data[index];
                const green = data[index + 1];
                const blue = data[index + 2];
                const alpha = data[index + 3];
                particles.push(new Particles(i, j, `rgba(${red}, ${green}, ${blue}, 1)`));
            }
        }
    } catch (e) {
        console.error("Error accessing image data: ", e);
    }
};

const render = () => {
    particles.forEach((particle) => {
        particle.draw();
        particle.update();
    })
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
    requestAnimationFrame(animate);
}

animate();
