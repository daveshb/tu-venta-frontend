import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ data, setData }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo Documento</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.documentType}
          label="data.documentType"
          onChange={(event) =>
            setData({ ...data, documentType: event.target.value })
          }
        >
          <MenuItem value={"CC"}>CC</MenuItem>
          <MenuItem value={"NN"}>NN</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
