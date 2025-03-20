import { useRef, useState, useMemo, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  // p: 4,
};

export default function BuyAKitModal({ visible, onClose }) {
  //   const [images, setImages] = useState(null);

  return (
    <div>
      <Modal open={visible} onClose={onClose} closeAfterTransition>
        <Fade in={visible}>
          <Box
            className="bg-white w-4/5 max-w-3xl rounded-xl max-h-[80vh] flex py-8  flex-col overflow-visible items-center overflow-y-scroll"
            sx={style}
          ></Box>
        </Fade>
      </Modal>
    </div>
  );
}
