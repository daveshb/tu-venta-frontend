import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Formulario({handleSubmit, proveedor, tipoForm}) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    documentNumber:tipoForm ? proveedor.documentNumber : "",
    documentType:tipoForm ? proveedor.documentType : "",
    email:tipoForm ? proveedor.email : "",
    fullName:tipoForm ? proveedor.fullName : "",
    phone:tipoForm ? proveedor.phone : "",
    // buttonName :tipoForm ? "Guardar" : "Agregar",
    // isUpdate :tipoForm ? true : false,
    // ...proveedor
  })

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
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

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">DocumentType</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          InputLabelProps={{
            shrink: true}}
          onClose={handleClose}
          onOpen={handleOpen}
          value={data.documentType}
          label="Document Type"
          onChange={(event)=>setData({...data, documentType: event.target.value })}
          
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={"CC"}>CC</MenuItem>
          <MenuItem value={"NN"}>NN</MenuItem>
        </Select>
      </FormControl>
  
        <TextField name="email" value={data.email} onChange={(event)=>setData({...data, email: event.target.value })} id="outlined-basic" label="Email" variant="outlined" InputLabelProps={{
              shrink: true,
        }} />
        <TextField name="fullName" value={data.fullName} onChange={(event)=>setData({...data, fullName: event.target.value })} id="outlined-basic" label="Full Name" variant="outlined" InputLabelProps={{
              shrink: true,
        }} />
        <TextField name="phone" value={data.phone} onChange={(event)=>setData({...data, phone: event.target.value })} id="outlined-basic" label="Phone" variant="outlined" InputLabelProps={{
              shrink: true,
            
          }} />
      <Button variant="contained" id="boton" onClick={()=>handleSubmit(data)}>{tipoForm ? "Actualizar" : "Agregar"}</Button>
    </Box>
  );
}