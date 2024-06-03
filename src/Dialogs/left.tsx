import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";
import DialogLayout from "./layout";
import useResponsiveFontSize from "../hooks/useResponsiveFontSize";
import ImageCard from "../components/imageCard";
import relation from "../assets/images/relationship.jpg";
import reselience from "../assets/images/reselience.jpg";

const adultCategories = [
  { name: "Relationship Issue", image: relation },
  { name: "Resilience", image: reselience },
];

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const LeftDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (
    direction: "top" | "left" | "right" | "bottom",
    state: boolean
  ) => void;
}) => {
  const [paraSize] = useResponsiveFontSize(30, 65);
  const handleClose = () => {
    setOpen("left", false);
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{ sx: { bgcolor: "#151111" } }}
    >
      <DialogLayout heading="Adult Life" handleClose={handleClose}>
        {adultCategories.map((category) => (
          <ImageCard
            heading={category.name}
            image={category.image}
            onClick={() => {}}
          />
        ))}
        <p style={{ color: "white", fontFamily: "noto nastaliq urdu" }}>
          ڈاکٹر کیری کول کی تحقیق سے یہ بات سامنے آئی ہے کہ رشتے میں خوشی کا سب
          سے بڑا راز، اپنے ساتھی کی توجہ حاصل کرنے کی کوششوں (مثلا ساتھ نئی ڈش
          ٹرائے کرنے کی دعوت) کی طرف "متوجہ ہونا" ہے۔ تحقیق کے مطابق، شادیशुदा
          جوڑوں میں جو چیز 65% تک اطمینان پیدا کرتی ہے وہ یہی "متوجہ ہونا" ہے۔
          {/* {
            "\u0688\u0627\u06a9\u0679\u0631\u0020\u06a9\u06cc\u0631\u06cc\u0020\u06a9\u0648\u0644\u0020\u06a9\u06cc\u0020\u062a\u062d\u0642\u06cc\u0642\u0020\u0633\u06d2\u0020\u06cc\u06c1\u0020\u0628\u0627\u062a\u0020\u0633\u0627\u0645\u0646\u06d2\u0020\u0622\u0626\u06cc\u0020\u06c1\u06d2\u0020\u06a9\u06c1\u0020\u0631\u0634\u062a\u06d2\u0020\u0645\u06cc\u06ba\u0020\u062e\u0648\u0634\u06cc\u0020\u06a9\u0627\u0020\u0633\u0628\u0020\u0633\u06d2\u0020\u0628\u0691\u0627\u0020\u0631\u0627\u0632\u060c\u0020\u0627\u067e\u0646\u06d2\u0020\u0633\u0627\u062a\u06be\u06cc\u0020\u06a9\u06cc\u0020\u062a\u0648\u062c\u06c1\u0020\u062d\u0627\u0635\u0644\u0020\u06a9\u0631\u0646\u06d2\u0020\u06a9\u06cc\u0020\u06a9\u0648\u0634\u0634\u0648\u06ba\u0020\u0028\u0645\u062b\u0644\u0627\u0020\u0633\u0627\u062a\u06be\u0020\u0646\u0626\u06cc\u0020\u0688\u0634\u0020\u0679\u0631\u0627\u0626\u06d2\u0020\u06a9\u0631\u0646\u06d2\u0020\u06a9\u06cc\u0020\u062f\u0639\u0648\u062a\u0029\u0020\u06a9\u06cc\u0020\u0637\u0631\u0641\u0020\u0022\u0645\u062a\u0648\u062c\u06c1\u0020\u06c1\u0648\u0646\u0627\u0022\u0020\u06c1\u06d2\u06d4\u0020\u062a\u062d\u0642\u06cc\u0642\u0020\u06a9\u06d2\u0020\u0645\u0637\u0627\u0628\u0642\u060c\u0020\u0634\u0627\u062f\u06cc\u0936\u0941\u0926\u093e\u0020\u062c\u0648\u0691\u0648\u06ba\u0020\u0645\u06cc\u06ba\u0020\u062c\u0648\u0020\u0686\u06cc\u0632\u0020\u0036\u0035\u0025\u0020\u062a\u06a9\u0020\u0627\u0637\u0645\u06cc\u0646\u0627\u0646\u0020\u067e\u06cc\u062f\u0627\u0020\u06a9\u0631\u062a\u06cc\u0020\u06c1\u06d2\u0020\u0648\u06c1\u0020\u06cc\u06c1\u06cc\u0020\u0022\u0645\u062a\u0648\u062c\u06c1\u0020\u06c1\u0648\u0646\u0627\u0022\u0020\u06c1\u06d2\u06d4"
          } */}
        </p>
      </DialogLayout>
    </Dialog>
  );
};

export default LeftDialog;
