import { useEffect, useState } from "react";

const useResponsiveFontSize = (
  paraSizeLimit: number,
  parasizeOffset: number
) => {
  const [headingSize, setHeadingSize] = useState(50); // Default font size
  const [paraSize, setParaSize] = useState(20); // Default font size

  useEffect(() => {
    // Function to calculate font size based on viewport width
    const calculateFontSize = () => {
      const viewportWidth = window.innerWidth;
      // Example calculation, adjust as needed
      const newHeadingSize = Math.max(50, Math.min(viewportWidth / 18, 150));
      const newParaSize = Math.max(
        20,
        Math.min(viewportWidth / parasizeOffset, paraSizeLimit)
      );
      setHeadingSize(newHeadingSize);
      setParaSize(newParaSize);
    };

    // Call the function on mount and resize
    calculateFontSize();
    window.addEventListener("resize", calculateFontSize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", calculateFontSize);
  }, []);

  return [paraSize, headingSize];
};

export default useResponsiveFontSize;
