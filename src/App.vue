<template>
  <div>
    <!-- Cabeçalho com menu -->
    <header class="bg-gray-800 text-white p-4">
      <nav class="flex gap-4">
        <router-link to="/" class="hover:underline">Início</router-link>
        <div class="relative group">
          <span class="hover:underline cursor-pointer">Ajuda</span>
          <div class="absolute hidden group-hover:block bg-gray-800 top-full py-2 w-48 rounded shadow-lg">
            <router-link to="/ajuda/status" class="block px-4 py-2 hover:bg-gray-700">Status</router-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Área principal que muda conforme a rota -->
    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// Nenhum script é necessário aqui, já que o <router-view> cuida da troca de telas.
</script>

<style scoped>
/* Se quiser, adicione estilos extras aqui */
</style>
