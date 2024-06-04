import { Typography } from "@mui/material";
import DialogLayout from "../../layout";
import { adultCategories } from "../../../Constants/categories";
import useResponsiveFontSize from "../../../hooks/useResponsiveFontSize";

const Topic2 = ({ goback }: { goback: () => void }) => {
  const [paraSize] = useResponsiveFontSize(30, 65);
  return (
    <DialogLayout heading={adultCategories[1].name} handleClose={goback}>
      <Typography
        style={{
          fontSize: paraSize,
          textAlign: "center",
          fontFamily: "Noto Nastaliq Urdu",
          color: "#ededed",
        }}
      ></Typography>
    </DialogLayout>
  );
};

export default Topic2;
