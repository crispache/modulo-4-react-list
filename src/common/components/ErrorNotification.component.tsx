import React from "react";
import { Alert, Snackbar } from "@mui/material";

interface Props {
  isOpen: boolean;
  errorMessage?: string;
  handleClose: () => void;
}

const DEFAULT_ERROR_MESSAGE = 'Se ha producido un error. Por favor, inténtelo de nuevo más tarde. Gracias.';

export const ErrorNotification: React.FC<Props> = (props) => {
  const { isOpen, handleClose, errorMessage } = props;
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        { errorMessage || DEFAULT_ERROR_MESSAGE }
      </Alert>
    </Snackbar>
  );
};
