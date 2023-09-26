<script setup>

</script>

<template>
    <nav class="navbar">
      <a href="#" class="logo">Controle Pessoal de Livros</a>
      <ul class="itemList">
        <li class="item">
          <a href="#" class="link"> Inclucao </a>
        </li>
        <li class="item">
          <a href="#" class="link"> Manutencao </a>
        </li>
        <li class="item">
          <a href="#" class="link"> Controle </a>
        </li>
      </ul>
    </nav>
</template>

<style scoped>
.navbar {
  background-color: #266e1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  color: white;
}
.navbar > .logo {
  color: white;
  text-decoration: none;
  font: 600;
  font-size: 24px;
}
.navbar > .itemList {
  display: flex;
  gap: 12px;
  color: white;
  list-style: none;
}
.navbar > .itemList>.item >a{
  color: #aaaaaaa8;
  text-decoration: none;
}
.navbar > .itemList>.item:hover >a{
  color: #7ae5e9f5;
}
</style>
