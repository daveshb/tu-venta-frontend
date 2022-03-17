import React, { useState, useEffect } from "react";
import { Modal } from "../../components";
import Table from "./components/Table";
import {
  collection,
  db,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  updateDoc,
} from "../../network/firebase";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [id, setId] = useState([]);
  const [open, setOpen] = useState(false);
  const clientesCollectionRef = collection(db, "terceros");
  const [get, setGet] = useState([]);
  const [filter, setFilter] = useState([]);
  const [select, setSelect] = useState([]);
  const [tipoForm, setTipoForm] = useState("clientes");
  const [form, setForm] = useState(true);

  const eliminarClientes = (clientes) => {
    clientes.map(async (id) => {
      const clienteDoc = doc(db, "terceros", id);
      await deleteDoc(clienteDoc);
      obtenerClientes();
    });
  };

  const actualizaCliente = async (data) => {
    const clienteUp = doc(db, "terceros", `${id}`);
    await updateDoc(clienteUp, { ...data });
    setOpen(false);
    setForm(true);
    obtenerClientes();
    setId([]);
  };

  const guardarClientes = async (data) => {
    await addDoc(clientesCollectionRef, { ...data, type: "1" });
    setOpen(false);
    obtenerClientes();
  };

  const obtenerClientes = async () => {
    const datac = await getDocs(clientesCollectionRef);
    setGet(datac.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setTipoForm("clientes");
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  useEffect(() => {
    setFilter(get.filter((docs) => docs.type === "1"));
  }, [get]);

  useEffect(() => {
    setClientes(filter);
  }, [filter]);

  const filtroId = clientes.filter((docs) => docs.id == id);

  useEffect(() => {
    setSelect(filtroId[0]);
  }, [id]);

  return (
    <div>
      <Table
        clientes={clientes}
        handleDelete={eliminarClientes}
        setOpen={setOpen}
        setId={setId}
        setTipoForm={setTipoForm}
        setForm={setForm}
      />
      <Modal
        open={open}
        setOpen={setOpen}
        tipoFormulario={tipoForm}
        handleSubmit={guardarClientes}
        handleSubmit2={actualizaCliente}
        select={select}
        setTipoForm={setTipoForm}
        setId={setId}
        form={form}
        setForm={setForm}
      />
    </div>
  );
};

export default Clientes;
