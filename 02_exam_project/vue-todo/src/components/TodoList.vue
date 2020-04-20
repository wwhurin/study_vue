<template>
    <section>
        <ul>
            <!--
                 v-for을 사용할 때, key 값이 요구
                 v-bind:key 추가 (예제에는 나와있지 않음!)
             -->
            <li v-for="todoItem in todoItems" v-bind:key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  data() {
      return {
          todoItems: []
      }
  }, created() {
      if(localStorage.length > 0){
          for(var i=0; i<localStorage.length; i++){
              this.todoItems.push(localStorage.key(i));
          }
      }
  }, methods: {
      removeTodo(todoItem, index) {
          console.log(todoItem, index);
      }
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex; 
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}
</style>