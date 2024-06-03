import { useEffect, useRef, useState } from "react";
import tushySong3 from "../assets/tushy-song3.mp3";
import brain from "../assets/Brain.png";
import "../shake.css";

function ImageAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const shakeRef = useRef<HTMLImageElement>(null);
  const intervalRef = useRef(null);

  // Function to add and remove the shaking class
  const triggerShake = () => {
    if (shakeRef.current) {
      shakeRef.current.classList.add("shake");
      setTimeout(() => {
        if (shakeRef.current) {
          shakeRef.current.classList.remove("shake");
        }
      }, 820); // Duration of the shake animation
    }
  };

  useEffect(() => {
    // Delay the first shake by 3 seconds after the component is mounted
    const timerInitial = setTimeout(() => {
      triggerShake();
      // Set an interval to shake the div every 10 seconds after the initial shake
      intervalRef.current = setInterval(triggerShake, 10000) as any;
    }, 3000);

    // Cleanup function to clear timeouts and intervals
    return () => {
      clearTimeout(timerInitial);
      clearInterval(intervalRef.current as any);
    };
  }, []);

  const handleImageClick = () => {
    if (isPlaying) {
    }
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
    clearInterval(intervalRef.current as any);
    if (shakeRef.current) {
      shakeRef.current.classList.remove("shake");
    }
  };

  return (
    <div className="c-c-c">
      <img
        src={brain}
        alt="Descriptive alt text"
        // onClick={handleImageClick}
        // ref={shakeRef}
        // className={isPlaying ? "bouncing" : undefined}
        style={{
          cursor: "pointer",
          width: "80%",
          marginTop: 20,
          marginBottom: 20,
        }}
      />{" "}
      <audio
        ref={audioRef}
        src={tushySong3}
        style={{ display: "none" }}
        onEnded={() => setIsPlaying(false)}
      />{" "}
    </div>
  );
}

export default ImageAudioPlayer;
