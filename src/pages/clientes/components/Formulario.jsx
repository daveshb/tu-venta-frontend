import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Formulario({
  select,
  handleSubmit,
  handleSubmit2,
  form,
}) {

    const objectFull ={
    documentNumber: form ? " " : select.documentNumber,
    documentType: form ? " " :select.documentType,
    email: form ? " " : select.email,
    fullName: form ? " " :select.fullName,
    id: form ? " " :select.id,
    phone: form ? " " :select.phone,
    }
  const [data, setData] = React.useState(objectFull);

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        name="documentNumber"
        value={data.documentNumber}
        onChange={(event) =>
          setData({ ...data, documentNumber: event.target.value })
        }
        id="outlined-basic"
        label="Numero de documento"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        name="documentType"
        value={data.documentType}
        onChange={(event) =>
          setData({ ...data, documentType: event.target.value })
        }
        id="outlined-basic"
        label="Tipo de documento"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        name="email"
        value={data.email}
        onChange={(event) => setData({ ...data, email: event.target.value })}
        id="outlined-basic"
        label="correo electrónico"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        name="fullName"
        value={data.fullName}
        onChange={(event) => setData({ ...data, fullName: event.target.value })}
        id="outlined-basic"
        label="Nombre"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        name="phone"
        value={data.phone}
        onChange={(event) => setData({ ...data, phone: event.target.value })}
        id="outlined-basic"
        label="Telefono"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button
        variant="contained"
        onClick={() => (form ? handleSubmit(data) : handleSubmit2(data))}
      >
        {form ? "Agregar" : "Actualizar"}
      </Button>
    </Box>
  );
}
