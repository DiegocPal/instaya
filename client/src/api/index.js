import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
})

export const insertEnvio = payload => api.post(`/crearenvio`, payload)
export const getAllEnvios = () => api.get(`/listaPedidos`)
export const updateEnvioById = (id, payload) => api.put(`/envio/${id}`, payload)
export const deleteEnvioById = id => api.delete(`/envio/${id}`)
export const getEnvioById = id => api.get(`/envio/${id}`)

const apis = {
    insertEnvio,
    getAllEnvios,
    updateEnvioById,
    deleteEnvioById,
    getEnvioById,
}

export default apis