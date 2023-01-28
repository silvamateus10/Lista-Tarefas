import db from '../services/localbase.js'

export default {
  async adicionaTarefa({ commit }, titulo) {
    await commit("adicionaTarefa", titulo);
    await commit("buscaTarefas");
  },
  editarTarefa({ commit }, novaTarefa) {
    db.collection("tarefas")
      .doc({ id: novaTarefa.id })
      .update({
        titulo: novaTarefa.titulo,
      })
      .then(() => {
        commit("buscaTarefas");
      });
  },
  concluiTarefa({ commit }, novaTarefa) {
    db.collection("tarefas")
      .doc({ id: novaTarefa.id })
      .update({
        concluido: !novaTarefa.concluido,
      })
      .then(() => {
        commit("buscaTarefas");
      });
  },
};
