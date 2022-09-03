import React, { useState,useEffect } from 'react'
import UsuariosAction from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

const Snackbar = () => {
    const [close, setClose] = useState(false)
    const snackbar = useSelector(store => store.UsuariosReducer.snackbar)
    return (
        <div className="snackbar fixed bottom-4 z-20 left-4  mx-2 sm:mx-auto max-w-sm  flex flex-row items-center justify-between bg-gray-50 shadow-lg p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
            <div className={snackbar.success ? "inline-flex items-center text-green-500" : "inline-flex items-center text-red-500"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
        </svg>
        {snackbar.message}
            </div>
            <div className={snackbar.success ? "text-green-700 cursor-pointer hover:text-green-800" : "text-red-700 cursor-pointer hover:text-red-800"}>
                {/* x */}
        <span className={snackbar.success ? "flex-shrink-0 inline-flex item-center justify-center border-l-2 border-t-2 border-green-700 p-1 leading-none rounded-full" : "inline-flex items-center text-red-500"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
          </svg>
        </span>
      </div>
        </div>
    )
}
export default Snackbar