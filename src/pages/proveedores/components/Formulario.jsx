import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Formulario({handleSubmit, proveedor}) {
  const [data, setData] = React.useState({
    documentNumber: proveedor != null ? proveedor.documentNumber : "",
    documentType: proveedor != null ? proveedor.documentType : "",
    email: proveedor != null ? proveedor.email : "",
    fullName: proveedor != null ? proveedor.fullName : "",
    phone: proveedor != null ? proveedor.phone : "",
    buttonName : proveedor != null ? "Guardar" : "Agregar",
    isUpdate : proveedor != null ? true : false,
    ...proveedor
  })
  return (
    <Box
      component="form"          
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      name="documentNumber" 
      value={data.documentNumber} 
      onChange={(event)=>setData({...data, documentNumber: event.target.value })} 
      id="outlined-basic" 
      label="Document Number" 
      variant="outlined"
      InputLabelProps={{
            shrink: true,
          }} />
      <TextField name="documentType" value={data.documentType} onChange={(event)=>setData({...data, documentType: event.target.value })}  id="outlined-basic" label="Document Type" variant="outlined" InputLabelProps={{
            shrink: true,
        }} />
        <TextField name="email" value={data.email} onChange={(event)=>setData({...data, email: event.target.value })} id="outlined-basic" label="Email" variant="outlined" InputLabelProps={{
              shrink: true,
        }} />
        <TextField name="fullName" value={data.fullName} onChange={(event)=>setData({...data, fullName: event.target.value })} id="outlined-basic" label="Full Name" variant="outlined" InputLabelProps={{
              shrink: true,
        }} />
        <TextField name="phone" value={data.phone} onChange={(event)=>setData({...data, phone: event.target.value })} id="outlined-basic" label="Phone" variant="outlined" InputLabelProps={{
              shrink: true,
            
          }} />
      <Button variant="contained" id="boton" onClick={()=>handleSubmit(data)}>{data.buttonName}</Button>
    </Box>
  );
}