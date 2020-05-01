export default {
  state: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    CREATE_TODO(state, newTodo) {
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    ON_SORT(state) {
      state.todos = state.todos.reverse();
    },
    REMOVE_TODO(state, id) {
      const index = state.todos.findIndex((item) => item.id == id);
      state.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },

  actions: {
    createTodo({ commit }, newtodo) {
      commit("CREATE_TODO", newtodo);
    },

    removeTodo({ commit }, id) {
      commit("REMOVE_TODO", id);
    },
  },
};
