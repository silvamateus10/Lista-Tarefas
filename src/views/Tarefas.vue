<template>
  <div>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="campoInput"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTarefa()"
      ></v-text-field>
    </v-col>
    <ListaTarefas />
    <div v-if="!$store.state.tarefas.length" class="text-center mt-16 animate__animated animate__bounceIn">
      <v-icon size="100" color="primary"> mdi-check </v-icon>
      <div class="text-h5">Nenhuma tarefa</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListaTarefas from "../components/tarefas/ListaTarefas.vue";

export default {
  name: "TarefasView",
  components: {
    ListaTarefas,
  },
  data() {
    return {
      campoInput: null,
    };
  },
  methods: {
    handleAddTarefa() {
      if (this.campoInput) {
        // this.$store.commit("adicionaTarefa", this.campoInput);
        // Action
        this.$store.dispatch("adicionaTarefa", this.campoInput);
        this.campoInput = null;
      }
    },
  },
  created() {
    this.$store.commit("buscaTarefas");
  },
};
</script>
