import { Box, BoxProps, Modal, SxProps, Theme } from "@mui/material";
import "./CustomModal.css";
import { Dispatch, ReactNode, SetStateAction, Children } from "react";

const style: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
  borderRadius: "30px",
};

interface CustomModalProps extends BoxProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  sx: SxProps<Theme>;
}
function CustomModal({
  isOpen,
  setIsOpen,
  children,
  sx,
  ...rest
}: CustomModalProps): JSX.Element {
  const closeModal = () => {
    setIsOpen(false);
  };

  const childrenArray = Children.toArray(children);
  const firstChild = childrenArray[0];
  const restOfChildren = childrenArray.slice(1);

  const sxProps = { ...style, ...sx };

  return (
    <>
      {firstChild}
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...sxProps }} {...rest}>
          {restOfChildren}
        </Box>
      </Modal>
    </>
  );
}

export default CustomModal;
