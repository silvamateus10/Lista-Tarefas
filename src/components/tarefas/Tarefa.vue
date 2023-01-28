<template>
  <div>
    <v-list-item
      :class="{ 'blue lighten-4': tarefaData.concluido }"
      @click="concluirTarefa()"
    >
      <template>
        <v-list-item-action>
          <v-checkbox :input-value="tarefaData.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': tarefaData.concluido }"
            >{{ tarefa.titulo }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <!-- <v-btn icon
          @click.stop="handleRemoveTarefa(tarefa.id)"
          >
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn> -->
          <TarefaMenu :tarefa="tarefa" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from "./TarefaMenu.vue";

export default {
  name: "TarefaComponent",
  props: ["tarefa"],
  components: {
    TarefaMenu,
  },
  data() {
    return {
      tarefaData: this.tarefa,
    };
  },
  methods: {
    concluirTarefa() {
      this.$store.dispatch("concluiTarefa", this.tarefaData);
      this.tarefaData.concluido = !this.tarefaData.concluido;
    },
    handleRemoveTarefa(id) {
      this.$store.commit("removeTarefa", id);
    },
  },
};
</script>

<style></style>
