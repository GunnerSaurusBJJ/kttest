<template>
  <div>
    <div v-if="allTodos.length">
      <li v-for="todo in allTodos" :key="todo.id">
        <span v-bind:class="{done:todo.completed,active:todo.completed}">
          <button class="change" @click="todo.completed = !todo.completed"></button>
          {{todo.title}}
        </span>
        <button class="button delete" @click="onDelete(todo.id)">&times;</button>
      </li>
    </div>
    <p v-else>Нет задач</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["allTodos"])
  },
  methods: {
    ...mapActions(["removeTodo"]),
    onDelete(id) {
      this.$store.dispatch("removeTodo", id);
    }
  }
};
</script>

<style>
li {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
  margin: 1rem auto;
  background: #dbe0ee;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  color: #45793d;
  font-family: cursive;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
}
span {
  margin-left: 20px;
}
.change {
  background: url("../assets/electronics.svg") no-repeat center;
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 50%;

  left: 16px;
  transform: translateY(-50%);
}
.active {
  color: rgb(0, 59, 251);
}
.delete {
  /* background: red; */
  color: red;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  /* padding: 7px 10px; */
  margin-left: 10px;
}

.done {
  text-decoration: line-through;
}
</style>