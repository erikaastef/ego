const initialState = {
    models: "",
    modelDetails: ''
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case "MODELS_DATA":
            return { ...state, models: payload }
        case "MODEL_DETAILS":
            return { ...state, modelDetails: payload }
        default:
            return state
    }
}