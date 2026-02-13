"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Mouse state
        const mouse = { x: -1000, y: -1000 };

        canvas.width = width;
        canvas.height = height;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            speedX: number;
            originalSpeedY: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.5; // Small, subtle particles
                this.speedY = Math.random() * -0.5 - 0.2; // Move upwards (antigravity)
                this.originalSpeedY = this.speedY;
                this.speedX = Math.random() * 0.4 - 0.2; // Slight horizontal drift
                this.opacity = Math.random() * 0.5 + 0.1; // Translucent
            }

            update() {
                // Interaction with mouse
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 150;
                const force = (maxDistance - distance) / maxDistance;

                if (distance < maxDistance) {
                    // Push away from mouse
                    this.speedX -= forceDirectionX * force * 0.5;
                    this.speedY -= forceDirectionY * force * 0.5;
                } else {
                    // Return to natural movement slowly
                    if (this.speedY !== this.originalSpeedY) {
                        // Smoothly drift back to upward speed
                        const dy = this.speedY - this.originalSpeedY;
                        this.speedY -= dy * 0.02;
                    }
                    // Dampen horizontal speed back to drift
                    if (Math.abs(this.speedX) > 0.2) {
                        this.speedX *= 0.98;
                    }
                }


                this.x += this.speedX;
                this.y += this.speedY;

                // Reset if off screen
                if (this.y < -10) {
                    this.y = height + 10;
                    this.x = Math.random() * width;
                }
                if (this.x < -10) this.x = width + 10;
                if (this.x > width + 10) this.x = -10;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(150, 150, 150, ${this.opacity})`; // Light grey particles
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            const particleCount = Math.min(Math.floor((width * height) / 10000), 150); // Density control
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    );
}
