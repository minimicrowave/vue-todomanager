<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos/>
      <Todos />
    </div>
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import FilterTodos from "./components/FilterTodos";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 1.6;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
