import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import FormularioProductos from '../pages/productos/components/Formulario';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 800,
  bgcolor: 'background.paper',
  p: 2,
  px: 4,
  pb: 3,
};

export default function ModalUnstyledDemo({open, setOpen, tipoFormulario, handleSubmit}) {
  const mostrarFormulario = () => {
    switch(tipoFormulario){
      case "productos":
        return <FormularioProductos handleSubmit={handleSubmit} />
      default:
      break;
    }
  }
  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={()=>setOpen(false)}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          {
            mostrarFormulario()
          }
        </Box>
      </StyledModal>
    </div>
  );
}
