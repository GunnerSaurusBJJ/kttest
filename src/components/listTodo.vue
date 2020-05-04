<template>
  <div>
    <div v-if="paginatedTodos.length">
      <li v-for="todo in paginatedTodos" :key="todo.id" class="todo-li">
        <span v-bind:class="{done:todo.completed,active:todo.completed}">
          <button class="change" @click="todo.completed = !todo.completed"></button>
          {{todo.title}}
        </span>
        <button class="button delete" @click="onDelete(todo.id)">&times;</button>
      </li>
    </div>
    <p v-else>Нет задач</p>
    <div class="page-list">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{'active-page':page === pageNumber}"
        @click="pageClick(page)"
      >{{page}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    pageNumber: 1,
    todosPerPage: 10
  }),
  computed: {
    ...mapGetters(["allTodos"]),
    pages() {
      return Math.ceil(this.allTodos.length / this.todosPerPage);
    },
    paginatedTodos() {
      const from = (this.pageNumber - 1) * this.todosPerPage;
      const to = from + this.todosPerPage;
      return this.allTodos.slice(from, to);
    }
  },
  methods: {
    ...mapActions(["removeTodo"]),
    onDelete(id) {
      this.$store.dispatch("removeTodo", id);
    },
    pageClick(page) {
      this.pageNumber = page;
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

.done {
  text-decoration: line-through;
}
.page {
  margin-left: 10px;
  padding: 5px 7px;
}
.page:hover {
  background: #ccc;
  cursor: pointer;
}
.active-page {
  background: #ccc;
  cursor: pointer;
}
.page-list {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>