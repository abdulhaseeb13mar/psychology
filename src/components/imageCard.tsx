import { Typography } from "@mui/material";

const ImageCard = ({
  heading,
  image,
  onClick,
}: {
  heading: string;
  image: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="c-fs-fe"
      style={{
        position: "relative",
        color: "#ededed",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: 150,
        zIndex: 10,
        borderRadius: "10px",
        marginBottom: 20,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div
        style={{
          position: "absolute",
          height: 150,
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.6446953781512605) 0%, rgba(0,212,255,0.03405112044817926) 100%)",
          zIndex: 20,
          borderRadius: "10px",
        }}
      />
      <Typography
        sx={{
          zIndex: 30,
          marginLeft: "4%",
          marginBottom: "2%",
          fontWeight: "bold",
          fontSize: "1.4rem",
        }}
      >
        {heading}
      </Typography>
    </div>
  );
};

export default ImageCard;
