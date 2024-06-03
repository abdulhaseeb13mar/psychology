import { Typography } from "@mui/material";
import DialogLayout from "../../layout";
import { studentCategories } from "../../../Constants/categories";
import useResponsiveFontSize from "../../../hooks/useResponsiveFontSize";

const Topic2 = ({ goback }: { goback: () => void }) => {
  const [paraSize] = useResponsiveFontSize(30, 65);
  return (
    <DialogLayout heading={studentCategories[1].name} handleClose={goback}>
      <Typography
        style={{
          fontSize: paraSize,
          textAlign: "center",
          fontFamily: "Noto Nastaliq Urdu",
          color: "#ededed",
        }}
      >
        ڈاکٹر کیری کول کی تحقیق سے یہ بات سامنے آئی ہے کہ رشتے میں خوشی کا سب سے
        بڑا راز، اپنے ساتھی کی توجہ حاصل کرنے کی کوششوں (مثلا ساتھ نئی ڈش ٹرائے
        کرنے کی دعوت) کی طرف "متوجہ ہونا" ہے۔ تحقیق کے مطابق، شادیशुदा جوڑوں میں
        جو چیز 65% تک اطمینان پیدا کرتی ہے وہ یہی "متوجہ ہونا" ہے۔
      </Typography>
    </DialogLayout>
  );
};

export default Topic2;
