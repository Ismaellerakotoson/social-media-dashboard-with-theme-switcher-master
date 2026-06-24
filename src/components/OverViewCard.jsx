import dataOverView from "../data/dataOverView";
import iconDown from "../assets/images/icon-down.svg";
import iconUp from "../assets/images/icon-up.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconYoutube from "../assets/images/icon-youtube.svg";

const platformConfig = {
  Facebook: { icon: iconFacebook },
  Twitter: { icon: iconTwitter },
  Instagram: { icon: iconInstagram },
  YouTube: { icon: iconYoutube },
};

function OverViewCard() {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        Overview - Today
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {" "}
        {dataOverView.map((data, index) => {
          const config = platformConfig[data.plateform];
          const formatted =
            data.amount >= 10000
              ? `${Math.floor(data.amount / 1000)}k`
              : data.amount.toLocaleString();

          return (
            <div
              key={index}
              className="rounded-lg p-6 bg-light-card dark:bg-dark-card
                cursor-pointer hover:brightness-90 transition"
            >
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm font-bold text-light-text dark:text-dark-text">
                  {data.title}
                </p>
                <img
                  src={config.icon}
                  alt={data.plateform}
                  className="w-5 h-5"
                />
              </div>

              <div className="flex justify-between items-end">
                <p className="text-3xl font-bold text-light-title dark:text-white">
                  {formatted}
                </p>
                <div
                  className={`flex items-center gap-1 text-sm font-bold
                  ${data.variation < 0 ? "text-red-500" : "text-green-500"}`}
                >
                  <img
                    src={data.variation < 0 ? iconDown : iconUp}
                    alt={data.variation < 0 ? "down" : "up"}
                    className="w-2"
                  />
                  <span>{Math.abs(data.variation)}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OverViewCard;
