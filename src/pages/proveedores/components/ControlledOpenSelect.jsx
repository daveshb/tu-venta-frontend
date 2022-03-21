// import * as React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Button from '@mui/material/Button';

// export default function ControlledOpenSelect() {
//   const [select, setSelect] = React.useState('');
//   const [open, setOpen] = React.useState(false);

//   const handleChange = (event) => {
//     setSelect(event.target.value);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <div>
//       <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
//         Open the select
//       </Button>
//       <FormControl sx={{ m: 1, minWidth: 120 }}>
//         <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-controlled-open-select-label"
//           id="demo-controlled-open-select"
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           value={select}
//           label="Document Type"
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>CC</MenuItem>
//           <MenuItem value={20}>NN</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }