import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";
import DialogLayout from "./layout";

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
      PaperProps={{ sx: { bgcolor: "#ffc0a4" } }}
    >
      <DialogLayout
        heading="CrowdSale"
        handleClose={handleClose}
        children="Join our crowdsale beginning April 21, 2024. We aim to raise $100,000 in an open sale. Owning $SHY tokens means you're part of every new launch on Satushy, with 5% of your tokens accessible immediately at the TGE and the remainder vested over 18 months."
      />
    </Dialog>
  );
};

export default UpDialog;
