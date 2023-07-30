import { Dialog } from "@headlessui/react";
import React from "react";

const SuperModal = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div>
      <div>
        <button className="cursor-pointer" onClick={() => setOpenModal(true)}>
          Open
        </button>
      </div>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex items-center justify-center fixed left-0 top-0 right-0 bottom-0 w-full bg-black/75 h-auto">
          <Dialog.Panel
            className={
              "flex flex-col  shadow-gray-400 opacity-100 shadow-lg rounded-lg items-center justify-center w-[300px] h-[300px] bg-gray-200"
            }
          >
            <Dialog.Title className={"text-orange-500 text-lg font-bold"}>
              Modal form
            </Dialog.Title>
            <div>Text</div>
            <button
              className="cursor-pointer"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default SuperModal;
