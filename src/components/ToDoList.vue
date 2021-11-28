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
        <div class="list-task-add">
          <form @submit="addTask">
            <input type="text" v-model="taskName" placeholder="Task name">
            <button>Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from './ToDo/ToDoItem'
export default {
  name: 'ToDoList',
  components: {
    'ToDoItem': ToDoItem
  },
  data () {
    return {
      taskName: null,
      todos: [{
        id: 1,
        title: 'Todo A',
        project: 'Project A',
        done: true
      }, {
        id: 2,
        title: 'Todo B',
        project: 'Project B',
        done: false
      }, {
        id: 3,
        title: 'Todo C',
        project: 'Project C',
        done: false
      }, {
        id: 4,
        title: 'Todo D',
        project: 'Project D',
        done: false
      }]
    }
  },
  methods: {
    addTask (e) {
      e.preventDefault()
      console.log(this.taskName)
      let newToDo = {
        id: 12,
        title: this.taskName,
        project: this.taskName,
        done: false
      }
      this.todos = [...this.todos, newToDo]
      console.log(this.todos)
    }
  }
}
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
