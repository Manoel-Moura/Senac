// main.js 
import Tarefas from './api/tarefas'
import './assets/css/estilos.css'
const apiTarefas = new Tarefas()
import { createApp } from 'vue'
const app = createApp({
    data(){
        return {
            tarefas: [],
            form: {
                texto: '',
                status: false
            }
        }
    },
    created(){
        this.buscarTarefas()
    },
    methods: {
        async buscarTarefas(){ 
            this.tarefas = await apiTarefas.list()
        },
        async criarTarefa(){   
            const novaTarefa = this.tarefas = await apiTarefas.create(this.form) 
            this.tarefas.push(novaTarefa)
            // Limpando o formulário
            this.form.texto = ''
            this.form.status = false 
        },
        async atualizarTarefa(tarefa){
            const tarefaAtualizada = await apiTarefas.update({
              ...tarefa,
              status: !tarefa.status 
            })
            const index = this.tarefas.findIndex( ({ id }) => id == tarefaAtualizada.id ) 
            this.tarefas[index] = tarefaAtualizada
                 
        },
        async deletarTarefa(id){
            // Excluindo na base.
            await apiTarefas.delete({id}) // Preciso criar um objeto para desentruturar lá no método.
            // Excluindo no template.
            const index = this.tarefas.findIndex( (tarefa) => tarefa.id == id )
            this.tarefas.splice(index, 1) // Deletando do array
        }
    }
})
app.mount("#app") // Montando a aplicação.