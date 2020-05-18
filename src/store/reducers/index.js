const initialState = {
    models: "",
    modelDetails: "",
    orderedModels: "",
    home: true,
    details: false,
    carouselMobile: false
}

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case "MODELS_DATA":
            return { ...state, models: payload }
        case "MODEL_DETAILS":
            return { ...state, modelDetails: payload }
        case "Nada":
            return { ...state, orderedModels: payload }
        case "De menor a mayor precio":
            return { ...state, orderedModels: payload }
        case "De mayor a menor precio":
            return { ...state, orderedModels: payload }
        case "Más nuevos primero":
            return { ...state, orderedModels: payload }
        case "Más viejos primero":
            return { ...state, orderedModels: payload }
        case "home":
            return { ...state, home: payload }
        case "details":
            return { ...state, details: payload }
        case "mobile":
            return { ...state, carouselMobile: payload }

        default:
            return state
    }
}