import { Dialog } from "@headlessui/react";
import React from "react";

const SuperModal = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setOpenModal(true)}>Open</button>
      </div>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}></Dialog>
    </div>
  );
};

export default SuperModal;
