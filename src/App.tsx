import "./App.css";
import { useEffect, useRef, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Typography, useMediaQuery } from "@mui/material";

import DownDialog from "./Dialogs/Professionals/down";
import LeftDialog from "./Dialogs/Adults/left";
import RightDialog from "./Dialogs/Parents/right";
import UpDialog from "./Dialogs/Students/up";
import ImageAudioPlayer from "./components/audioplayer";
import Socials from "./components/socials";
import "./shake.css";
import useResponsiveFontSize from "./hooks/useResponsiveFontSize";

function App() {
  const [DownDialogOpen, setDownDialogOpen] = useState(false);
  const [LeftDialogOpen, setLeftDialogOpen] = useState(false);
  const [RightDialogOpen, setRightDialogOpen] = useState(false);
  const [UpDialogOpen, setUpDialogOpen] = useState(false);
  const shakeRef = useRef<HTMLSpanElement>(null);
  const [_, headingSize] = useResponsiveFontSize(30, 65);

  const isSm = useMediaQuery("(max-width:600px)");

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
    const intss = setInterval(triggerShake, 10000);
    return () => {
      clearInterval(intss);
    };
  }, []);

  const handleArrowClick = (
    direction: "top" | "left" | "right" | "bottom",
    state: boolean
  ) => {
    if (direction === "bottom") {
      setDownDialogOpen(state);
    } else if (direction === "right") {
      setRightDialogOpen(state);
    } else if (direction === "left") {
      setLeftDialogOpen(state);
    } else if (direction === "top") {
      setUpDialogOpen(state);
    }
  };
  return (
    <>
      <div className="c-c-c" style={{ width: "100%", height: 150 }}>
        <Typography
          className="less-floating"
          align="center"
          fontSize={headingSize - 10}
          fontFamily={"Noto Nastaliq Urdu"}
          color={"#ededed"}
        >
          {`پرسکون زندگی`}
        </Typography>
      </div>
      <div className="app">
        <div
          className="r-c-sb"
          style={{
            width: "85vw",
            maxWidth: "600px",
            marginTop: "-10vh",
          }}
        >
          <div className="c-c-c">
            <div
              className="r-c-c move-left-onhover"
              onClick={() => handleArrowClick("left", true)}
            >
              <ArrowForwardIosIcon
                fontSize={isSm ? "small" : "medium"}
                // style={{ marginTop: -5 }}
              />

              <Typography
                className="peach-handles"
                sx={{
                  fontSize: isSm ? 15 : 20,
                  fontFamily: "Source Sans 3",
                  textAlign: "center",
                }}
              >
                18+
              </Typography>
            </div>
          </div>
          <div className="c-c-sb">
            <div
              className="c-c-c move-up-onhover"
              style={{ marginBottom: 10 }}
              onClick={() => handleArrowClick("top", true)}
            >
              <ArrowBackIosIcon
                sx={{ transform: "rotate(90deg)" }}
                fontSize={isSm ? "small" : "medium"}
              />
              <Typography
                className="peach-handles lucky"
                sx={{
                  fontSize: isSm ? 15 : 20,
                  fontFamily: "Noto Nastaliq Urdu",
                }}
              >
                طالب علم
              </Typography>
            </div>
            <ImageAudioPlayer />
            <div
              className="c-c-c move-down-onhover"
              style={{ marginTop: 10 }}
              onClick={() => handleArrowClick("bottom", true)}
            >
              <Typography
                className="peach-handles"
                sx={{
                  fontSize: isSm ? 15 : 20,
                  fontFamily: "Noto Nastaliq Urdu",
                }}
              >
                پیشہ ور افراد
              </Typography>
              <ArrowBackIosIcon
                sx={{ transform: "rotate(270deg)" }}
                fontSize={isSm ? "small" : "medium"}
              />
            </div>
          </div>
          <div
            className="r-fe-c move-right-onhover"
            onClick={() => handleArrowClick("right", true)}
          >
            <Typography
              className="peach-handles"
              sx={{
                fontSize: isSm ? 15 : 20,
                fontFamily: "Noto Nastaliq Urdu",
                textAlign: "center",
              }}
            >
              والدین
            </Typography>
            <ArrowBackIosIcon
              fontSize={isSm ? "small" : "medium"}
              sx={{ marginBottom: -1 }}
            />
          </div>
        </div>
        <DownDialog open={DownDialogOpen} setOpen={handleArrowClick} />
        <LeftDialog open={LeftDialogOpen} setOpen={handleArrowClick} />
        <RightDialog open={RightDialogOpen} setOpen={handleArrowClick} />
        <UpDialog open={UpDialogOpen} setOpen={handleArrowClick} />
      </div>
      <Socials />
      {/* <MemeCoinsLayers /> */}
    </>
  );
}

export default App;
