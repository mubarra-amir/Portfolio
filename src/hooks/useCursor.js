import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0, animId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      // dot follows instantly
      dot.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
    };

    // Ring lerp — FASTER: 0.28 instead of 0.1
    const animRing = () => {
      rx += (mx - rx) * 0.28;
      ry += (my - ry) * 0.28;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      animId = requestAnimationFrame(animRing);
    };
    animRing();
    document.addEventListener('mousemove', onMove);

    const enterHover = () => {
      dot.style.transform  += ' scale(2.8)';
      dot.style.boxShadow   = '0 0 18px rgba(245,166,35,1), 0 0 45px rgba(245,166,35,0.8), 0 0 80px rgba(245,166,35,0.4)';
      ring.style.opacity    = '0';
    };
    const leaveHover = () => {
      dot.style.transform   = dot.style.transform.replace(' scale(2.8)', '');
      dot.style.boxShadow   = '';
      ring.style.opacity    = '1';
    };

    const bindTargets = () => {
      document.querySelectorAll('a,button,[data-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', enterHover);
        el.removeEventListener('mouseleave', leaveHover);
        el.addEventListener('mouseenter', enterHover);
        el.addEventListener('mouseleave', leaveHover);
      });
    };
    bindTargets();

    const mo = new MutationObserver(bindTargets);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
      mo.disconnect();
    };
  }, []);

  return { dotRef, ringRef };
}