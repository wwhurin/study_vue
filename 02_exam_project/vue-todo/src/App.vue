<template>
    <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput v-on:addTodo="addTodo"></TodoInput>
      <TodoList v-bind:propsdata="todoItems"></TodoList>
      <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
//import로 컴포넌트 등록
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  data() {
    return {
      todoItems: []
    }
  }, methods: {
    addTodo(todoItem){
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    }, clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  }, created() {
      if(localStorage.length > 0){
          for(var i=0; i<localStorage.length; i++){
              this.todoItems.push(localStorage.key(i));
          }
      }
  } ,components: {//지역 컴포넌트 등록
      "TodoHeader": TodoHeader
      , "TodoInput": TodoInput
      , "TodoList": TodoList
      , "TodoFooter": TodoFooter
  }
}
</script>

<style>
body {
    text-align: center;
    background-color: #F6F6F8;
}

input {
    border-style: groove;
    width: 200px;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>