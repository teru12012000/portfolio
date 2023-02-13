import { Card, Modal } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useState,ReactNode } from "react";
import { style } from "../data/Style";
type Props={
  selectId:string|null;
  editModalIsOpen:boolean;
  setSelectId:Dispatch<SetStateAction<string|null>>;
  setEditModalIsOpen:Dispatch<SetStateAction<boolean>>;
  children:ReactNode;
}

const Animate:FC<Props> = ({
  selectId,
  editModalIsOpen,
  setSelectId,
  setEditModalIsOpen,
  children,
}) => {
  const closemodal=()=>{
    setEditModalIsOpen(false);
    setSelectId(null);
  }
  return (
    <>
      <AnimatePresence>
        {selectId && (
            <motion.div layoutId={selectId}>
              <Modal
                open={editModalIsOpen}
                onClose={closemodal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card sx={style}>
                  {children}
                </Card>
              </Modal>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Animate;