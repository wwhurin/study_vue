<template>
  <div id="app">
    App 컴포넌트
    <DatePicker></DatePicker>
    <hr/>
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
  </div>
</template>

<script>
import DatePicker from "./DatePicker.vue"
export default {
  name: "app"
  , data() {
    return {
      msg: "Welcome to Your Vue.js"
    }
  }
  , components: {
    DatePicker
  }
  , mounted(){
    $("#calendar").datepicker();
  }
  , created(){
    console.log($.fn.jquery);
    console.log($.ui.version);
  }
}
</script>