import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Context } from "../store/appContext";


function ModalMessage(props) {
    const { store, actions } = useContext(Context);
    const [modalLogin, setModalLogin] = React.useState(false);
    const handleCloseModalLogin = () => setModalLogin(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };
    return ( <Modal
        open={store.modalLogin}
        onClose={actions.handleCloseModalLogin(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }} align="center">
            Te logeaste correctamente.
          </Typography>
        </Box>
      </Modal> );
}

export default ModalMessage;