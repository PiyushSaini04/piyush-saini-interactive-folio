type Particle = {
  x: number;
  y: number;
  size: number;
  density: number;
  velocity: {
    x: number;
    y: number;
  };

  update: () => void;
  draw: () => void;
};

export function initParticles(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  mouse: { x: number | null; y: number | null; radius: number }
) {
  let particles: Particle[] = [];

  // ✅ renamed class
  class ParticleModel implements Particle {
    x: number;
    y: number;
    size: number;
    density: number;
    velocity: { x: number; y: number };

    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.density = Math.random() * 30 + 1;
      this.velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      };
    }

    draw() {
      ctx.fillStyle = "rgba(100,150,255,0.3)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }

    update() {
      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if (this.x > canvas.width || this.x < 0) this.velocity.x *= -1;
      if (this.y > canvas.height || this.y < 0) this.velocity.y *= -1;

      if (mouse.x === null || mouse.y === null) return;

      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius) {
        const forceX = dx / distance;
        const forceY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;

        this.x -= forceX * force * this.density;
        this.y -= forceY * force * this.density;
      }
    }
  }

  const init = () => {
    particles = [];
    const count = (canvas.width * canvas.height) / 15000;

    for (let i = 0; i < count; i++) {
      particles.push(new ParticleModel());
    }
  };

  const connect = () => {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const opacity = 1 - distance / 150;
          ctx.strokeStyle = `rgba(100,150,255,${opacity * 0.15})`;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    connect();

    return requestAnimationFrame(animate);
  };

  init();

  return animate;
}