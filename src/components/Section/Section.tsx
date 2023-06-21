import styles from "./styles.module.css";
import { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  title: string | ReactNode;
  useAlternateHeadlineFont?: boolean;
}
export const Section = ({
  title,
  useAlternateHeadlineFont,
  children,
}: SectionProps) => {
  let headlineClass = styles.sectionHeading;
  if (useAlternateHeadlineFont) {
    headlineClass += " " + styles.alternateFont;
  }

  return (
    <div className={styles.section}>
      <div className={`${styles.mosaic} mb-4`}>
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="borderBox">
                <h2 className={headlineClass}>{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  );
};
