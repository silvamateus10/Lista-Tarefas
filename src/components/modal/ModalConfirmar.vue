<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="text-h5"> {{ titulo }}  </v-card-title>
        <v-divider></v-divider>
        <v-card-text> {{ mensagem }} </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="$emit('fechaModal')">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="confirmar()">
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  props: ["dialogConfirmacao","titulo", "mensagem", "confirmado"],
  data() {
    return {
        dialog: this.dialogConfirmacao
     };
  },
  methods: {
    confirmar() {
      this.confirmado(true);
    },
  },
};
</script>

<style></style>
