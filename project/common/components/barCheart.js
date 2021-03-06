Vue.component('barCheart', {
    template: `
        <div class="barCheart" style="height:100%;width:100%" ref="weekChartBox">
            <div ref="weekChart" style="height:100%;width:100%"></div>
        </div>
     `,
    data: function () {
        return {
            style: {
                height: "100%",
                width: "100%",
            }
        }
    },
    props: {
        propdata: {
            type: Array,
            default: function () {
                return []
            }
        },
        changeInit: {
            type: Boolean,
            default: false
        }
    },
    mounted: function () {
        let _this = this;
        let h = _this.$refs.weekChartBox.offsetHeight;
        let w = _this.$refs.weekChartBox.offsetWidth;
        _this.style.height = h + "px";
        _this.style.width = w + "px";

        let xAxisData = [];
        if (_this.propdata.length) {
            for (let i = 0; i < _this.propdata.length; i++) {
                xAxisData.push(_this.propdata[i].name)
            }
        }

        this.weekChart = echarts.init(this.$refs.weekChart);
        this.weekChartOption = {
            // color: ["#4fe8ff"],
            tooltip: {
                trigger: "axis",
                formatter: "{a} <br/>{b}: {c}",
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                },
            },
            grid: {
                // width: 530,
                // height: 150,
                top: 35,
                left: 50,
            },
            xAxis: [{
                type: "category",
                data: xAxisData,
                axisTick: {
                    alignWithLabel: true,
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: "16",
                    },
                },
                axisLine: {
                    // x轴的颜色和宽度
                    lineStyle: {
                        color: "#808891",
                        width: 1,
                    },
                },
                axisTick: {
                    show: false, //去掉刻度线
                },
            },],
            yAxis: [{
                type: "value",
                // max: 100000,
                min: 0,
                splitNumber: 6, //把Y轴刻度分成6份
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: "12",
                    },
                },
                axisLine: {
                    // x轴的颜色和宽度
                    lineStyle: {
                        color: "#808891",
                        width: 1,
                    },
                },
                splitLine: {
                    //网格样式
                    show: true,
                    lineStyle: {
                        color: ["rgba(68, 146, 245,0.2)"],
                        width: 1,
                        type: "solid",
                    },
                },
                axisTick: {
                    show: false, //去掉刻度线
                },
            },
            {
                type: "value",
            },
            ],
            series: [{
                name: "",
                type: "bar",
                barWidth: 32,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                            offset: 0,
                            color: "#4492f5",
                        },
                        {
                            offset: 1,
                            color: "rgba(68, 146, 245,0.2)",
                        },
                        ]),
                    },
                },

                data: _this.propdata,
            },],
        };
        this.weekChart.setOption(this.weekChartOption);
    },
    watch: {
        changeInit: function (newV, oldV) {
            let _this = this;
            if (newV) {
                let h = _this.$refs.weekChartBox.offsetHeight;
                let w = _this.$refs.weekChartBox.offsetWidth;
                _this.style.height = h + "px";
                _this.style.width = w + "px";
                _this.weekChart.resize()
            }
        },
        propdata: {
            deep: true,
            handler: function (newV, oldV) {
                let _this = this;
                let xAxisData = [];
                if (_this.propdata.length) {
                    for (let i = 0; i < _this.propdata.length; i++) {
                        xAxisData.push(propdata[i].name)
                    }
                }
                _this.weekChartOption.xAxis.data = xAxisData;
                _this.weekChartOption.series.data = _this.propdata;
                _this.weekChart.setOption(_this.weekChartOption);
            }
        }
    }
})