// src/api/tarefas.js

import axios from '../utils/axios'
// Exportando a classe Tarefa
export default class Tarefas {
    async list(){ 
        const { data } = await axios.get('/tarefas')
        return data
    }
   
    async create({ texto, status }){ 
        const { data } = await axios.post('/tarefas', { texto, status })
        return data
    }
   
    async update({id, texto, status }){ 
        const { data } = await axios.put(`/tarefas/${id}`, { texto, status }) 
        return data
    }
 
    async delete({id}){ 
        await axios.delete(`/tarefas/${id}`) 
    }
}