import React from 'react'
import Bkg from '../../assets/Bkg.webp'

const Nosotros = () => {
  return (
    
    <div className='h-min bg-[#f7f7f7] '>
      <div className='flex relative justify-center items-center w-full h-96 bg-center bg-cover' style={{ backgroundImage: `url(${Bkg})` }}>
          <h2 className='text-5xl font-bold pb-16 text-white drop-shadow-lg'>Nosotros </h2>
      </div>
      <div className='w-10/12 rounded-2xl mx-auto px-[20%] my-20 bg-[#f7f7f7] transform -translate-y-60 '>
      <h1 className='font-bold text-center mb-5 text-2xl text-[#787575]'>¿Por qué Remecycle?</h1>
        <p className='text-[19px]'>
            Somos una Marca Argentina de Indumentaria Sustentable. <b>Remecycle Indumentaria </b>nacio en 2020 por personas que estan convencidas en que cada aporte y el trabajo en equipo puede hacer bien al planeta y a quienes lo habitamos.

            Nos dedicamos al diseño y confección de prendas de vestir y accesorios de fibra de bambo, destacando sus beneficios y mejorando la calidad de vida de las personas y su impacto positivo al medio ambiente.
        </p>
        <br></br><br></br>
        <h1 className='font-bold text-center mb-5 text-2xl text-[#787575] '> ¿Por qué bamboo?</h1>
        <p className='text-[19px]'>
            
            El bamboo es la planta de más rápido crecimiento en el mundo y es, por lo tanto, un recurso ecológico y sostenible. Crece en terrenos marginales sin requerir tierra fértil, agrotóxicos ni pesticidas y el proceso, a partir del cual se convierte la fibra en celulosa, es el menos contaminante de todos. Además, es <b>100% biodegradable</b>.

            

            La confección de indumentaria realizada con fibra de bamboo genera en las prendas <b>propiedades antibacterianas</b> -lo que ayuda a mantenerlas libres de olor-, <b>hipoalergénicas y termoclimáticas</b> -estar cálido en invierno y fresco en verano-.

            

            También, <b>absorben cuatro veces más humedad</b> que una prenda hecha de algodón, <b>protegen contra los rayos UV</b> y favorecen la transpiración corporal debido a la cualidad porosa de las fibras que sirven para la respirabilidad; la prenda resiste pegarse durante el ejercicio o cuando hace calor. Por lo tanto, son ideales para hacer deportes o actividades al aire libre.

        </p>
      </div>
    </div>
  )
}

export default Nosotros
