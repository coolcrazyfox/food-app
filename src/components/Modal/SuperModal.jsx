import { Dialog } from "@headlessui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOpenModal } from "../../redux/store/Slices/cartSlice";

const SuperModal = ({ children, onClickYesBtn }) => {
  const isOpenModal = useSelector((state) => state.cart.openModal);
  const dispatch = useDispatch();
  const onClickOpenModal = () => {
    dispatch(setOpenModal(true));
  };
  const onClickCloseModal = () => {
    dispatch(setOpenModal(false));
  };
  // const [openModal, setOpenModal] = React.useState(false);
  return (
    <div>
      <div>
        <button className="cursor-pointer" onClick={onClickOpenModal}>
          Open
        </button>
      </div>
      <Dialog open={isOpenModal} onClose={onClickCloseModal}>
        <div className="flex items-center justify-center fixed left-0 top-0 right-0 bottom-0 w-full bg-black/75 h-auto">
          <Dialog.Panel
            className={
              "flex flex-col  shadow-gray-400 opacity-100 shadow-lg rounded-lg items-center justify-center w-[300px] h-[300px] bg-gray-200"
            }
          >
            <Dialog.Title className={"text-orange-500 text-lg font-bold"}>
              Modal form
            </Dialog.Title>
            <div>{children}</div>
            <div className="flex flex-row ">
              <button
                className="cursor-pointer mx-[5px]"
                onClick={onClickCloseModal}
              >
                Yes
              </button>
              <button
                className="cursor-pointer mx-[5px]"
                onClick={onClickCloseModal}
              >
                No
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default SuperModal;
