<template>
  <div class="wrapper">
    <h1>Vue ToDo List</h1>
    <div class="container">
      <div class="header">
      <p>Tasks: <span>{{todos.filter(todo => {return todo.done === false}).length}}</span></p>
      <p>Done: <span>{{todos.filter(todo => {return todo.done === true}).length}}</span></p>
      </div>
      <div class="main">
        <ul class="list-task">
          <li v-for="todo in todos" :key="todo.id">
            <ToDoItem :todo="todo"></ToDoItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from './ToDo/ToDoItem'
export default {
  name: "ToDoList",
  components: {
    'ToDoItem': ToDoItem
  },
  data() {
  return {
    todos: [{
      id: 1,
      title: 'Todo A',
      project: 'Project A',
      done: false,
    }, {
      id: 2,
      title: 'Todo B',
      project: 'Project B',
      done: true,
    }, {
      id: 3,
      title: 'Todo C',
      project: 'Project C',
      done: false,
    }, {
      id: 4,
      title: 'Todo D',
      project: 'Project D',
      done: false,
    }],
  };
}
};
</script>

<style lang="scss" scope>
  @import "../assets/scss/_variables.scss";
  @import "../assets/scss/_reset.scss";
  @import "../assets/scss/_common.scss";
  @import "../assets/scss/_todo.scss";

  .list-task {
    li {
      margin-bottom: 10px;
    }
  }

</style>