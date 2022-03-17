import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Formulario({select, handleSubmit,handleSubmit2, form}) {

  const objectEmpty ={
    documentNumber: " ",
    documentType:  " ",
    email:  " ",
    fullName:  " ",
    id:  " ",
    phone:  " "
  }

  const objectEdit ={
    documentNumber: select.documentNumber,
    documentType: select.documentType,
    email:  select.email,
    fullName:  select.fullName,
    id:  select.id,
    phone:  select.phone
  }  

  console.log(objectEdit);

  const object = ()=>(form ? objectEmpty : objectEdit);

  const [data, setData] = React.useState(
    object

  )
  console.log(form);

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
      label="Numero de documento" 
      variant="outlined" 
      InputLabelProps={{
            shrink: true,
          }} />

      <TextField 
      name="documentType" 
      value={data.documentType} 
      onChange={(event)=>setData({...data, documentType: event.target.value })}  
      id="outlined-basic" label="Tipo de documento" 
      variant="outlined" InputLabelProps={{
            shrink: true,
          }} />

      <TextField 
      name="email" 
      value={data.email} 
      onChange={(event)=>setData({...data, email: event.target.value })} 
      id="outlined-basic" 
      label="correo electrónico" 
      variant="outlined" InputLabelProps={{
            shrink: true,
          }} />

       <TextField 
       name="fullName" 
       value={data.fullName} 
       onChange={(event)=>setData({...data, fullName: event.target.value })} 
       id="outlined-basic" label="Nombre" variant="outlined" InputLabelProps={{
            shrink: true,
          }} />

        <TextField 
        name="phone" 
        value={data.phone} 
        onChange={(event)=>setData({...data, phone: event.target.value })} 
        id="outlined-basic" label="Telefono" variant="outlined" InputLabelProps={{
            shrink: true,
          }} />
        
      <Button variant="contained" onClick={()=>
       form? handleSubmit(data) : handleSubmit2(data)
        }>{form? "Agregar":"Actualizar"}</Button>
    </Box>
  );
}
