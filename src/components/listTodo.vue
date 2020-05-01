<template>
  <div>
    <div v-if="paginatedData.length">
      <li v-for="todo in paginatedData" :key="todo.id" class="todo-li">
        <span v-bind:class="{done:todo.completed,active:todo.completed}">
          <button class="change" @click="todo.completed = !todo.completed"></button>
          {{todo.title}}
        </span>
        <button class="button delete" @click="onDelete(todo.id)">&times;</button>
      </li>
    </div>
    <p v-else>Нет задач</p>
    <button @click="prevPage" :disabled="pageNumber == 0" class="page prev"></button>
    <button @click="nextPage" :disabled="pageNumber >= pageCount -1" class="page next"></button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    pageNumber: 0,
    size: 10
  }),
  computed: {
    ...mapGetters(["allTodos"]),
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.allTodos.slice(start, end);
    },
    pageCount() {
      const todosLength = this.allTodos.length,
        todosSize = this.size;
      return Math.ceil(todosLength / todosSize);
    }
  },
  methods: {
    ...mapActions(["removeTodo"]),
    onDelete(id) {
      this.$store.dispatch("removeTodo", id);
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  }
};
</script>

<style>
.todo-li {
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
.page {
  border: none;
  cursor: pointer;
  outline: none;
  height: 20px;
  width: 30px;
}
.prev {
  background: url("../assets/multimedia-option.svg") no-repeat center;
  margin-right: 10px;
}
.next {
  background: url("../assets/arrows.svg") no-repeat center;
}
.done {
  text-decoration: line-through;
}
</style>