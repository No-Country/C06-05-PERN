import axios from "axios";

const ProductosAction = {
    obtenerProductos: () => {
        return async(dispatch, getState)=>{
            try{

                const res = await axios.get("http://localhost:4000/api/productos");
                return res.data
            }
            catch(error){
                console.log(error)
            }
        }
    }
}
export default ProductosAction