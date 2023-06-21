import { useEvents } from "./useEvents";
import styles from "./Preview.module.css";

export const EventPreview = () => {
  const { previewEvents } = useEvents();

  return (
    <div className={`${styles.imgTeaser} mb-4`}>
      <div className="row">
        {previewEvents.map((e) => (
          <div className={`col-md-4 ${styles.spacer}`} key={e.key}>
            <div className={`borderBox text-center ${styles.borderBox}`}>
              {e.to ? (
                <span className="text-primary">
                  {e.from} - {e.to}
                </span>
              ) : (
                <span className="text-primary">{e.from}</span>
              )}
              <br />
              <span>{e.title}</span>
            </div>
          </div>
        ))}
        {previewEvents.length === 0 && (
          <div className={`col-md-6 offset-md-3 ${styles.spacer}`}>
            <div className={`borderBox text-center ${styles.borderBox}`}>
              Aktuell gibt es keine geplanten Termine.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
