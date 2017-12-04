
$(function() {

    $.getJSON('data/ohlcdata/sampledata.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Bitcoin OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Bitcoin Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});

//Bitcoin OHLC
$('#btc').click(function() {

    $.getJSON('data/ohlcdata/sampledata.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Bitcoin OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Bitcoin Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

        })

});

//Ethereum OHLC
$('#eth').click(function() {

    $.getJSON('data/ohlcdata/ethohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Ethereum OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Ethereum Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});

//Ripple OHLC
$('#xrp').click(function() {

    $.getJSON('data/ohlcdata/rippohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Ripple OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Ripple Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});

//Dash OHLC
$('#dash').click(function() {

    $.getJSON('data/ohlcdata/dashohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Dash OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Dash Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});

//Eth-Classic OHLC
$('#etc').click(function() {

    $.getJSON('data/ohlcdata/etcohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Ethereum Classic OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Eth-Classic Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});

//Litecoin OHLC
$('#ltc').click(function() {

    $.getJSON('data/ohlcdata/ltcohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Litecoin OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Litecoin Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});

//Monero OHLC
$('#xmr').click(function() {

    $.getJSON('data/ohlcdata/monohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Monero OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Litecoin Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});


//NEM OHLC

$('#xem').click(function() {

    $.getJSON('data/ohlcdata/nemohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'NEM OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'NEM Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});


//NEOS OHLC

$('#neos').click(function() {

    $.getJSON('data/ohlcdata/neosohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'NEOS OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'NEOS Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});

//STRAT OHLC

$('#strat').click(function() {

    $.getJSON('data/ohlcdata/stratohlc.json', function (data) {


        Highcharts.stockChart('container', {


            rangeSelector: {
                inputEnabled:true,
                selected: 100,
                buttons: [{
                    type: 'minute',
                    count: 60,
                    text: '1h'
                }, {
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }]
            },

            title: {
                text: 'Stratis OHLC(Open, High, Low, Close) Price'
            },
            credits:{
                enabled:false
            },
            boost: {
                useGPUTranslations: true
            },

            series: [{
                type: 'candlestick',
                name: 'Stratis Price in USD',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'minute', // unit name
                            [60] // allowed multiples
                        ],
                        [
                            'day', [1]],
                        [
                            'week', [1]],
                        [
                            'month', [1]]
                    ]
                }
            }]
        });

    })

});