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
      </DialogLayout>
    </Dialog>
  );
};

export default LeftDialog;
