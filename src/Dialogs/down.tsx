import { Dialog, Slide } from "@mui/material";
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
  const data = [
    {
      type: "Liquidity",
      percentage: "55.00%",
      tokenQty: "1,100,000,000",
      tgePercentage: "100%",
      tge: "1,100,000,000",
      vestingMonths: "0",
      vesting: "100% unlocked at TGE",
    },
    {
      type: "Crowdsale 1",
      percentage: "15.00%",
      tokenQty: "300,000,000",
      tgePercentage: "5%",
      tge: "15,000,000",
      vestingMonths: "18",
      vesting: "18 months linear",
    },
    {
      type: "Crowdsale 2",
      percentage: "10.00%",
      tokenQty: "200,000,000",
      tgePercentage: "5%",
      tge: "10,000,000",
      vestingMonths: "18",
      vesting: "18 months linear",
    },
    {
      type: "KOLs",
      percentage: "10.00%",
      tokenQty: "200,000,000",
      tgePercentage: "5%",
      tge: "10,000,000",
      vestingMonths: "18",
      vesting: "18 months linear",
    },
    {
      type: "Team",
      percentage: "10.00%",
      tokenQty: "200,000,000",
      tgePercentage: "5%",
      tge: "10,000,000",
      vestingMonths: "18",
      vesting: "18 months linear",
    },
  ];

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{ sx: { bgcolor: "#ffc0a4" } }}
    >
      <DialogLayout heading="TOKENOMICS" handleClose={handleClose}>
        <ul className="tokenomics-bullets" style={{ fontSize: paraSize }}>
          <li>
            🍑 <span>TICKER - </span>
            EAT•SLEEP•TUSHY
          </li>
          <li>
            🍑 <span>MAX SUPPLY - </span>
            840,000
          </li>
          <li>
            🍑 <span>SYMBOL - </span>ω
          </li>
          <li>
            🍑 <span>LIMIT PER MINT - </span>
            1,000
          </li>
          <li>
            🍑 <span>COMMUNITY MINTING - </span>
            95% - 798,000
          </li>
          <li>
            🍑 <span>PRE-MINT - </span> 5% - 42,000
          </li>
          <li>
            🍑 <span>DECIMALS - </span> 0
          </li>
          <li>
            🍑 <span>STARTING BLOCK NUMBER - </span>
            840,000
          </li>
          <li>
            🍑 <span>ENDING BLOCK NUMBER - </span>
            841,008
          </li>
        </ul>
      </DialogLayout>
    </Dialog>
  );
};

export default DownDialog;
