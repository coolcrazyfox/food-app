import { Dialog } from "@headlessui/react";
import React from "react";

const SuperModal = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setOpenModal(true)}>Open</button>
      </div>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <div className="fixed left-0 top-0 right-0 bottom-0 w-[300px] bg-slate-500 h-auto">
          <Dialog.Panel className={"w-[270px] h-auto bg-green-300"}>
            <Dialog.Title className={"text-white"}>Modal form</Dialog.Title>
            <div>Text</div>
            <button onClick={() => setOpenModal(false)}>X</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default SuperModal;
