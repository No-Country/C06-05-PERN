import axios from "axios";

const ProductosAction = {
  obtenerProductos: () => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.get("http://localhost:4000/api/productos");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    };
  },
  productoPorNombre: (dato) => {
    console.log(dato);
    return async (dispatch, getState) => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/productosnombre/" + dato,
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
      /* finally{
                console.log("todo joya")
            } */
    };
  },
  searchProductById: async (id) => {
    const res = await axios.get("http://localhost:4000/api/productos/:" + id);
    console.log(res);
    return {
      response: res.data,
    };
  },
};
export default ProductosAction;
