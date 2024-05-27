import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";
import DialogLayout from "./layout";
import RoadmapTimeline from "../components/roadmapTimeline";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const RightDialog = ({
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
    setOpen("right", false);
  };
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{ sx: { bgcolor: "#ffc0a4" } }}
    >
      <DialogLayout heading="ROADMAP" handleClose={handleClose}>
        <RoadmapTimeline />
      </DialogLayout>
    </Dialog>
  );
};

export default RightDialog;
