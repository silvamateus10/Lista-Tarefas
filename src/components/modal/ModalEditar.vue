<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title class="text-h5"> Editar </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field
            v-model="tarefaEdicao.titulo"
            class="mt-3"
            label="Título"
            outlined
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleEditar()">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
  data() {
    return {
      dialog: true,
      tarefaEdicao: this.tarefa,
    };
  },
  methods: {
    handleEditar() {
      let novaTarefa = {
        titulo: this.tarefaEdicao.titulo,
        id: this.tarefaEdicao.id,
      };
      this.$store.dispatch("editarTarefa", novaTarefa);
      this.$emit("fechaModal");
    },
  },
};
</script>

<style></style>
