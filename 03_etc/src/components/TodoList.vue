<template>
    <section>
        <transition-group name="list" tag="ul">
            <!--
                transition-group : 목록에 애니메이션 추가할 때 사용! 
                 v-for을 사용할 때, key 값이 요구
                 v-bind:key 추가 (예제에는 나와있지 않음!)
             -->
            <li v-for="(todoItem, index) in propsdata" v-bind:key="(todoItem, index)" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
  props: ["propsdata"]
  , methods: {
      removeTodo(todoItem, index) {
          console.log(todoItem, index);
          this.$emit("removeTodo", todoItem, index);
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

.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>