<template>
    <div id="container" style="width: 100%; height: 400px"></div>
</template>

<script>
export default {
    mounted() {
        Highcharts.chart("container", {
            chart: {
                type: "bar"
            }
            , title: {
                text: "Fruit Consumption"
            }
            , xAxis: {
                categories: ["Apple", "Bananas", "Oranges"]
            }
            , yAxis: {
                title: {
                    text: "Fruit eaten"
                }
            }
            , series: [{
                name: "Jane"
                , data: [5, 7, 3]
            }]
        });
    }
}
</script>