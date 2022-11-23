
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-js-33f86.firebaseapp.com",
  projectId: "react-js-33f86",
  storageBucket: "react-js-33f86.appspot.com",
  messagingSenderId: "500625380465",
  appId: "1:500625380465:web:5e79815f32a099403a37d0"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            categoria: prod.category,
            nombre: prod.nombre,
            dimensiones: prod.dimensiones,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })
}

const getProductos = async() => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
  return items
}

export {cargarBDD, getProductos}

