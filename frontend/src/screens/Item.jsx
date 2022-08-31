import React from 'react'
import {Link} from 'react-router-dom'
const Item = ({productos}) => {
  
  return (
    <div className="p-3 rounded-xl bg-white w-64 h-72 relative border-solid border flex flex-col" >
      <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/937/944/products/img_22801-f1a5f3ce2ee64d050a16548923867410-240-0.jpg" alt="product" className='h-40 w-full rounded-xl  object-cover object-top' />
      <div className='flex justify-between my-3'>
        <div className="flex flex-col justify-between">
          <h4 className="font-semibold">{productos.nombre_prod}</h4>
          <p className="text-xs text-slate-600">3 cuotas sin interés</p>
        </div>
        <h4 className="font-semibold">${productos.precio}</h4>
      </div>
      <Link to={"/productos/" + productos.nombre_prod.toLowerCase().split(' , ')} className="p-2 text-xs text-white rounded-full text-center bg-[#96BE8C]">Comprar</Link>
    </div>
  )
}

export default Item