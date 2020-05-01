<template>
  <div>
    <input
      type="text"
      placeholder="Ввести"
      v-model="title"
      @keyup.enter="onSubmit"
      class="add-input"
    />
    <button type="submit" @click="onSubmit" class="add-btn">Добавить</button>
    <button class="sort" @click="ON_SORT">Сортировка</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  data: () => ({
    title: ""
  }),

  methods: {
    ...mapActions(["createTodo"]),
    ...mapMutations(["CREATE_TODO", "ON_SORT"]),
    onSubmit() {
      let newTodo = {
        id: Date.now(),
        title: this.title,
        completed: false
      };
      if (this.title.trim()) {
        this.CREATE_TODO(newTodo);
      }
      this.title = "";
    }
  }
};
</script>

<style>
.add-btn {
  cursor: pointer;
  border: none;
  outline: none;
  background: rebeccapurple;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  margin-top: 10px;
}
.add-input {
  padding: 3px;
  font-size: 16px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  color: #0b0d0c;
  background-color: #ffffff;
  border-color: #26ff05;
  box-shadow: 1px 2px 14px 0px rgba(0, 158, 55, 0.75);
  text-shadow: 0px 0px 0px rgba(42, 42, 42, 0.75);
  font-weight: normal;
  font-style: none;
  font-family: cursive;
  text-transform: uppercase;
  padding-left: 20px;
}
.add-input:focus {
  outline: none;
}

.sort {
  cursor: pointer;
  border: none;
  outline: none;
  background: rgb(18, 18, 19);
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  margin-top: 10px;
}
</style>