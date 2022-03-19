import React, { useEffect, useState } from "react";
import { collection, getDocs, db, addDoc, doc, updateDoc, deleteDoc } from '../../network/firebase'


const Facturacion = () => {
    const [terceros, setTerceros] = useState([]);
    const tecerosCollectionRef = collection(db, "terceros");

useEffect(()=>{
    const getTerceros = async () => {
        const data = await getDocs(tecerosCollectionRef);
        setTerceros(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }

    getTerceros();
}, [])


useEffect(()=>{
    console.log(terceros)
}, [terceros])

const update = async () =>{
    const terceroDoc = doc(db, "terceros", "idDeltercero");
    const newData = {};
    await updateDoc(terceroDoc, newData);
}

const deleteTercero = async () =>{
    const terceroDoc = doc(db, "terceros", "idDeltercero");
    await deleteDoc(terceroDoc);
}

const saveTerceros = async () => {
    const docData = {
        documentNumber: "1035863798",
        documentType: "cc",
        email: "joserojasme@gmail.com",
        fullName: "Pepeganga",
        id: 2,
        phone: "123444",
        type: 1
    }

    const response = await addDoc(tecerosCollectionRef, docData);
    console.log(response)
}

    return(
        <>
        <div>
            <ul>
            {terceros.map(item=> <li>{item.id}</li>)}
            </ul>
        </div>
        <div onClick={()=>saveTerceros()}>
            <h6>get</h6>
        </div>
        </>
    )
}

export default Facturacion
