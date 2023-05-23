import Image, { StaticImageData } from "next/image";
import Styles from "./styles.module.css";
import Modal from "react-bootstrap/Modal";
import { AnleitungsBild } from "@/components/AnleitungsBild/AnleitungsBild";
import { useState } from "react";
import { LinkButton } from "@/components/Button/LinkButton";
import { Button } from "@/components/Button/Button";

interface AnschaffungsElementProps {
  imgSrc: StaticImageData;
  title: string;
  text: string;
}
export const AnschaffungsElement = ({
  imgSrc,
  text,
  title,
}: AnschaffungsElementProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={Styles.element} onClick={handleShow}>
        <AnleitungsBild src={imgSrc} alt={title} />

        <div className="d-block text-center">{title}</div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <Button onClick={handleClose} className={Styles.closeButton}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <AnleitungsBild src={imgSrc} alt={title} />
          <p className="mt-4">{text}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};
