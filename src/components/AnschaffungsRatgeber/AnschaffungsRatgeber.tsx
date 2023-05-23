import { AnschaffungsElement } from "@/components/AnschaffungsRatgeber/AnschaffungsElement";
import { StaticImageData } from "next/image";

interface AnschaffungsRatgeberProps {
  intro: string;
  elements: Array<{ imgSrc: StaticImageData; title: string; text: string }>;
}

export const AnschaffungsRatgeber = ({
  intro,
  elements,
}: AnschaffungsRatgeberProps) => (
  <div className="container">
    <div className="row">
      <div className="col col-md-10 offset-md-1 mb-5">{intro}</div>
    </div>
    <div className="row">
      {elements.map((element) => (
        <div className="col col-sm-6 col-md-3 mb-4" key={element.title}>
          <AnschaffungsElement {...element} />
        </div>
      ))}
    </div>
  </div>
);
