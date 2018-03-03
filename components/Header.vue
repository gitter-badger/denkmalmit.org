<template>
  <header class="header">
    <div class="boundaries">
      <h2>Verein</h2>
      <img class="logo" src="/images/logo.svg" alt="Denkmal.org">
      <h1>Denkmalmit</h1>
    </div>
  </header>
</template>

<style>
.header {
  background-color: black;
  background-image: url('/images/header.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: white;
  display: flex;
  align-items: flex-end;
  height: 44vh;
  overflow: hidden;
}

.header h1 {
  opacity: 0;
  position: absolute;
  top: 0;
}

.header h2 {
  margin-bottom: 0.3em;
}
.logo {
  width: 200px;
}
</style>
