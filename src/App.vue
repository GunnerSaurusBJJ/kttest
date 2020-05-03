<template>
  <div id="app">
    <h1>Todo app</h1>
    <div class="count">{{allTodos.length}}</div>
    <addTodo />
    <listTodo />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import addTodo from "@/components/addTodo";
import listTodo from "@/components/listTodo";
export default {
  components: { addTodo, listTodo },
  name: "App",
  computed: {
    ...mapGetters(["allTodos"])
  }
};
</script>

<style>
html {
  background: rgb(37, 179, 49);
  background: linear-gradient(
    90deg,
    rgba(37, 179, 49, 0.8) 30%,
    rgba(61, 130, 168, 0.8) 59%
  );
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 800px;
  width: 100%;
  border: 2px solid;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  position: relative;
}
h1 {
  text-transform: uppercase;
  letter-spacing: 2px;
}
.count {
  position: absolute;
  top: 17px;
  right: 20px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 30px;
}
</style>
