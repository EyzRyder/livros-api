<script>
import axios from 'axios';
export default {
  data() {
    return {
      titulo: "",
      autor: "",
      url: "",
      anoPublicado: 0,
      preco: 0,
    };
  },
  methods: {
    handleSubmit() {
      console.log("Submit");
      console.log({
        titulo: this.titulo,
        autor: this.autor,
        url: this.url,
        anoPublicado: this.anoPublicado,
        preco: this.preco,
      });

      axios({
        method: "POST",
        url: 'https://',
        data: {
           titulo: this.titulo,
        autor: this.autor,
        url: this.url,
        anoPublicado: this.anoPublicado,
        preco: this.preco,
        }
      }).then(() => {
        console.log("Added in beck")
      })
    },
    reset() {
      this.titulo = "";
      this.autor = "";
      this.url = "";
      this.anoPublicado = "";
      this.preco = "";
    },
  },
};
</script>

<template>
  <div class="container">
    <h3>Inclusão {{ titulo && "do livro: " + titulo }}</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="titulo">Titulo:</label>
        <input
          type="text"
          class="from-control"
          id="titulo"
          v-model="titulo"
          required
          autofocus
        />
      </div>
      <div class="form-group">
        <label for="autor">Autor: </label>
        <input
          type="text"
          class="from-control"
          id="autor"
          v-model="autor"
          required
        />
      </div>
      <div class="form-group">
        <label for="foto">URL do Foto</label>
        <input
          type="url"
          v-model="url"
          class="from-control"
          id="foto"
          required
        />
      </div>
      <div class="divide">
        <div class="form-group">
          <label for="ano">Ano da Publicacao</label>
          <input
            type="number"
            class="from-control"
            id="ano"
            v-model="anoPublicado"
            required
          />
        </div>
        <div class="form-group">
          <label for="preco">Preco</label>
          <input
            type="number"
            class="from-control"
            id="preco"
            step="0.01"
            v-model="preco"
            required
          />
        </div>
      </div>
      <input type="submit" class="formBtm" value="Enviar" />
      <input type="reset" class="formReset" value="Limpar" @click="reset" />
    </form>
  </div>
</template>

<style scoped>
.container {
  padding: 12px 36px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.divide {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
}

input[type="text"],
input[type="number"],
input[type="url"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
input[type="reset"] {
  width: 100%;
  background-color: #af4c4c;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="reset"]:hover {
  background-color: #a04545;
}
</style>
