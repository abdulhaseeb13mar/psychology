import useResponsiveFontSize from "../hooks/useResponsiveFontSize";
import UrduText from "./urduText";

const Bullets = ({
  bullets,
}: {
  bullets: { head?: string; text: string }[];
}) => {
  const [paraSize] = useResponsiveFontSize(30, 65);
  return (
    <div>
      <ul>
        {bullets.map((singleBullet) => (
          <li className="marker" style={{ color: "#ededed", marginBottom: 20 }}>
            <UrduText
              style={{
                fontSize: paraSize,
              }}
            >
              {singleBullet.head && (
                <strong
                  style={{
                    fontSize: paraSize + 2,
                    fontFamily: "Noto Nastaliq Urdu",
                    color: "#ededed",
                    marginLeft: "20px",
                  }}
                >
                  {singleBullet.head}
                  <span>:</span>
                </strong>
              )}
              {singleBullet.text}
            </UrduText>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bullets;
