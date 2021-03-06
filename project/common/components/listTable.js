Vue.component('listTable', {
    template: `
      <div class="listTableBox">
        <div class="listTableHaed">
            <div v-for="(val,item) in propdata.colName" :key="item" :style="getStyle(item)">
                <div>{{propdata.colName[item]}}</div>
            </div>
        </div>
        <div class="listTableCenter">
        <div ref="messageList">
            <ul>
                <li v-for="(val2,item2) in propdata.colData" @click="rowOnClick(item2)" :key="val2.id?val2.id:item2">
                    <div v-for="(val3,item3) in propdata.colModel" :key="item3" :style="getStyle(item3)">
                        <div :style="getTextShowStyle(item3)" v-if="val3.formatterClass">
                            <span :class="val3.formatterClass(val2[val3.name])" :title="val3.formatterText?val3.formatterText(val2[val3.name]):val2[val3.name]">
                                {{val3.formatterText?val3.formatterText(val2[val3.name]):val2[val3.name]}}
                            </span>
                        </div>
                        <div :style="getTextShowStyle(item3)" :title="val3.formatterText?val3.formatterText(val2[val3.name]):val2[val3.name]" v-else>
                            {{val3.formatterText?val3.formatterText(val2[val3.name]):val2[val3.name]}}
                        </div>
                    </div>
                </li>
            </ul>
            </div>
        </div>

      </div>
      `,
    props: {
        propdata: {
            type: Object,
            default: function () {
                return {
                    // colName: [],
                    // colModel: [],
                    // colData: function () {
                    //     return [
                    //         {
                    //             class: function () {
                    //                 return ""
                    //             }
                    //         }
                    //     ]
                    // },
                }
            },
        },
        flex: {
            type: Boolean,
            default: false,
        },
        // ???????????????
        rowclick:{
            type: Boolean,
            default: false,
        }
    },
    mounted: function () {
        $(this.$refs.messageList).mCustomScrollbar({
            theme: 'minimal',
            scrollInertia: 550,
            mouseWheelPixels: 220,
        });
    },
    methods: {
        rowOnClick: function (index) {
            if (!this.rowclick) return false;
            console.log("?????????????????????" + index);

            let data = {};

            // ????????????,????????????url???????????????,???????????????
            data = {
                "title": "????????????",
                "colName": [
                    {
                        "name":"machineName",
                        "value": "??????",
                        "colWidth": "15",
                    },{
                        "name":"machineType",
                        "value": "????????????",
                        "colWidth": "15",
                    },{
                        "name":"machineNo",
                        "value": "????????????",
                        "colWidth": "15",
                    },{
                        "name":"machineStatus",
                        "value": "????????????",
                        "colWidth": "15",
                    },{
                        "name":"logTime",
                        "value": "????????????",
                        "colWidth": "15",
                    },{
                        "name":"progress",
                        "value": "??????",
                        "colWidth": "25",
                    },
                ],
                "data": [{
                    "machineName": "?????????1",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "55"
                }, {
                    "machineName": "?????????2",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "100"
                }, {
                    "machineName": "?????????3",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "25"
                }, {
                    "machineName": "?????????4",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "?????????5",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "95"
                }, {
                    "machineName": "?????????6",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "60"
                }, {
                    "machineName": "?????????7",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "30"
                }, {
                    "machineName": "?????????8",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "20"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "36"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "19"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "15"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "4"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "88"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "10"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "12"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, {
                    "machineName": "?????????9",
                    "machineType": "????????????",
                    "machineNo": "PG34578983",
                    "machineStatus": "normal",
                    "logTime": "2021-03-21",
                    "progress": "50"
                }, ]
            }

            // ????????????,????????????????????????
            // axios.post(url, {
            //         // ?????????????????????data..
            //         //  ??????????????????,??????????????????,data???????????????????????????
            this.$emit("dialogonopen", data);
            //     })
            //     .then(function (response) {
            //         console.log('???????????????');
            //         console.log('response');
            //     })
            //     .catch(function (error) {
            //         console.log("????????????" + error);
            //     });
        },
        getTextShowStyle: function (item) {
            let style = {};
            let colModel = this.propdata.colModel;
            if (this.flex) {
                if (!colModel[item].flexd) {
                    style.overflow = "hidden";
                    style.textOverflow = "ellipsis";
                    style.whiteSpace = "nowrap";
                }
            }
            return style;
        },
        getStyle: function (item) {
            let style = {};
            style.width = this.getColWidth(item);
            return style;
        },
        getColWidth: function (item) {
            let colModel = this.propdata.colModel;
            let itemModel = colModel[item];
            if (itemModel.hide) return 0;
            if (!itemModel.width && !itemModel.widthPer) return 0;

            let width = null;
            //??????????????????
            if (!this.flex) {
                if (itemModel.width) {
                    width = itemModel.width + "px";
                }
                if (itemModel.widthPer) {
                    //??????????????????widthPer??????????????????
                    let num = 0;
                    for (let i = 0; i < colModel.length; i++) {
                        if (!colModel[i].widthPer && colModel[i].width && !colModel[i].hide) {
                            num = num + Number(colModel[i].width)
                        }
                    }
                    width = "calc(" + itemModel.widthPer + "% - " + (num + 1) * itemModel.widthPer / 100 + "px)";
                }
            } else {
                if (!itemModel.flexd) {
                    width = "0.1px";
                } else {
                    if (itemModel.width) {
                        width = itemModel.width + "px";
                    }
                    if (itemModel.widthPer) {
                        //??????????????????widthPer??????????????????
                        let num = 0;
                        //???????????????widthPer????????????
                        let fm = 0;

                        for (let i = 0; i < colModel.length; i++) {
                            if (!colModel[i].widthPer && colModel[i].width && !colModel[i].hide && colModel[i].flexd) {
                                num = num + Number(colModel[i].width)
                            }
                            if (colModel[i].widthPer && !colModel[i].hide && colModel[i].flexd) {
                                fm = fm + Number(colModel[i].widthPer)
                            }
                        }
                        width = "calc(" + (itemModel.widthPer / fm) * 100 + "% - " + (num + 1) * itemModel.widthPer / fm + "px)";
                    }
                }
            }


            return width;
        }
    },
    computed: {
    },
    watch: {

    }

})

