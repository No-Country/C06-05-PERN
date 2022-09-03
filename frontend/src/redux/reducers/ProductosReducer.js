const initialState = {
  productos: [],
};

const ProductosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ("GET_PRODUCTO"):
      return {
        ...state,
        productos: action.payload,
      };
    default:
      return state;
  }
};

export default ProductosReducer;
