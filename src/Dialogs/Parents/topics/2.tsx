import DialogLayout from "../../layout";
import { parentingCategories } from "../../../Constants/categories";

const Topic2 = ({ goback }: { goback: () => void }) => {
  return (
    <DialogLayout heading={parentingCategories[1].name} handleClose={goback}>
      <div />
    </DialogLayout>
  );
};

export default Topic2;
