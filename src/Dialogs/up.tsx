import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";
import DialogLayout from "./layout";
import sleepaid from "../assets/images/sleepaid.png";
import academicStress from "../assets/images/academicStress.jpg";
import ImageCard from "../components/imageCard";

const studentCategories = [
  { name: "Academic Stress", image: academicStress },
  { name: "Sleep Aid", image: sleepaid },
];

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UpDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (
    direction: "top" | "left" | "right" | "bottom",
    state: boolean
  ) => void;
}) => {
  const handleClose = () => {
    setOpen("top", false);
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{ sx: { bgcolor: "#151111" } }}
    >
      <DialogLayout heading="Student Life" handleClose={handleClose}>
        {studentCategories.map((category) => (
          <ImageCard
            heading={category.name}
            image={category.image}
            onClick={() => {}}
          />
        ))}
      </DialogLayout>
    </Dialog>
  );
};

export default UpDialog;
