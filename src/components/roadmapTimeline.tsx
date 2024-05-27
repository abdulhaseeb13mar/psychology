import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import useResponsiveFontSize from "../hooks/useResponsiveFontSize";

import "../zoom.css";

const RoadmapTimeline = () => {
  const [paraSize] = useResponsiveFontSize(30, 65);
  return (
    <Timeline position="right" sx={{ rowGap: 0 }}>
      <TimelineItem sx={{ minHeight: "13vh" }}>
        <TimelineOppositeContent
          fontSize={paraSize}
          fontFamily={'"Josefin Sans", sans-serif'}
        >
          20 April
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            className="zoom-in-out"
            sx={{ bgcolor: "#9dec60", padding: "10px" }}
          />
          <TimelineConnector sx={{ bgcolor: "#ff876e" }} />
        </TimelineSeparator>
        <TimelineContent fontSize={paraSize}>
          <span
            style={{
              fontFamily: '"Luckiest Guy", cursive',
              letterSpacing: 1,
            }}
          >
            RUNE MINTING STARTS
          </span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ minHeight: "13vh" }}>
        <TimelineOppositeContent
          fontSize={paraSize}
          fontFamily={'"Josefin Sans", sans-serif'}
        >
          26 April
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#ff876e" }} />
          <TimelineConnector sx={{ bgcolor: "#ff876e" }} />
        </TimelineSeparator>
        <TimelineContent fontSize={paraSize}>
          <span
            style={{ fontFamily: '"Luckiest Guy", cursive', letterSpacing: 1 }}
          >
            RUNE MINTING ENDS
          </span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ minHeight: "13vh" }}>
        <TimelineOppositeContent
          fontSize={paraSize}
          fontFamily={'"Josefin Sans", sans-serif'}
        >
          30 April
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#ff876e" }} />
          <TimelineConnector sx={{ bgcolor: "#ff876e" }} />
        </TimelineSeparator>
        <TimelineContent fontSize={paraSize}>
          <span
            style={{ fontFamily: '"Luckiest Guy", cursive', letterSpacing: 1 }}
          >
            ORDINAL NFTs
          </span>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default RoadmapTimeline;
