const initialState = {
    user: null,
    snackbar:
    {
        view: false,
        message: '',
        success: false
    },

}

const UsuariosReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'user':
            return {
                ...state,
                user: action.payload,
            };
        case 'message':
            console.log(action.payload)
            return {
                ...state,
                snackbar: action.payload,
            }


        default:
            return state
    }
}
export default UsuariosReducer