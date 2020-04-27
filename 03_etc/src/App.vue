<template>
  <div id="app">
    App 컴포넌트
    <DatePicker></DatePicker>
    
    <hr/>

    <button type="button" class="btn btn-primary btn-lg">Large button</button>

    <hr/>

    <Chart></Chart>
  </div>
</template>

<script>
import DatePicker from "./DatePicker.vue"
import Chart from "./Chart.vue"
export default {
  name: "app"
  , data() {
    return {
      msg: "Welcome to Your Vue.js"
    }
  }
  , components: {
    DatePicker
    , Chart
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