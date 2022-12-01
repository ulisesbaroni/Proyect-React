
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

const dataBase = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(dataBase, "productos"), {
            category: prod.category,
            nombre: prod.nombre,
            dimensiones: prod.dimensiones,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })
}

const getProductos = async() => {
  const productos = await getDocs(collection(dataBase, "productos"))
  const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
  return items
}


const getProduct = async (id) =>{
  const product = await getDoc(doc(dataBase,"productos",id))
  let item 
  if (product.data()){
    item = {...product.data(), id: product.id}
  }else{
      item = 0
  }
  return item
}

const createTicket = async (client, total, date) =>{
  const ticket = await addDoc(collection(dataBase, "OrdenDeCompra"),{
      fecha: date,
      nombre: client.nombre,
      Email: client.email,
      dni: client.dni,
      tel: client.tel,
      precioTotal: total
  })
  return ticket
}

const getTicket = async (id) =>{
  const item = await getDoc(doc(dataBase, "OrdenDeCompra", id))
  const ticket = {...item.data(), id:item.id}
  return ticket

}

export {cargarBDD, getProductos, getProduct, createTicket, getTicket}

