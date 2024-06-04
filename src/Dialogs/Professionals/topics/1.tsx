import { Typography } from "@mui/material";
import DialogLayout from "../../layout";
import { professionalCategories } from "../../../Constants/categories";
import useResponsiveFontSize from "../../../hooks/useResponsiveFontSize";

const Topic1 = ({ goback }: { goback: () => void }) => {
  const [paraSize] = useResponsiveFontSize(30, 65);
  return (
    <DialogLayout heading={professionalCategories[0].name} handleClose={goback}>
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

export default Topic1;
