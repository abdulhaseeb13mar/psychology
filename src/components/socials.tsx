import xIcon from "../assets/x.svg";
import teleIcon from "../assets/telegram.svg";

const Socials = () => {
  return (
    <div
      className="r-c-c"
      style={{
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
      }}
    >
      <a
        href={"https://x.com/satushybase"}
        target="blank"
        className="cursor-pointer"
      >
        <img
          src={xIcon}
          className="peach-on-hover"
          alt="xIcon"
          style={{
            width: "8vw",
            maxWidth: "2.5rem",
            cursor: "pointer",
          }}
        />
      </a>
      <a
        href={"https://t.me/satushyrunes"}
        target="blank"
        className="cursor-pointer"
      >
        <img
          src={teleIcon}
          alt="xIcon"
          className="peach-on-hover"
          style={{
            width: "8vw",
            maxWidth: "2.5rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        />
      </a>
    </div>
  );
};

export default Socials;
