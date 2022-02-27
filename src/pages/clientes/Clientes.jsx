import React, { useState, useEffect } from "react";
import { Modal } from '../../components';
import Table from './components/Table';
import { collection, db, getDocs, deleteDoc, doc, addDoc } from '../../network/firebase';

const Clientes = () =>{
  const [clientes, setClientes] = useState([]);

  const [open, setOpen] = useState(false);
  const clientesCollectionRef = collection(db, "terceros");
  const [get, setGet] = useState([]);
  const [filter, setFilter] = useState([]);

  const eliminarClientes = (clientes) => {
    clientes.map(async id =>{
      const clienteDoc = doc(db, "terceros", id);
      await deleteDoc(clienteDoc);
      obtenerClientes();
    })
  }

  const guardarClientes = async (data) => {
    await addDoc(clientesCollectionRef, {...data, type: "1"});
    setOpen(false);
    obtenerClientes();
  }

  const obtenerClientes = async () => {
    const datac = await getDocs(clientesCollectionRef);
    setGet(datac.docs.map(doc => ({ ...doc.data(),  id: doc.id})));
  }

  useEffect(()=>{
    obtenerClientes();
  }, []);

  useEffect(()=>{
    setFilter(get.filter(docs => docs.type === "1" ));
  },[get]);
  
  useEffect(()=>{
    setClientes(filter);
    console.log("Clientes*",clientes);
  },[filter]);







  return (
    <div>
      <Table clientes={clientes} handleDelete={eliminarClientes} setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} tipoFormulario="clientes" handleSubmit={guardarClientes} />
    </div>
    
  )
}

export default Clientes;

