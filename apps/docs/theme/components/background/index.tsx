/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { useEffect, useRef, useState } from 'react';

import { useDark } from '@rspress/core/runtime';
import './index.css';

// 粒子接口定义
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  size: number; // 块状粒子尺寸
  isSquare: boolean; // 是否为方形粒子
}

// 背景组件 - 反重力流动粒子系统
export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const isDark = useDark();

  // 颜色配置 - 根据主题模式调整
  const lightColors = ['#4062A7', '#5482BE', '#5ABAC2', '#86C8C5'];
  const darkColors = ['#6B8CFF', '#8DA9FF', '#7FDBDA', '#A8EDEA'];
  const colors = isDark ? darkColors : lightColors;

  // 初始化粒子 - 规整长方形块状（更大尺寸，更少数量）
  const initParticles = () => {
    // 进一步减少粒子数量，增大块状尺寸
    const blockRows = 4; // 减少行数到4行
    const blockCols = Math.floor(dimensions.width / 200); // 增大块间距
    const particleCount = blockRows * blockCols * 2; // 每块减少到2个粒子

    particlesRef.current = [];
    const blockWidth = dimensions.width / blockCols;
    const blockHeight = 80; // 增大块高度

    for (let row = 0; row < blockRows; row++) {
      for (let col = 0; col < blockCols; col++) {
        // 每个块状区域创建2个粒子
        for (let p = 0; p < 2; p++) {
          const size = Math.random() * 4 + 8; // 增大尺寸到 8-12px
          const blockX = col * blockWidth + blockWidth / 2;
          const blockY = row * blockHeight + blockHeight / 2 + 120; // 向下偏移120px

          particlesRef.current.push({
            x: blockX + (Math.random() - 0.5) * blockWidth * 0.5, // 在块内随机分布
            y: blockY + (Math.random() - 0.5) * blockHeight * 0.5,
            vx: Math.random() * 0.5 + 0.5, // 统一向右速度
            vy: (Math.random() - 0.5) * 0.08, // 极小的垂直运动
            radius: size / 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: Math.random() * 0.2 + 0.8, // 更高透明度
            size: size,
            isSquare: true, // 全部为方形，创建块状感
          });
        }
      }
    }
  };

  // 绘制粒子
  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    particlesRef.current.forEach((particle, i) => {
      // 从左往右流动效果 - 保持水平速度
      if (particle.vx < 0.2) particle.vx = Math.random() * 0.5 + 0.3;

      // 鼠标交互 - 粒子被鼠标吸引
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) / 100;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle) * force * 0.02;
        particle.vy += Math.sin(angle) * force * 0.02;
      }

      // 粒子间连接 - 适配大尺寸块状粒子
      for (let j = i + 1; j < Math.min(i + 6, particlesRef.current.length); j++) {
        const otherParticle = particlesRef.current[j];
        const dx2 = otherParticle.x - particle.x;
        const dy2 = otherParticle.y - particle.y;
        const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (distance2 < 120 && Math.abs(dy2) < 50) {
          // 增大连接距离，适配大尺寸
          // 绘制连接线
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);

          const alpha = Math.floor(((120 - distance2) / 120) * 70)
            .toString(16)
            .padStart(2, '0');
          ctx.strokeStyle = particle.color + alpha;
          ctx.lineWidth = ((120 - distance2) / 120) * 1.8; // 稍粗的线条
          ctx.stroke();
        }
      }

      // 更新位置
      particle.x += particle.vx;
      particle.y += particle.vy;

      // 边界处理 - 从左往右流动循环
      if (particle.x > dimensions.width + 10) {
        particle.x = -10; // 粒子从左边重新进入
        particle.y = Math.random() * dimensions.height; // 随机垂直位置
        particle.vx = Math.random() * 0.8 + 0.2; // 重新设置向右速度
      }
      if (particle.x < -10) particle.x = dimensions.width + 10;
      if (particle.y < -10) particle.y = dimensions.height + 10;
      if (particle.y > dimensions.height + 10) particle.y = -10;

      // 阻尼
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // 绘制更大更清晰的规整长方形块状粒子
      ctx.fillStyle =
        particle.color +
        Math.floor(particle.alpha * 255)
          .toString(16)
          .padStart(2, '0');

      // 创建更大的长方形块状效果
      const blockWidth = particle.size * 2.2; // 增大宽度比例
      const blockHeight = particle.size * 1.4; // 增大高度比例

      // 绘制长方形
      ctx.fillRect(
        particle.x - blockWidth / 2,
        particle.y - blockHeight / 2,
        blockWidth,
        blockHeight
      );

      // 添加更清晰的边框
      ctx.strokeStyle = particle.color + 'DD'; // 更明显的边框
      ctx.lineWidth = 1.5; // 增加边框厚度
      ctx.strokeRect(
        particle.x - blockWidth / 2,
        particle.y - blockHeight / 2,
        blockWidth,
        blockHeight
      );
    });
  };

  // 动画循环
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 清除画布 - 根据主题模式调整背景色，增加透明度
    const bgColor = isDark ? 'rgba(13, 17, 23, 0.05)' : 'rgba(237, 243, 248, 0.05)';
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    // 绘制粒子
    drawParticles(ctx);

    animationRef.current = requestAnimationFrame(animate);
  };

  // 处理窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 处理鼠标移动
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 初始化和动画
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    initParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, isDark]); // 添加isDark依赖，主题变化时重新初始化

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="background-canvas"
      style={{
        position: 'absolute',
        width: '100%',
        height: '490px',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
};
