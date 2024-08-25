import React, { useEffect, useRef } from "react";

const Raining = () => {
  const canvasRef = useRef(null);

  const random = (min, max) => Math.random() * (max - min) + min;

  const setup = () => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    const w = (c.width = window.innerWidth);
    const h = (c.height = window.innerHeight);
    const clearColor = "rgb(28, 107, 160,0.3)";
    const max = 40;
    const drops = [];

    class O {
      constructor() {
        this.init();
      }

      init() {
        this.x = random(0, w);
        this.y = 0;
        this.color = "rgb(0,172,181)";
        this.w = 2;
        this.h = 1;
        this.vy = random(4, 5);
        this.vw = 3;
        this.vh = 1;
        this.size = 2;
        this.hit = random(h * 0.8, h * 0.9);
        this.a = 1;
        this.va = 0.96;
      }

      draw() {
        if (this.y > this.hit) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.h / 2);

          ctx.bezierCurveTo(
            this.x + this.w / 2,
            this.y - this.h / 2,
            this.x + this.w / 2,
            this.y + this.h / 2,
            this.x,
            this.y + this.h / 2
          );

          ctx.bezierCurveTo(
            this.x - this.w / 2,
            this.y + this.h / 2,
            this.x - this.w / 2,
            this.y - this.h / 2,
            this.x,
            this.y - this.h / 2
          );

          ctx.strokeStyle = `hsla(180, 100%, 50%, ${this.a})`;
          ctx.stroke();
          ctx.closePath();
        } else {
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.size, this.size * 5);
        }
        this.update();
      }

      update() {
        if (this.y < this.hit) {
          this.y += this.vy;
        } else {
          if (this.a > 0.03) {
            this.w += this.vw;
            this.h += this.vh;
            if (this.w > 100) {
              this.a *= this.va;
              this.vw *= 0.98;
              this.vh *= 0.98;
            }
          } else {
            this.init();
          }
        }
      }
    }

    function resize() {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }

    function anim() {
      ctx.fillStyle = clearColor;
      ctx.fillRect(0, 0, w, h);
      for (const drop of drops) {
        drop.draw();
      }
      requestAnimationFrame(anim);
    }

    for (let i = 0; i < max; i++) {
      setTimeout(() => {
        const o = new O();
        drops.push(o);
      }, i * 200);
    }

    window.addEventListener("resize", resize);
    anim();
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <canvas id="canvas-club" ref={canvasRef} style={{ position: "absolute" }} />
  );
};

export default Raining;
