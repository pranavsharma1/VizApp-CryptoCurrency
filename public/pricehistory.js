
    $(function () {

        $.get('data/phdata/btcfull.csv', function (btc) {
            Highcharts.chart('container', {

                data: {
                    csv: btc
                },

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
                    zoomType: 'xy',
                    panning: true,
                    panKey: 'shift'
                },
                credits: {
                    enabled: false
                },
                subtitle: {
                    text: 'Pinch to Zoom'
                },


                plotOptions: {
                    series: {
                        marker: {
                            enabled: true,
                            radius: 2

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
        });
    });

        $('#btc').click(function () {

            $.get('data/phdata/btcfull.csv', function (btc) {
                Highcharts.chart('container', {
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
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: btc
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

//Ethereum Data Trend
        $('#eth').click(function () {
            $.get('data/phdata/ethfull.csv', function (eth) {
                Highcharts.chart('container', {
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
                        text: 'Ethereum Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: eth
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

//Ripple Data Trend
        $('#xrp').click(function () {
            $.get('data/phdata/ripplefull.csv', function (ripple) {
                Highcharts.chart('container', {
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
                        text: 'Ripple Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: ripple
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

        $('#dash').click(function () {
            $.get('data/phdata/dashfull.csv', function (dash) {
                Highcharts.chart('container', {
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
                        text: 'Dash Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: dash
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

        $('#etc').click(function () {
            $.get('data/phdata/eth-classic.csv', function (etc) {
                Highcharts.chart('container', {
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
                        text: 'Etherum Classic Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: etc
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

        $('#ltc').click(function () {
            $.get('data/phdata/litecoinfull.csv', function (ltc) {
                Highcharts.chart('container', {
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
                        text: 'Litecoin Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: ltc
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

        $('#xmr').click(function () {
            $.get('data/phdata/monerofull.csv', function (xmr) {

                Highcharts.chart('container', {
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
                        text: 'Monero Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: xmr
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

        $('#xem').click(function () {
            $.get('data/phdata/nemfull.csv', function (nem) {

                Highcharts.chart('container', {
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
                        text: 'NEM Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: nem
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

        $('#neos').click(function () {
            $.get('data/phdata/neosfull.csv', function (neos) {

                Highcharts.chart('container', {
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
                        text: 'NEOS Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: neos
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });

        $('#strat').click(function () {
            $.get('data/phdata/stratisfull.csv', function (stratis) {

                Highcharts.chart('container', {
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
                        text: 'Stratis Price History'
                    },
                    chart: {
                        zoomType: 'xy',
                        panning: true,
                        panKey: 'shift'
                    },
                    credits: {
                        enabled: false
                    },
                    subtitle: {
                        text: 'Pinch to Zoom'
                    },

                    data: {
                        csv: stratis
                    },


                    plotOptions: {
                        series: {
                            marker: {
                                enabled: true,
                                radius: 2

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
            });
        });





