import { ReactNode } from "react";
import peach from "../assets/peach.png";
import { Typography } from "@mui/material";
import useResponsiveFontSize from "../hooks/useResponsiveFontSize";
import "../float.css";

const DialogLayout = ({
  handleClose,
  heading,
  children,
}: {
  handleClose: () => void;
  children: ReactNode | string;
  heading: ReactNode | string;
}) => {
  const [paraSize, headingSize] = useResponsiveFontSize(30, 65);

  return (
    <div
      className="c-c-fs"
      style={{
        position: "relative",
        paddingLeft: "20px",
        paddingRight: "20px",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <div
        className="r-c-sb"
        style={{
          width: "100%",
          justifySelf: "flex-start",
          height: 80,
        }}
      >
        <img
          src={peach}
          alt="peach"
          style={{ width: "10vw", cursor: "pointer", maxWidth: "60px" }}
          onClick={handleClose}
        />
      </div>
      <div
        className="c-c-c"
        style={{
          width: "98%",
          maxWidth: "1100px",
          flex: 1,
          paddingBottom: 80,
        }}
      >
        {typeof heading === "string" ? (
          <Typography
            className="less-floating"
            align="center"
            // fontWeight={"bold"}
            fontSize={headingSize}
            fontFamily={'"Luckiest Guy", cursive'}
          >
            {heading}
          </Typography>
        ) : (
          heading
        )}

        {typeof children === "string" ? (
          <Typography
            align="justify"
            fontSize={paraSize}
            style={{ textAlign: "center" }}
          >
            {children}
          </Typography>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default DialogLayout;
