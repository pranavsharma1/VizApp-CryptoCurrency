
    var chart = new Highcharts.chart('container', {
        xAxis: {
            type: 'datetime',
            text: 'Time Period'
        },
        yAxis: {
            title: {
                text: 'Value in USD'
            }
        },
        title: {
            text: 'Bitcoin Price History'
        },
        chart: {
            zoomType: 'x'
        },
        credits: {
            enabled: false
        },
        subtitle: {
            text: 'Data input from CSV'
        },

        data: {
            csv: document.getElementById('bitcoin-csv').innerHTML
        },


        plotOptions: {
            series: {
                marker: {
                    enabled: true,
                    radius:2

                }
            }
        },

        series: [{
            lineWidth: 1
        }, {
            type: 'areaspline',
            color: '#c4392d',
            negativeColor: '#5679c4',
            fillOpacity: 0.7
        }]
    });


