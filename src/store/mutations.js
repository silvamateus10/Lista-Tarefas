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
};
