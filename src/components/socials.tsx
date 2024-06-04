import whatsapp from "../assets/images/whatsapp.png";
import UrduText from "./urduText";

const Socials = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "2rem",
        right: "2rem",
      }}
    >
      <UrduText fontSize={13}>کسی ماہرے نفسیات سے بات کرنا چاہتے ہیں؟</UrduText>
      <div style={{ marginTop: 10 }}>
        <a
          href={"https://wa.me/923343606193"}
          target="blank"
          className="cursor-pointer"
        >
          <img
            src={whatsapp}
            className="peach-on-hover"
            alt="whatsapp"
            style={{
              width: "8vw",
              maxWidth: "2.5rem",
              cursor: "pointer",
            }}
          />
        </a>
      </div>
      {/* <a
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
      </a> */}
    </div>
  );
};

export default Socials;
