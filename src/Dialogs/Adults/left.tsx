import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { ReactElement, Ref, forwardRef, useState } from "react";
import DialogLayout from "../layout";
import ImageCard from "../../components/imageCard";
import Topic1 from "./topics/1";
import Topic2 from "./topics/2";
import { adultCategories } from "../../Constants/categories";

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
  const [currentTopic, setCurrentTopic] = useState(0);
  const handleClose = () => {
    setOpen("left", false);
  };
  const goback = () => setCurrentTopic(0);
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{ sx: { bgcolor: "#151111" } }}
    >
      {currentTopic === 0 ? (
        <DialogLayout heading="18+" handleClose={handleClose}>
          {adultCategories.map((category) => (
            <ImageCard
              heading={category.name}
              image={category.image}
              onClick={() => setCurrentTopic(category.id)}
            />
          ))}
        </DialogLayout>
      ) : currentTopic === 1 ? (
        <Topic1 goback={goback} />
      ) : currentTopic === 2 ? (
        <Topic2 goback={goback} />
      ) : (
        <></>
      )}
    </Dialog>
  );
};

export default LeftDialog;
