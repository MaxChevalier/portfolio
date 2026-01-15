import { useEffect, useRef } from "react";
import "./Background.scss";

const Background = () => {
  const spaceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let wantGenerateStars = true;

    function newStar() {
      if (!wantGenerateStars || !spaceRef.current) return;

      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";

      const size = Math.floor(Math.random() * 3) + "px";
      star.style.width = size;
      star.style.height = size;

      spaceRef.current.appendChild(star);
      setTimeout(() => star.remove(), 10000);
    }

    const interval = setInterval(newStar, 50);

    return () => {
      wantGenerateStars = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={spaceRef}
      className="space"
    />
  );
};

export default Background;