import { useState, useEffect } from 'react';

/**
 * 监听滚动位置的 Hook
 * @param threshold 触发动画的滚动阈值 (默认 50px)
 * @returns boolean 是否已经滚动超过阈值
 */
export const useScrollNavbar = (threshold: number = 50): boolean => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;
    let timeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY || document.documentElement.scrollTop;
          
          // 添加滞后区间，避免在阈值附近频繁切换
          // 向下滚动时使用 threshold，向上滚动时使用 threshold - 30
          const shouldBeScrolled = isScrolled 
            ? currentScrollY > threshold - 30  // 向上滚动需要多滚动一点才切换回去
            : currentScrollY > threshold;      // 向下滚动到阈值就切换
          
          // 添加轻微延迟让过渡更平滑
          if (isScrolled !== shouldBeScrolled) {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
              setIsScrolled(shouldBeScrolled);
            }, 30); // 30ms 延迟让切换更柔和
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // { passive: true } 优化移动端滚动性能
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 初始化检查 (防止刷新页面后停留在中间，导航栏样式不对)
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, [threshold, isScrolled]);

  return isScrolled;
};
