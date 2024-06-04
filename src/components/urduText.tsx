import { Typography, TypographyProps } from "@mui/material";

const UrduText = (props: TypographyProps) => {
  return (
    <Typography
      fontFamily={"Noto Nastaliq Urdu"}
      color={"#ededed"}
      lineHeight={2}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default UrduText;
