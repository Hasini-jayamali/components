import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  name: String,
  title: String,
  content:any,
  done:String,
  cancel:String
}

function Popup({name,title,content,done,cancel}:Props) {
  const [modal, setModal] = useState(false);
  const togglePopup = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={togglePopup}>{name}</Button>
      
      <Modal isOpen={modal} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>{title}</ModalHeader>
        <ModalBody>
          {content}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={togglePopup}>{done}</Button>
          <Button color="secondary" onClick={togglePopup}>{cancel}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popup;