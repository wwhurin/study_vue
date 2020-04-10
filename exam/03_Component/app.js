//'todo-footer' component
//global component 
Vue.component('todo-footer', {
    //컴포넌트 내용
    template: get_template("global")
});

var cmp = {
    template:  get_template("local")
}

var app = new Vue({
    el: "#app"
    , data: {
        message: "This is a parent component"
    }, components: {
        'todo-list': cmp
    }
});

function get_template(sType){
    var str = "<p>This is another "+sType+" child component</p>";
    return str;
}