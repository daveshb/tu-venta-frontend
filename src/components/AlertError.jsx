import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AlertError({open, setOpen}) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} onClose={()=>setOpen(false)} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
        <Alert severity="error" sx={{ width: '100%' }}>
          No se ha iniciado la sesión
        </Alert>
      </Snackbar>
    </Stack>
  );
}
