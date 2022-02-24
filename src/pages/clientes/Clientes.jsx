import React, { useState, useEffect } from "react";
import { Modal } from '../../components';
import Table from './components/Table';
import { collection, db, getDocs, deleteDoc, doc, addDoc } from '../../network/firebase';

const Clientes = () =>{
  const [clientes, setClientes] = useState([]);
  const [open, setOpen] = useState(false);
  const clientesCollectionRef = collection(db, "terceros");
  
 

  const eliminarClientes = (clientes) => {
    clientes.map(async id =>{
      const clienteDoc = doc(db, "terceros", id);
      await deleteDoc(clienteDoc);
      obtenerClientes();
    })
  }

  const guardarClientes = async (datac) => {
    await addDoc(clientesCollectionRef, {...datac});
    setOpen(false);
    obtenerClientes();
  }

  const obtenerClientes = async () => {
    const datac = await getDocs(clientesCollectionRef);
    setClientes(datac.docs.map(doc => ({ ...doc.data(),  id: doc.id})));
    
  }

  useEffect(()=>{
    obtenerClientes();
    console.log(clientes);
  }, [])
  
  return (
    <div>
      <Table clientes={clientes} handleDelete={eliminarClientes} setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} tipoFormulario="clientes" handleSubmit={guardarClientes} />
    </div>
    
  )
}

export default Clientes;

