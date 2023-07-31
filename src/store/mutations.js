import db from '../services/localbase.js'


export default {
  buscaTarefas(state) {
    db.collection("tarefas")
      .get()
      .then((tarefasDB) => {
        state.tarefas = tarefasDB;
      });
    },
  adicionaTarefa(state, titulo) {
    if (titulo) {
      db.collection("tarefas").add({
        id: new Date().getTime(),
        titulo: titulo,
        concluido: false,
      });
    }
  },
  removeTarefa(state, id) {
    state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    db.collection("tarefas").doc({ id: id }).delete();
  },
  limparTarefa() {
    db.collection("tarefas").delete();
  },
  
  async limparTarefaConcluidas() { 
    try {
      const tarefasDB = await db.collection("tarefas").get();
      for (const tarefa of tarefasDB) {
        if (tarefa.concluido === true) {
          await db.collection("tarefas").doc({ id: tarefa.id }).delete();
        }
      }
    } catch (error) {
      console.error("Erro ao limpar tarefas concluídas:", error);
    }
  },
};
