import React, { useState, useEffect } from "react";
import { Modal } from '../../components';
import Table from './components/Table';
import { collection, db, getDocs, deleteDoc, doc, addDoc } from '../../network/firebase';

const Productos = () =>{
  const [productos, setProductos] = useState([]);
  const [open, setOpen] = useState(false);
  const productosCollectionRef = collection(db, "products");

  const eliminarProducto = (productos) => {
    productos.map(async id =>{
      const productoDoc = doc(db, "products", id);
      await deleteDoc(productoDoc);
      obtenerProductos();
    })
  }

  const guardarProducto = async (data) => {
    await addDoc(productosCollectionRef, {...data, fechaVencimiento: 1645583947, estado: true});
    setOpen(false);
    obtenerProductos();
  }

  const obtenerProductos = async () => {
    const data = await getDocs(productosCollectionRef);
    setProductos(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(()=>{
    obtenerProductos();
  }, [])

  return (
    <div>
      <Table productos={productos} handleDelete={eliminarProducto} setOpen={setOpen} />
      <Modal open={open} setOpen={setOpen} tipoFormulario="productos" handleSubmit={guardarProducto} />
    </div>
    
  )
}

export default Productos;