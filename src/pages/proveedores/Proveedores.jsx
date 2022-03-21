import React, {useState, useEffect}from "react";
import Modal  from '../../components/Modal';
import Table from './components/Table';
import { collection, db, getDocs, deleteDoc, doc, addDoc,updateDoc} from '../../network/firebase';



const Proveedores = () => {
    const [proveedores, setProveedores] = useState([]);
    const [open, setOpen] = useState(false);
    const proveedoresCollectionRef = collection(db, "terceros");
    const [get, setGet] = useState([]);
    const [filter, setFilter] = useState([]);
    const [proveedor, setProveedor] = useState(null);
    const [tipoForm, setTipoForm] = useState(false)
    
    const eliminarProveedor = (proveedores) => {
        proveedores.map(async id =>{
          const proveedorDoc = doc(db, "terceros", id);
          await deleteDoc(proveedorDoc);
          obtenerProveedores();
        })
      }
  
    const guardarProveedor = async (data) => {
      console.log(data)
        if(tipoForm){
          const proveedorDoc = doc(db, "terceros", `${proveedor.id}`);
           await updateDoc(proveedorDoc,{...data});
           console.log(data.isUpdate)
          
        } else {
          await addDoc(proveedoresCollectionRef, {...data, type:"2"});
          
         
        }
  
        setOpen(false);
        setTipoForm(false);
        obtenerProveedores();
      }
      

      const editarProveedor = (proveedor) => {
        setProveedor(proveedor)
        setTipoForm(true);
        console.log(proveedor)

    }

    const obtenerProveedores = async () => {
        const data1 = await getDocs(proveedoresCollectionRef);
        setGet(data1.docs.map(doc => ({ ...doc.data(), id: doc.id})));
      }

    useEffect(()=>{
      obtenerProveedores();
    }, []);

    useEffect (()=>{
      setFilter(get.filter(docs => docs.type === "2"));
    },[get]);

    useEffect (()=>{
      setProveedores(filter);
    },[filter]);
      
    return(
        <div>
 <Table proveedores={proveedores} handleDelete={eliminarProveedor}  setOpen={setOpen} handleEditar={editarProveedor}/>
 <Modal open={open} setOpen={setOpen} tipoFormulario="proveedores" handleSubmit={guardarProveedor} proveedor={proveedor} setTipoForm={setTipoForm} tipoForm={tipoForm}/>
        </div>
    )
}

export default Proveedores;