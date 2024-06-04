import useResponsiveFontSize from "../hooks/useResponsiveFontSize";
import { ReactNode } from "react";
import UrduText from "./urduText";

const HeadingPara = ({
  heading,
  para,
}: {
  heading: string | ReactNode;
  para: string | ReactNode;
}) => {
  return (
    <div style={{ marginBottom: 50 }}>
      {typeof heading === "string" ? <ParaHeading head={heading} /> : heading}

      {typeof para === "string" ? <ParaText para={para} /> : para}
    </div>
  );
};

export const ParaText = ({ para }: { para: string }) => {
  const [paraSize] = useResponsiveFontSize(30, 65);
  return (
    <UrduText
      style={{
        fontSize: paraSize,
      }}
    >
      {para}
    </UrduText>
  );
};

export const ParaHeading = ({ head }: { head: string | ReactNode }) => {
  const [paraSize] = useResponsiveFontSize(30, 65);
  return (
    <UrduText
      style={{
        fontSize: paraSize + 4,
        marginBottom: 15,
        fontWeight: 700,
      }}
    >
      {head}
    </UrduText>
  );
};

export default HeadingPara;
