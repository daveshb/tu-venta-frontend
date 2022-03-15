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
    
    const eliminarProveedor = (proveedores) => {
        proveedores.map(async id =>{
          const proveedorDoc = doc(db, "terceros", id);
          await deleteDoc(proveedorDoc);
          obtenerProveedores();
        })
      }
  
    const guardarProveedor = async (data) => {
        if(data.isUpdate){
          const proveedorDoc = doc(db, "terceros", `${data.id}`);
           await updateDoc(proveedorDoc,{...data});
           console.log(data.isUpdate)
          
  
        } else {
          await addDoc(proveedoresCollectionRef, {...data, type:"2"});
          console.log(data.isUpdate)
         
        }
  
        setOpen(false);
        obtenerProveedores();
      }
      

      const editarProveedor = (proveedor) => {
        setProveedor(proveedor)
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
 <Modal open={open} setOpen={setOpen} tipoFormulario="proveedores" handleSubmit={guardarProveedor} proveedor={proveedor}/>
        </div>
    )
}

export default Proveedores;