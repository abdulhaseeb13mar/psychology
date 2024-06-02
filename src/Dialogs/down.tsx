import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";
import DialogLayout from "./layout";
import useResponsiveFontSize from "../hooks/useResponsiveFontSize";
import relation from "../assets/images/relationship.jpg";
import reselience from "../assets/images/reselience.jpg";
import ImageCard from "../components/imageCard";

const professionalCategories = [
  { name: "Academic Stress", image: relation },
  { name: "Sleep Aid", image: reselience },
];

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DownDialog = ({
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
    setOpen("bottom", false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{ sx: { bgcolor: "#151111" } }}
    >
      <DialogLayout heading="Professional Life" handleClose={handleClose}>
        {professionalCategories.map((category) => (
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

export default DownDialog;
