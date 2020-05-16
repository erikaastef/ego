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