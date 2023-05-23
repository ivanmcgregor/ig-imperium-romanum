import Styles from "./styles.module.css";

interface VideoProps {
  title: string;
  url: string;
}

export const YouTube = ({ title, url }: VideoProps) => {
  return (
    <>
      <h4>{title}</h4>
      <iframe
        className={Styles.player}
        width="100%"
        height="auto"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </>
  );
};
