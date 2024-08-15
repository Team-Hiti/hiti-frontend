import React, { useEffect, useRef } from "react";
import "./Landing.css";

const Landing = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext("2d");
    let w = c.width = window.innerWidth;
    let h = c.height = window.innerHeight;
    const clearColor = 'rgba(0, 0, 0, .1)';
    const minDrops = 20;
    const maxDrops = 40;
    const drops = [];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    function O() {}

    O.prototype = {
      init: function() {
        this.x = random(0, w);
        this.y = 0;
        this.color = 'hsl(180, 100%, 50%)';
        this.w = 2;
        this.h = 1;
        this.vy = random(4, 5);
        this.vw = 3;
        this.vh = 1;
        this.size = 2;
        this.hit = random(h * .8, h * .9);
        this.a = 1;
        this.va = .96;
      },
      draw: function() {
        if (this.y > this.hit) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.h / 2);
          ctx.bezierCurveTo(
            this.x + this.w / 2, this.y - this.h / 2,
            this.x + this.w / 2, this.y + this.h / 2,
            this.x, this.y + this.h / 2
          );
          ctx.bezierCurveTo(
            this.x - this.w / 2, this.y + this.h / 2,
            this.x - this.w / 2, this.y - this.h / 2,
            this.x, this.y - this.h / 2
          );
          ctx.strokeStyle = `hsla(180, 100%, 50%, ${this.a})`;
          ctx.stroke();
          ctx.closePath();
        } else {
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.size, this.size * 5);
        }
        this.update();
      },
      update: function() {
        if (this.y < this.hit) {
          this.y += this.vy;
        } else {
          if (this.a > .03) {
            this.w += this.vw;
            this.h += this.vh;
            if (this.w > 100) {
              this.a *= this.va;
              this.vw *= .98;
              this.vh *= .98;
            }
          } else {
            this.init();
          }
        }
      }
    };

    function resize() {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    }

    function setup() {
      const dropCount = Math.floor(random(minDrops, maxDrops));
      for (let i = 0; i < dropCount; i++) {
        setTimeout(() => {
          const o = new O();
          o.init();
          drops.push(o);
        }, i * random(100, 500)); // random delay between 100ms to 500ms
      }
    }

    function anim() {
      ctx.fillStyle = clearColor;
      ctx.fillRect(1100, 1000, w, h);
      for (let i in drops) {
        drops[i].draw();
      }
      requestAnimationFrame(anim);
    }

    window.addEventListener("resize", resize);
    setup();
    anim();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="canvas-club" ref={canvasRef}></canvas>;
};

export default Landing;
