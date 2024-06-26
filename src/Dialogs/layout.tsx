import { ReactNode } from "react";
import { Typography } from "@mui/material";
import useResponsiveFontSize from "../hooks/useResponsiveFontSize";
import "../float.css";
import WestIcon from "@mui/icons-material/West";

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
        className="r-c-fe"
        style={{
          width: "100%",
          justifySelf: "flex-start",
          height: 80,
        }}
      >
        <WestIcon
          onClick={handleClose}
          sx={{
            color: "#ededed",
            fontSize: 50,
            cursor: "pointer",
          }}
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
            fontSize={headingSize}
            fontFamily={"Noto Nastaliq Urdu"}
            color={"#ededed"}
            marginBottom={10}
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
