var app = new Vue({
    el: "#app"
    , data: {
        message: "Hello Vue.js"
        , message_quiz : "Hello Vue.js Test"
        , uid: 10
        //, flag: true
        , flag: false
    }, methods: {
        clickBtn(){
            console.log("hi");
        }, clickEvent(){
            alert("hi");
        }
    }
})