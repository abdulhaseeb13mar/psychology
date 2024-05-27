import { Dialog, Slide, Typography } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef } from "react";
import DialogLayout from "./layout";
import useResponsiveFontSize from "../hooks/useResponsiveFontSize";

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
      PaperProps={{ sx: { bgcolor: "#ffc0a4" } }}
    >
      <DialogLayout heading="ABOUT" handleClose={handleClose}>
        <Typography
          style={{
            fontSize: paraSize,
            textAlign: "center",
            fontFamily: '"Josefin Sans", sans-serif',
          }}
        >
          Meet Satushy, the cheekiest Rune yet in the Bitcoin universe! Launched
          to honor the legendary Satoshi Nakamoto and to celebrate the
          hardworking butts of Bitcoiners who have been bustling since Bitcoin's
          inception in ‘09, Satushy is here to add a little wiggle and a lot of
          giggles to your portfolios. Satushy is a tribute to the spirit of
          innovation and the countless hours we've all spent sitting on our
          tushies, navigating the exciting world of Bitcoin. This Rune comes
          with a playful twist, merging the respect for our anonymous Bitcoin
          creator with a nod to the seat of all our hard work—our butts! It's
          designed for those who appreciate a good pun and are ready to "back" a
          token that stands out in the crypto crowd. It’s cheeky, it’s charming,
          and yes, it’s a little bit nutty.
        </Typography>
        <Typography
          style={{
            fontSize: paraSize,
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: '"Josefin Sans", sans-serif',
          }}
        >
          Ready to kick some ass?
        </Typography>
      </DialogLayout>
    </Dialog>
  );
};

export default LeftDialog;
