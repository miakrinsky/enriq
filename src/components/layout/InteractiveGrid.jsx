import { useMemo } from "react";

function InteractiveGrid({
  mousePosition,
  spacing = 80,
  maxDistance = 150,
  maxOffset = 15,
}) {
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1920;
  const viewportHeight =
    typeof window !== "undefined" ? window.innerHeight : 1080;

  const verticalLines = useMemo(() => {
    const count = Math.ceil(viewportWidth / spacing);
    return Array.from({ length: count }, (_, i) => i * spacing);
  }, [viewportWidth, spacing]);

  const horizontalLines = useMemo(() => {
    const count = Math.ceil(viewportHeight / spacing);
    return Array.from({ length: count }, (_, i) => i * spacing);
  }, [viewportHeight, spacing]);

  const calculateEffect = (linePosition, mousePos, isVertical) => {
    const distance = Math.abs(mousePos - linePosition);

    if (distance > maxDistance) {
      return { offset: 0, opacity: 0.1, color: "bg-neutral-200" };
    }

    const strength = 1 - distance / maxDistance;
    const offset = strength * maxOffset * (mousePos > linePosition ? 1 : -1);
    const opacity = 0.1 + strength * 0.4;

    const colorStrength = Math.floor(strength * 100);
    let color = "bg-neutral-200";
    if (colorStrength > 70) color = "bg-purple-400";
    else if (colorStrength > 40) color = "bg-purple-300";
    else if (colorStrength > 20) color = "bg-purple-200";

    return { offset, opacity, color };
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {verticalLines.map((x, i) => {
        const { offset, opacity, color } = calculateEffect(
          x,
          mousePosition.x,
          true
        );

        return (
          <div
            key={`v-${i}`}
            className={`absolute top-0 bottom-0 w-[1px] ${color} transition-all duration-200 ease-out`}
            style={{
              left: `${x}px`,
              transform: `translateX(${offset}px)`,
              opacity: opacity,
            }}
          />
        );
      })}

      {horizontalLines.map((y, i) => {
        const { offset, opacity, color } = calculateEffect(
          y,
          mousePosition.y,
          false
        );

        return (
          <div
            key={`h-${i}`}
            className={`absolute left-0 right-0 h-[1px] ${color} transition-all duration-200 ease-out`}
            style={{
              top: `${y}px`,
              transform: `translateY(${offset}px)`,
              opacity: opacity,
            }}
          />
        );
      })}
    </div>
  );
}

export default InteractiveGrid;
