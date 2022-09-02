import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ProductosAction from '../../redux/actions/ProductosAction'
import Spinner from '../generales/Spinner'
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
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer