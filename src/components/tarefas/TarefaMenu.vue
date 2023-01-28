<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon>
          <v-icon dark> mdi-dots-vertical </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
          <v-icon left>{{ item.icone }} </v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <ModalEditar
      v-if="items[0].modal"
      @fechaModal="items[0].modal = false"
      :tarefa="tarefa"
    />
    <ModalDelete
      v-if="items[1].modal"
      @fechaModal="items[1].modal = false"
      :tarefa="tarefa"
    />
  </div>
</template>

<script>
import ModalEditar from "../modal/ModalEditar.vue";
import ModalDelete from "../modal/ModalDelete.vue";

export default {
  components: {
    ModalEditar,
    ModalDelete,
  },
  props: ["tarefa"],

  data: () => ({
    items: [
      {
        icone: "mdi-pencil",
        title: "Editar",
        modal: false,
        click() {
          this.modal = true;
        },
      },
      {
        icone: "mdi-trash-can",
        title: "Remover",
        modal: false,
        click() {
          this.modal = true;
        },
      },
    ],
  }),
  methods: {},
};
</script>

<style></style>
