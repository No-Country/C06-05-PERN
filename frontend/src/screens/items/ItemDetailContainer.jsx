import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ProductosAction from '../../redux/actions/ProductosAction'
import Spinner from '../generales/Spinner'
import Bkg from '../../assets/Bkg.webp'
const ItemDetailContainer = () => {
  const { nombre }  = useParams()
  console.log(nombre)
  /* const producto = useSelector((store)=>store.ProductosReducer.productos) */
  const dispatch = useDispatch()
  const [product, setProduct] = useState({})
  /* const [reload, setReload] = useState(false) */
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const res = dispatch(ProductosAction.productoPorNombre(nombre))
    res.then(response=> setProduct(response))
    setLoading(false)
}, [])
  loading && <Spinner/>
  return (    
    <div className='h-min w-full'>
    <div className='flex relative justify-center items-center w-full h-96 bg-center bg-cover' style={{ backgroundImage: `url(${Bkg})` }}>
    </div>

    <ItemDetail product={product}/>
  </div>
  )
}

export default ItemDetailContainer