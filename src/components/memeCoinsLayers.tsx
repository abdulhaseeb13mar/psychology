import { useEffect, useState } from "react";
// import doge from "../assets/dogecoin.png";
// import dogwifhat from "../assets/dogwifhat.png";
// import pepe from "../assets/pepe-token.png";
// import shiba from "../assets/shiba.png";
// import bonk from "../assets/bonk.png";
// import ponke from "../assets/ponke.png";
// import wen from "../assets/wen-solana.png";
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import nft3 from "../assets/nft3.png";
import nft4 from "../assets/nft4.png";
import nft5 from "../assets/nft5.png";

import "../float.css";

// const images = [doge, dogwifhat, pepe, shiba, bonk, ponke, wen];
const images = [nft1, nft2, nft3, nft4, nft5];

const MemeCoinsLayers = () => {
  const [positions, setPositions] = useState<{ left: string; top: string }[]>(
    []
  );

  useEffect(() => {
    // Function to generate random positions
    const generateRandomPositions = () => {
      return Array.from({ length: 5 }, () => ({
        left: `${Math.random() * 90}vw`, // Random horizontal position (0% to 80% of viewport width)
        top: `${Math.random() * 90}vh`, // Random vertical position (0% to 80% of viewport height)
      }));
    };

    // Set initial random positions when component mounts
    setPositions(generateRandomPositions());

    // Update positions every 10 seconds
    const intervalId = setInterval(() => {
      setPositions(generateRandomPositions());
    }, 5000); // 10000 milliseconds = 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, zIndex: -10 }}>
      {positions.map((position, index) => (
        <img
          key={index}
          src={images[index]}
          alt={`s${index + 1}`}
          className="floating"
          style={{
            ...position,
            position: "absolute",
            opacity: 0.2,
            borderRadius: "50%",
            width: "20vw",
            maxWidth: "150px",
            zIndex: -10,
            transition: "left 1s ease, top 1s ease", // Smooth transition for left and top properties
          }}
        />
      ))}
    </div>
  );
};

export default MemeCoinsLayers;
