//1. sibling-component create
//options : template, props
Vue.component("sibling-component", {
    props: ["propsdata"]
    , template: "<p> {{propsdata}} </p>"
});

Vue.component("child-component", {
    props: ["propsdata"]
    , template: "<p> {{propsdata}} </p>"
});

var app = new Vue({
    el: "#app"
    , data: {
        message: "Hello Vue! passed from Parent Component"
        //making message for sibling component
        , anotherMessage: "Hello TEST! I'm passed Quiz!"
    }
})
