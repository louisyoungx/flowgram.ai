/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useEffect, useRef, useState } from 'react';

import { useDark } from '@rspress/core/runtime';
import './index.css';

// Trail particle interface for flame effect
interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  tick: number;
  life: number;
  alpha: number;
  color: string;
}

// Meteor particle interface definition
interface MeteorParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  trail: Array<{ x: number; y: number; alpha: number }>;
  trailLength: number;
  speed: number;
  angle: number;
  // New flame trail system
  flameTrails: TrailParticle[];
  maxFlameTrails: number;
}

// Configuration options for flame effects
const flameOptions = {
  trailSizeBaseMultiplier: 0.6,
  trailSizeAddedMultiplier: 0.3,
  trailSizeSpeedMultiplier: 0.15,
  trailAddedBaseRadiant: -0.8,
  trailAddedAddedRadiant: 3,
  trailBaseLifeSpan: 25,
  trailAddedLifeSpan: 20,
  trailGenerationChance: 0.3,
};

// Trail class for managing individual flame particles
class Trail {
  private particle: TrailParticle;

  private parentMeteor: MeteorParticle;

  constructor(parent: MeteorParticle) {
    this.parentMeteor = parent;
    this.particle = this.createTrailParticle();
  }

  // Create a new trail particle based on parent meteor
  private createTrailParticle = (): TrailParticle => {
    const baseSize =
      this.parentMeteor.radius *
      (flameOptions.trailSizeBaseMultiplier +
        flameOptions.trailSizeAddedMultiplier * Math.random());

    const radiantOffset =
      flameOptions.trailAddedBaseRadiant + flameOptions.trailAddedAddedRadiant * Math.random();
    const trailAngle = this.parentMeteor.angle + radiantOffset;
    const speed = baseSize * flameOptions.trailSizeSpeedMultiplier;

    return {
      x: this.parentMeteor.x + (Math.random() - 0.5) * this.parentMeteor.radius,
      y: this.parentMeteor.y + (Math.random() - 0.5) * this.parentMeteor.radius,
      vx: speed * Math.cos(trailAngle),
      vy: speed * Math.sin(trailAngle),
      size: baseSize,
      tick: 0,
      life: Math.floor(
        flameOptions.trailBaseLifeSpan + flameOptions.trailAddedLifeSpan * Math.random()
      ),
      alpha: 0.8 + Math.random() * 0.2,
      color: this.parentMeteor.color,
    };
  };

  // Update trail particle position and lifecycle
  public step = (): boolean => {
    this.particle.tick++;

    // Check if trail particle should be removed
    if (this.particle.tick > this.particle.life) {
      return false; // Signal for removal
    }

    // Update position
    this.particle.x += this.particle.vx;
    this.particle.y += this.particle.vy;

    // Apply slight deceleration for more realistic flame behavior
    this.particle.vx *= 0.98;
    this.particle.vy *= 0.98;

    return true; // Continue existing
  };

  // Render the trail particle
  public draw = (ctx: CanvasRenderingContext2D): void => {
    const lifeRatio = 1 - this.particle.tick / this.particle.life;
    const currentSize = this.particle.size * lifeRatio;
    const currentAlpha = this.particle.alpha * lifeRatio;

    if (currentSize <= 0 || currentAlpha <= 0) return;

    const alphaHex = Math.floor(currentAlpha * 255)
      .toString(16)
      .padStart(2, '0');

    // Draw flame particle with gradient
    const gradient = ctx.createRadialGradient(
      this.particle.x,
      this.particle.y,
      0,
      this.particle.x,
      this.particle.y,
      currentSize * 2
    );

    gradient.addColorStop(0, this.particle.color + 'FF');
    gradient.addColorStop(0.4, this.particle.color + alphaHex);
    gradient.addColorStop(0.8, this.particle.color + '33');
    gradient.addColorStop(1, this.particle.color + '00');

    ctx.beginPath();
    ctx.arc(this.particle.x, this.particle.y, currentSize, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add glow effect
    ctx.shadowColor = this.particle.color;
    ctx.shadowBlur = currentSize * 2;
    ctx.fill();
    ctx.shadowBlur = 0;
  };
}

// Background2 component - Circular meteor with enhanced flame trailing effect
export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const meteorsRef = useRef<MeteorParticle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const isDark = useDark();

  // Color configuration - adjusted based on theme mode
  const lightColors = ['#4062A7', '#5482BE', '#5ABAC2', '#86C8C5'];
  const darkColors = ['#6B8CFF', '#8DA9FF', '#7FDBDA', '#A8EDEA'];
  const colors = isDark ? darkColors : lightColors;

  // Initialize meteor particles with flame trail system
  const initMeteors = (): void => {
    const meteorCount = 12; // Slightly reduced for better performance with flame trails
    meteorsRef.current = [];

    for (let i = 0; i < meteorCount; i++) {
      const angle = Math.PI * 0.25; // Fixed 45 degrees (down-right)
      const radius = Math.random() * 1.2 + 1.8; // Slightly larger meteors for better flame effect
      const speed = (radius - 1.8) * 3.0 + 2.0; // Adjusted speed range
      const trailLength = Math.floor(Math.random() * 15 + 10);

      meteorsRef.current.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.3 + 0.7,
        trail: [],
        trailLength,
        speed,
        angle,
        // Initialize flame trail system
        flameTrails: [],
        maxFlameTrails: Math.floor(radius * 8 + 5), // More trails for larger meteors
      });
    }
  };

  // Update meteor trail (original trail system)
  const updateTrail = (meteor: MeteorParticle): void => {
    meteor.trail.unshift({
      x: meteor.x,
      y: meteor.y,
      alpha: meteor.alpha,
    });

    if (meteor.trail.length > meteor.trailLength) {
      meteor.trail.pop();
    }

    meteor.trail.forEach((point, index) => {
      point.alpha = meteor.alpha * (1 - index / meteor.trailLength);
    });
  };

  // Update flame trails system
  const updateFlameTrails = (meteor: MeteorParticle): void => {
    // Generate new flame trail particles
    if (
      meteor.flameTrails.length < meteor.maxFlameTrails &&
      Math.random() < flameOptions.trailGenerationChance
    ) {
      const trail = new Trail(meteor);
      meteor.flameTrails.push(trail as any); // Type assertion for compatibility
    }

    // Update existing flame trails and remove expired ones
    meteor.flameTrails = meteor.flameTrails.filter((trail: any) => trail.step && trail.step());
  };

  // Draw meteor with enhanced flame trailing effect
  const drawMeteor = (ctx: CanvasRenderingContext2D, meteor: MeteorParticle): void => {
    // Draw flame trails first (behind the meteor)
    meteor.flameTrails.forEach((trail: any) => {
      if (trail.draw) {
        trail.draw(ctx);
      }
    });

    // Draw original trail system
    meteor.trail.forEach((point, index) => {
      const trailRadius = meteor.radius * (1 - index / meteor.trailLength) * 0.8;
      const alpha = Math.floor(point.alpha * 255)
        .toString(16)
        .padStart(2, '0');

      ctx.beginPath();
      ctx.arc(point.x, point.y, trailRadius, 0, Math.PI * 2);
      ctx.fillStyle = meteor.color + alpha;
      ctx.fill();

      ctx.shadowColor = meteor.color;
      ctx.shadowBlur = trailRadius * 2 + meteor.radius;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw main meteor body
    ctx.beginPath();
    ctx.arc(meteor.x, meteor.y, meteor.radius, 0, Math.PI * 2);

    const gradient = ctx.createRadialGradient(
      meteor.x,
      meteor.y,
      0,
      meteor.x,
      meteor.y,
      meteor.radius * 2.5
    );
    gradient.addColorStop(0, meteor.color + 'FF');
    gradient.addColorStop(0.5, meteor.color + 'DD');
    gradient.addColorStop(0.8, meteor.color + '77');
    gradient.addColorStop(1, meteor.color + '00');

    ctx.fillStyle = gradient;
    ctx.fill();

    // Add bright core
    ctx.beginPath();
    ctx.arc(meteor.x, meteor.y, meteor.radius * 0.7, 0, Math.PI * 2);
    ctx.fillStyle = meteor.color + 'FF';
    ctx.fill();

    // Enhanced outer glow
    ctx.shadowColor = meteor.color;
    ctx.shadowBlur = meteor.radius * 5 + 3;
    ctx.fill();
    ctx.shadowBlur = 0;
  };

  // Update meteor position and behavior
  const updateMeteor = (meteor: MeteorParticle): void => {
    // Mouse interaction - meteors are slightly attracted to mouse
    const dx = mouseRef.current.x - meteor.x;
    const dy = mouseRef.current.y - meteor.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 120) {
      const force = ((120 - distance) / 120) * 0.008; // Slightly reduced force for stability
      const angle = Math.atan2(dy, dx);
      meteor.vx += Math.cos(angle) * force;
      meteor.vy += Math.sin(angle) * force;
    }

    // Update both trail systems before moving
    updateTrail(meteor);
    updateFlameTrails(meteor);

    // Update position
    meteor.x += meteor.vx;
    meteor.y += meteor.vy;

    // Boundary wrapping with smooth transition
    if (meteor.x > dimensions.width + meteor.radius * 3) {
      meteor.x = -meteor.radius * 3;
      meteor.trail = []; // Clear trail when wrapping
      meteor.flameTrails = []; // Clear flame trails when wrapping
    }
    if (meteor.x < -meteor.radius * 3) {
      meteor.x = dimensions.width + meteor.radius * 3;
      meteor.trail = [];
      meteor.flameTrails = [];
    }
    if (meteor.y > dimensions.height + meteor.radius * 3) {
      meteor.y = -meteor.radius * 3;
      meteor.trail = [];
      meteor.flameTrails = [];
    }
    if (meteor.y < -meteor.radius * 3) {
      meteor.y = dimensions.height + meteor.radius * 3;
      meteor.trail = [];
      meteor.flameTrails = [];
    }

    // Maintain consistent direction - gently guide back to base direction
    const baseAngle = Math.PI * 0.25; // 45 degrees

    // Gradually adjust direction
    meteor.vx += Math.cos(baseAngle) * 0.003;
    meteor.vy += Math.sin(baseAngle) * 0.003;

    // Apply slight damping to prevent excessive speed
    meteor.vx *= 0.999;
    meteor.vy *= 0.999;

    // Maintain minimum speed to keep meteors moving
    const currentSpeed = Math.sqrt(meteor.vx * meteor.vx + meteor.vy * meteor.vy);
    if (currentSpeed < 0.5) {
      meteor.vx = Math.cos(baseAngle) * 0.8;
      meteor.vy = Math.sin(baseAngle) * 0.8;
    }

    // Update meteor angle for flame trail generation
    meteor.angle = Math.atan2(meteor.vy, meteor.vx);
  };

  // Animation loop
  const animate = (): void => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas completely to avoid permanent trails
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Add subtle background with very low opacity for better flame visibility
    const bgColor = isDark ? 'rgba(13, 17, 23, 0.015)' : 'rgba(237, 243, 248, 0.015)';
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    // Update and draw meteors
    meteorsRef.current.forEach((meteor) => {
      updateMeteor(meteor);
      drawMeteor(ctx, meteor);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = (): void => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Initialize and start animation
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    initMeteors();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, isDark]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="background2-canvas"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};
