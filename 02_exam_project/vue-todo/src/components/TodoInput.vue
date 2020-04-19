<template>
    <div>
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">추가</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newTodoItem: ''
        }
    }, methods: {
        addTodo() {
            console.log(this.newTodoItem);

            if(this.newTodoItem !== ""){
                var value = this.newTodoItem && this.newTodoItem.trim();
                localStorage.setItem(this.newTodoItem, this.newTodoItem);
                this.clearInput();
            }
           
        }, clearInput() {
            this.newTodoItem = "";
        }
    }
}
</script>

<style>

</style>