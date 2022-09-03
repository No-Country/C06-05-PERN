import React, { useState, useEffect } from 'react'
import Bkg from '../assets/Bkg.webp'
import { MdOutlineSearch } from "react-icons/md";
import Item from './items/Item';
import { useDispatch } from 'react-redux';
import ProductosAction from '../redux/actions/ProductosAction'
import Spinner from './generales/Spinner'
import {useParams} from 'react-router-dom'
import Nosotros from './generales/Nosotros';
const Products = () => {
  const {categoria} = useParams()
  const [reload, setReload] = useState(false)
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  //El reducer recupera del store/bolsa la respuesta de la accion y la retorna al componente

  useEffect(() => {
    const response = async () => {
      const res = await dispatch(ProductosAction.obtenerProductos()) //Ejecutar la acción 
      setProductos(res)
      setLoading(false)
      if(categoria != undefined) {
        setProductos(res.filter(prod => prod.categorias_url.includes(categoria)))
        setLoading(false)
      }
    }
    response()
  },[categoria])

  const obtenerValor = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }
  if(categoria == "nosotros"){
    return <Nosotros/>
  }  
  return (
    <div className='h-min w-full  bg-[#f7f7f7] '>
      <div className='flex relative justify-center items-center w-full h-96 bg-center bg-cover' style={{ backgroundImage: `url(${Bkg})` }}>
        <form action="" className='w-6/12 relative flex justify-center items-center' onKeyUp={(event) => obtenerValor(event)}>
          <input type="text" id="large-input" className="p-2.5 w-full bg-[#f7f7f7] rounded-2xl sm:text-md focus:ring-[#96BE8C]  focus:border-[#96BE8C]  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-[#96BE8C]  dark:focus:border-[#96BE8C]  font-semibold text-xl shadow-2xl " placeholder='Busca tu prenda favorita' />
          <MdOutlineSearch className='absolute right-4 h-6 w-6 text-gray-400'/>
        </form>
      </div>
      <div className='flex gap-12 bg-transparent px-4 relative justify-center flex-wrap h-min w-full bg transform -translate-y-20 z-10' >
        {loading ? <Spinner /> : productos.filter(e=>e.nombre_prod.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())).map((item, index) => <Item key={index} productos={item} />)}
      </div>
    </div>
  )
}

export default Products