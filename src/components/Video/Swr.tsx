import Styles from "./styles.module.css";

export const Swr = () => {
  return (
    <iframe
      className={Styles.player}
      src="https://www.swrfernsehen.de/~embed/landesschau-rp/zwischen-roemerschlacht-und-baugrube-100.html"
      width="100%"
      height="auto"
      frameBorder="0"
      // @ts-ignore
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
    ></iframe>
  );
};
