import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import imagenGota from '../../assets/gota.png'
import imagenDioxidoC from '../../assets/dioxido-de-carbono.png'
import Spinner from '../generales/Spinner'
function className(...className) {
  return className.filter(Boolean).join(' ')
}
/* 
const product = {
  name: 'Camisa Agatha',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', className: 'bg-white', className: 'ring-gray-400' },
    { name: 'Gray', className: 'bg-gray-200', className: 'ring-gray-400' },
    { name: 'Black', className: 'bg-gray-900', className: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: false },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: false },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
} */




function ItemDetail({ product }) {
  console.log(product)
  /*   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]) */
  return (
    <div className="bg-slate-400 py-20 ">
      <div className="bg-white mx-auto px-20  rounded-2xl  max-w-[1407px] h-[879px] flex justify-between items-center box-border  ">

        {/* text */}
        <div className="w-1/2 p-5  ">
          <h2 className="font-bold text-[40px] text-[#222] py-10">{product.nombre_prod}</h2>
          <h3 className="text-sm text-gray-900 font-medium">Descripción</h3>
          <p className='text-gray-400 text-sm'>{product.comentarios_prod}</p>

          <form className="mt-10">


            {/* Sizes */}
            <div className="my-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm text-gray-900 font-medium">Size</h3>
                <a href="#" className="text-sm font-medium text-[#96BE8C] hover:text-[#96BE8C]">
                  Size guide
                </a>
              </div>

              <RadioGroup /* value={selectedSize} onChange={setSelectedSize} */ className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                <div className="grid grid-cols-4 gap-5 sm:grid-cols-8 lg:grid-cols-4">
                  {/* TALLES */}

                  {product.talle?.map((size, index) => (
                    <RadioGroup.Option
                      key={index}
                      value={size}
                      disabled={!size.inStock}
                      className={({ active }) =>
                        className(
                          size.inStock
                            ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                            : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                          active ? 'ring-2 ring-[#96BE8C]' : '',
                          'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                          {size.inStock ? (
                            <span
                              className={className(
                                active ? 'border' : 'border-2',
                                checked ? ' border-[#96BE8C]' : 'border-transparent',
                                'absolute -inset-px rounded-md pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                            >
                              <svg
                                className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Colors */}
            <div>
              <h3 className="text-sm text-gray-900 font-medium ">Color</h3>

              <RadioGroup /* value={selectedColor} onChange={setSelectedColor} */ className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                <div className="flex items-center space-x-3">
                  {product.color?.map((color, index) => (
                    <RadioGroup.Option
                      key={index}
                      className={({ active, checked }) =>
                        className(
                          color.className,
                          active && checked ? 'ring ring-offset-1' : '',
                          !active && checked ? 'ring-2' : '',
                          '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      <RadioGroup.Label as="span" className="sr-only">
                        {color.name}
                      </RadioGroup.Label>
                      <span
                        className={className(
                          color.className,
                          'h-8 w-8 border border-black border-opacity-10 rounded-full'
                        )}
                      />
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* datos de interes */}

            <div className='mt-4'>
              <div className='flex justify-start'>
                <img className='w-5 h-5 opacity-20' src={imagenGota} />
                <p className='text-gray-400 text-sm'>30000 litros de agua  ahorrados</p>
              </div>
              <div className='flex justify-start' >
                <img className='w-5 h-5 opacity-20' src={imagenDioxidoC} />
                <p  className='text-gray-400 text-sm'>1.36 kg de emisiones de CO2 ahorrados</p>
              </div>

            </div>


            {/* add to bag Button */}
            <button
              type="submit"
              className="mt-10 w-full bg-[#96BE8C] border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-[#77b469] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#77b469]"
            >
              Add to bag
            </button>
          </form>


        </div>
        {/* Image */}
        <div className=" w-[607px]  h-[693px] rounded-2xl overflow-hidden ">
          <img
            src={process.env.PUBLIC_URL + '/imgs/' + product.imagen}
            alt="img"
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
    </div>
  )
}
export default ItemDetail