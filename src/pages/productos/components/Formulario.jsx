import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Formulario({handleSubmit}) {
  const [data, setData] = React.useState({
    codigo: "",
    nombre: "",
    fechaVencimiento: "",
    lote: "",
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
      name="codigo" 
      value={data.codigo} 
      onChange={(event)=>setData({...data, codigo: event.target.value })} 
      id="outlined-basic" 
      label="Código" 
      InputLabelProps={{
            shrink: true,
          }} />
      <TextField name="nombre" value={data.nombre} onChange={(event)=>setData({...data, nombre: event.target.value })} id="outlined-basic" label="Nombre" variant="outlined" InputLabelProps={{
            shrink: true,
          }} />
      <TextField name="fechaVencimiento" value={data.fechaVencimiento} onChange={(event)=>setData({...data, fechaVencimiento: event.target.value })}  id="outlined-basic" label="Fecha Vencimiento" variant="outlined" InputLabelProps={{
            shrink: true,
          }} />
      <TextField name="lote" value={data.lote} onChange={(event)=>setData({...data, lote: event.target.value })} id="outlined-basic" label="Lote" variant="outlined" InputLabelProps={{
            shrink: true,
          }} />
      <Button variant="contained" onClick={()=>handleSubmit(data)}>Agregar</Button>
    </Box>
  );
}
