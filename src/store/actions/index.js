import axios from "axios"

export const fetchModels = () => dispatch => {
    axios.get("http://challenge.agenciaego.tech/models").then((res) => {
        dispatch({
            type: "MODELS_DATA",
            payload: res.data
        })
    }).catch((error) => console.log(error.message))

}
export const fetchModelDetails = (id) => dispatch => {
    axios.get(`http://challenge.agenciaego.tech/models/${id}`).then((res) => {
        dispatch({
            type: "MODEL_DETAILS",
            payload: res.data
        })
    }).catch((error) => console.log(error.message))

}


export const currentView = (type, state) => dispatch => {
    dispatch({
        type: type,
        payload: state
    })
}

export const carouselView = (state) => dispatch => {
    dispatch({
        type: "mobile",
        payload: state
    })
}

export const menorMayorOption = (models) => {

    return models.sort((a, b) => {
        if (a.price > b.price) {
            return 1
        }
        if (a.price < b.price) {
            return -1
        }
        return 0
    })

}
export const mayorMenorOption = (models) => {

    return models.sort((a, b) => {
        if (a.price < b.price) {
            return 1
        }
        if (a.price > b.price) {
            return -1
        }
        return 0
    })

}
export const nuevosOption = (models) => {

    return models.sort((a, b) => {
        if (a.year < b.year) {
            return 1
        }
        if (a.year > b.year) {
            return -1
        }
        return 0
    })

}
export const viejosOption = (models) => {

    return models.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        }
        return 0
    })

}
export const orderModels = (type, payload) => dispatch => {
    dispatch({
        type: type,
        payload: payload
    })
}
