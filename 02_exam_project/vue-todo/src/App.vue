<template>
    <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
</template>

<script>
//import로 컴포넌트 등록
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  //지역 컴포넌트 등록
    components: {
      "TodoHeader": TodoHeader
      , "TodoInput": TodoInput
      , "TodoList": TodoList
      , "TodoFooter": TodoFooter
    }
}
</script>

<style>
</style>