Ext.define('App.controller.Tabitem', {
    extend: 'Ext.app.Controller',

    stores: [
        'Digitcir', 'Datacir', 'Datacirgov', 'Datacirpubnet', 'Transdev', 'Datadev', 'Custorm',
        'Fiber', 'Globaleye', 'Contact', 'WorkOrderType', 'DutyType', 'BusiType', 'BreakDown', 'AreaPer',
        'DutyPer', 'BusiPer', 'WorkOrderPer', 'Area', 'CauseType', 'Warn', 'Warnweek', 'Warnten',
        'JobAnay', 'Custorm_nm', 'Bdmonth', 'Causeper', 'Causepertype', 'Recordperson', 'Contract'
        , 'syj_accident', 'syj_contract', 'syj_diesel_reconcile', 'syj_diesel_wdvoucher', 'syj_driver'
        , 'syj_enter_car', 'syj_fitt_consume', 'syj_fitt_inventory', 'syj_freight', 'syj_insure'
        , 'syj_out_refuel', 'syj_outward_car', 'syj_purchase', 'syj_qt_analysis', 'syj_qt_collect', 'syj_qt_gather'
        , 'syj_repairs', 'syj_tire_history', 'syj_traffic_annual', 'syj_traffic_details', 'syj_tsa_annual'
        , 'syj_two_insur', 'syj_vehicle', 'syj_violation', 'syj_wages', 'syj_warehouse_refuel'],

    models: [
        'Digitcir', 'Datacir', 'Transdev', 'Datadev', 'Custorm', 'Fiber', 'Globaleye', 'Contact',
        'WorkOrderType', 'DutyType', 'BusiType', 'BreakDown', 'AreaPer', 'DutyPer', 'BusiPer',
        'Area', 'WorkOrderPer', 'CauseType', 'Warn', 'JobAnay', 'Custorm_nm', 'Bdmonth', 'Causeper',
        'Recordperson', 'Contract'
        , 'syj_accident', 'syj_contract', 'syj_diesel_reconcile', 'syj_diesel_wdvoucher', 'syj_driver'
        , 'syj_enter_car', 'syj_fitt_consume', 'syj_fitt_inventory', 'syj_freight', 'syj_insure'
        , 'syj_out_refuel', 'syj_outward_car', 'syj_purchase', 'syj_qt_analysis', 'syj_qt_collect', 'syj_qt_gather'
        , 'syj_repairs', 'syj_tire_history', 'syj_traffic_annual', 'syj_traffic_details', 'syj_tsa_annual'
        , 'syj_two_insur', 'syj_vehicle', 'syj_violation', 'syj_wages', 'syj_warehouse_refuel'],

    views: [
        'maintain.record.Maintainf', 'maintain.record.Query', 'maintain.record.Grid', 'maintain.record.DetailW',
        'driver.baseinfo.Driverf', 'driver.baseinfo.Query', 'driver.baseinfo.Grid', 'driver.baseinfo.DetailW',
        'driver.salary.Salaryf', 'driver.salary.Query', 'driver.salary.Grid', 'driver.salary.DetailW',
        'truck.info.Truckf', 'truck.info.Query', 'truck.info.Grid', 'truck.info.DetailW',
        'truck.second.Second', 'truck.second.Query', 'truck.second.Grid',
        'truck.fare.Fare', 'truck.fare.Query', 'truck.fare.Grid',
        'truck.goodslist.Goodslist', 'truck.goodslist.Query', 'truck.goodslist.Grid',
        'truck.transdetail.Transdetail', 'truck.transdetail.Query', 'truck.transdetail.Grid',
        'refuel.storeroom.Refuelf', 'refuel.storeroom.Grid', 'refuel.storeroom.Query', 'refuel.storeroom.DetailW',
        'refuel.oil_station.Refuelf', 'refuel.oil_station.Grid', 'refuel.oil_station.Query',
        'refuel.oil_station.DetailW',
        'inspection.police.Policef', 'inspection.police.Grid', 'inspection.police.Query', 'inspection.police.DetailW',
        'inspection.transm.Transmf', 'inspection.transm.Grid', 'inspection.transm.Query','inspection.transm.DetailW',
        'truckuse.in.Truckinf', 'truckuse.in.Grid', 'truckuse.in.Query', 'truckuse.in.DetailW',
        'truckuse.out.Truckoutf', 'truckuse.out.Grid', 'truckuse.out.DetailW', 'truckuse.out.Query',
        'accidents.Accidentsf', 'accidents.Grid', 'accidents.Query', 'accidents.DetailW',
        'breakrule.Brf', 'breakrule.Grid', 'breakrule.Query', 'breakrule.DetailW',
        'contract.upload.Upload', 'contract.upload.Grid',
        'contract.baseinfo.Baseinfo', 'contract.baseinfo.Grid',
        'contract.download.Download', 'contract.download.Grid',
        'breakdown.anay.Anayf', 'breakdown.anay.Grid', 'breakdown.anay.Query',
        'breakdown.mine_bd.Minef', 'breakdown.mine_bd.Query',
        'breakdown.total_bd.Totalf', 'breakdown.total_bd.Query',
        'breakdown.warn.Warnf', 'breakdown.warn.QueryWeek', 'breakdown.warn.QueryMonth',
        'breakdown.warn.GridWeek', 'breakdown.warn.GridMonth',
        'storeroom.oil.note.Oilnotef', 'storeroom.oil.note.Grid', 'storeroom.oil.note.Query', 'storeroom.oil.note.DetailW',
        'storeroom.oil.use.Oilusef', 'storeroom.oil.use.Grid', 'storeroom.oil.use.Query', 'storeroom.oil.use.DetailW',
        'storeroom.tyres.datacount.Tyresdatacountf', 'storeroom.tyres.datacount.Grid', 'storeroom.tyres.datacount.Query', 'storeroom.tyres.datacount.DetailW',
        'storeroom.tyres.dataanay.Tyresdataanayf', 'storeroom.tyres.dataanay.Grid', 'storeroom.tyres.dataanay.Query', 'storeroom.tyres.dataanay.DetailW',
        'storeroom.tyres.datacollect.Tyresdatacollectf', 'storeroom.tyres.datacollect.Grid', 'storeroom.tyres.datacollect.Query', 'storeroom.tyres.datacollect.DetailW',
        'storeroom.tyres.history.Tyreshistoryf', 'storeroom.tyres.history.Grid', 'storeroom.tyres.history.Query', 'storeroom.tyres.history.DetailW',
        'storeroom.fituse.Fituse', 'storeroom.fituse.Query', 'storeroom.fituse.Grid',
        'storeroom.fitcount.Fitcount', 'storeroom.fitcount.Query', 'storeroom.fitcount.Grid',
        'insurance.Insurerf', 'insurance.Grid', 'insurance.Query'
    ],

    refs: [
        {
            ref: 'panel',
            selector: 'detailPanel'
        },
        {
            ref: 'paneldata',
            selector: 'datacir_detailPanel'
        }
    ],

    init: function () {
        this.control({
            '[id="bd_tool_add"]': {
                click: function () {
                    var bd_detailwindow = Ext.create('widget.bd_detailWindow', {
                        title: '添加障碍记录',
                        iconCls: 'icon_add',
                        height: 611
                    });
                    var bd_detail_form = Ext.getCmp('bd_detail_form');
                    bd_detail_form.add([
                        {
                            xtype: 'button',
                            formBind: true,
                            margin: '0 0 0 165',
                            text: '保存',
                            iconCls: 'icon_save',
                            handler: function () {
                                bd_detail_form.getForm().submit({
                                    url: '/teldata/data/a_bd.action',
                                    waitMsg: '正在保存数据...',
                                    success: function (form) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        form.reset();
                                    },
                                    failure: function () {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    ]);
                    bd_detailwindow.show();
                }
            },

            'viewport > tabPanel > panel > bd_grid dataview': {
                itemdblclick: function (grid, record) {
                    var bd_detailwindow = Ext.create('widget.bd_detailWindow', {
                        title: record.get('custorm_nm'),
                        height: 585
                    });
                    var bd_detail_form = Ext.getCmp('bd_detail_form');
                    bd_detail_form.loadRecord(record);
                    bd_detail_form.add([
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_save',
                                    text: '保存',
                                    flex: 1,
                                    handler: function () {
                                        bd_detail_form.getForm().submit({
                                            url: '/teldata/data/u_bd.action',
                                            waitMsg: '正在保存数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                form.reset();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据保存失败!");
                                            }
                                        });
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    flex: 0.3,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_trash',
                                    text: '删除',
                                    flex: 1,
                                    handler: function () {
                                        Ext.Ajax.request({
                                            url: '/teldata/data/d_bd.action',
                                            params: {id: record.get('id')},
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("删除", "删除记录成功!");
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("删除", "删除记录失败!");
                                            }
                                        })
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                }
                            ]
                        }
                    ]);
                    bd_detailwindow.show();
                }
            },
//            'viewport > tabPanel > panel > bd_grid': {
//                afterrender: function (_this) {
//                    var gridstore = _this.getStore();
//                    gridstore.on("beforeload", function () {
//                        Ext.apply(gridstore.proxy.extraParams, {
//                            custorm_nm: Ext.getCmp('bd_query_custorm_nm').getValue()
//                            bd_type: Ext.getCmp('bd_query_bd_type').getValue(),
//                            bd_business_des: Ext.getCmp('bd_query_bd_business_des').getValue(),
//                            bd_branch: Ext.getCmp('bd_query_bd_branch').getValue()
//                        })
//                    })
//                }
//            },
            '[id=bd_tool_refresh]': {
                click: function () {
                    this.getBreakDownStore().load();
                }
            },

            '[id="btn_change_img"]': {
                click: function () {
                    document.getElementById('topo_img').src = "doc/images1/" + Ext.getCmp("topo_custorm_nm").getValue() + ".jpg";
                }
            },
            '[id="btn_change_img_custorm"]': {
                click: function () {
                    document.getElementById('topo_img_custorm').src = "doc/images2/" + Ext.getCmp("topo_custorm_nm_custorm").getValue() + ".jpg";
                }
            },

//            客户表事件处理
            'viewport > tabPanel > panel > custorm_grid': {
                afterrender: function (_this) {
                    var gridstore = _this.getStore();
                    gridstore.on("beforeload", function () {
                        Ext.apply(gridstore.proxy.extraParams, {
                            custorm_nm: Ext.getCmp('custorm_query_custorm_nm').getValue(),
                            custorm_type: Ext.getCmp('custorm_query_custorm_type').getValue(),
                            custorm_business_des: Ext.getCmp('custorm_query_custorm_business_des').getValue(),
                            custorm_branch: Ext.getCmp('custorm_query_custorm_branch').getValue()
                        })
                    })
                }
            },
            'viewport > tabPanel > panel > custorm_grid dataview': {
                itemdblclick: function (grid, record, item, index, e, eOpts) {
                    var custorm_detailwindow = Ext.create('widget.custorm_detailWindow', {
                        title: record.get('custorm_name'),
                        height: 506
                    });
                    var custorm_detail_form = Ext.getCmp('custorm_detail_form');
                    custorm_detail_form.loadRecord(record);
                    custorm_detail_form.add([
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                }
                                ,
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_save',
                                    flex: 1,
                                    text: '保存',
                                    handler: function () {
                                        custorm_detail_form.getForm().submit({
                                            url: '/teldata/data/u_custorm.action',
                                            waitMsg: '正在保存数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据保存成功!");
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据保存失败!");
                                            }
                                        });
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    border: false,
                                    flex: 0.3,
                                    width: 20,
                                    height: 20
                                }
                                ,
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_trash',
                                    disabled: true,
                                    text: '删除',
                                    flex: 1,
                                    handler: function () {
                                        Ext.Ajax.request({
                                            url: '/teldata/data/d_custorm.action',
                                            params: {
                                                custorm_name: record.get('custorm_name'),
                                                custorm_branch: record.get('custorm_branch')
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (response) {
                                                Ext.Msg.alert("删除", "删除记录成功!");
                                                custorm_detail_form.getForm().reset();
                                            },
                                            failure: function (response) {
                                                Ext.Msg.alert("删除", "删除记录失败!");
                                            }
                                        })
                                    }
                                },
                                {xtype: 'panel', flex: 1, border: false}
                            ]}
                    ]);
                    custorm_detailwindow.show();
                }
            },
            '[id="custorm_tool_add"]': {
                click: function () {
                    var custorm_detailwindow = Ext.create('widget.custorm_detailWindow', {
                        title: '添加客户信息',
                        iconCls: 'icon_add',
                        height: 506
                    });
                    var custorm_detail_form = Ext.getCmp('custorm_detail_form');
                    custorm_detail_form.add([
                        {
                            xtype: 'button',
                            formBind: true,
                            margin: '0 0 0 160',
                            text: '保存',
                            iconCls: 'icon_save',
                            handler: function () {
                                custorm_detail_form.getForm().submit({
                                    url: '/teldata/data/a_custorm.action',
                                    waitMsg: '正在保存数据...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        form.reset();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    ]);
                    custorm_detailwindow.show();
                }
            },
            '[id=custorm_tool_refresh]': {
                click: function () {
                    this.getCustormStore().load();
                }
            },
            'viewport > tabPanel > panel > custorm_query button[id="custorm_find"]': {
                click: function () {
                    this.getCustormStore().load();
                }
            },

            //公网VPN电路事件控制
            'viewport > tabPanel > panel > bd_grid': {
                afterrender: function (_this) {
                    bd_gridstore = _this.getStore();
                    bd_gridstore.on("beforeload", function () {
                        Ext.apply(bd_gridstore.proxy.extraParams, {
                            custorm_nm: Ext.getCmp('bd_query_custorm_nm').getValue(),
                            duty_type: Ext.getCmp('bd_query_duty_type').getValue(),
                            busi_type: Ext.getCmp('bd_query_busi_type').getValue(),
                            workorder_type: Ext.getCmp('bd_query_workorder_type').getValue(),
                            record_person: Ext.getCmp('bd_query_record_person').getValue(),
                            archiving: Ext.getCmp('bd_query_status').getValue(),
                            start_date: Ext.getCmp('bd_query_start_date').getValue(),
                            end_date: Ext.getCmp('bd_query_end_date').getValue()
                        })
                    });
                    bd_gridstore.load();
                }
            },

            //工作记录查询功能
            '[id=bd_find]': {
                click: function () {
                    this.getBreakDownStore().load();
                }
            },

            '[id=bd_reset]': {
                click: function () {
                    Ext.getCmp('bd_query').getForm().reset();
                }
            },

            'viewport > tabPanel > panel > anay_grid': {
                afterrender: function (_this) {
                    bd_gridstore = _this.getStore();
                    bd_gridstore.on("beforeload", function () {
                        Ext.apply(bd_gridstore.proxy.extraParams, {
                            start_date: Ext.getCmp('anay_query_start_date').getValue(),
                            end_date: Ext.getCmp('anay_query_end_date').getValue()
                        })
                    });
                    bd_gridstore.load();
                }
            },
            '[id=anay_find]': {
                click: function () {
                    this.getJobAnayStore().load();
                }
            },

            'viewport > tabPanel > panel > geye_grid': {
                afterrender: function (_this) {
                    var gridstore = _this.getStore();
                    gridstore.on("beforeload", function () {
                        Ext.apply(gridstore.proxy.extraParams, {
                            custorm_nm: Ext.getCmp('geye_query_custorm_nm').getValue(),
                            belong_platform: Ext.getCmp('geye_query_belong_platform').getValue()
                        })
                    })
                }
            },
            'viewport > tabPanel > panel > geye_grid dataview': {
                itemdblclick: function (grid, record, item, index, e, eOpts) {
                    var geye_detailwindow = Ext.create('widget.geye_detailWindow', {
                        title: record.get('custorm_nm'),
                        height: 560
                    });
                    var geye_detail_form = Ext.getCmp('geye_detail_form');
                    geye_detail_form.loadRecord(record);
                    geye_detail_form.add([
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_save',
                                    flex: 1,
                                    text: '保存',
                                    handler: function () {
                                        geye_detail_form.getForm().submit({
                                            url: '/teldata/data/u_geye.action',
                                            waitMsg: '正在保存数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据保存成功!");
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据保存失败!");
                                            }
                                        });
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    border: false,
                                    flex: 0.3,
                                    width: 20,
                                    height: 20
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_trash',
                                    disabled: true,
                                    text: '删除',
                                    flex: 1,
                                    handler: function () {
                                        Ext.Ajax.request({
                                            url: '/teldata/data/d_digit_circute.action',
                                            params: {
                                                geye_name: record.get('geye_name'),
                                                geye_branch: record.get('geye_branch')
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (response) {
                                                Ext.Msg.alert("删除", "删除记录成功!");
                                                geye_detail_form.getForm().reset();
                                            },
                                            failure: function (response) {
                                                Ext.Msg.alert("删除", "删除记录失败!");
                                            }
                                        })
                                    }
                                },
                                {xtype: 'panel', flex: 1, border: false}
                            ]}
                    ]);
                    geye_detailwindow.show();
                }
            },
            'viewport > tabPanel > panel > geye_query button[id="geye_find"]': {
                click: function () {
                    this.getGlobaleyeStore().load();
                }
            },
            '[id="geye_tool_add"]': {
                click: function () {
                    var geye_detailwindow = Ext.create('widget.geye_detailWindow', {
                        title: '添加传输设备信息',
                        iconCls: 'icon_add',
                        height: 560
                    });
                    var geye_detail_form = Ext.getCmp('geye_detail_form');
                    geye_detail_form.add([
                        {
                            xtype: 'button',
                            formBind: true,
                            text: '保存',
                            margin: '0 0 0 160',
                            iconCls: 'icon_save',
                            handler: function () {
                                geye_detail_form.getForm().submit({
                                    url: '/teldata/data/a_geye.action',
                                    waitMsg: '正在保存数据...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        form.reset();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    ]);
                    geye_detailwindow.show();
                }
            },
//            全球眼事件处理
            '[id="geye_tool_refresh"]': {
                click: function () {
                    this.getGlobaleyeStore().load();
                }
            },
//            通讯录事件处理
            '[id="contact_tool_refresh"]': {
                click: function () {
                    this.getContactStore().load();
                }
            },
//            数据设备事件处理
            'viewport > tabPanel > panel > datadev_grid': {
                afterrender: function (_this) {
                    datadev_gridstore = _this.getStore();
                    datadev_gridstore.on("beforeload", function () {
                        Ext.apply(datadev_gridstore.proxy.extraParams, {
                            custorm_nm: Ext.getCmp('datadev_query_custorm_nm').getValue(),
                            belong_network: Ext.getCmp('datadev_query_belong_network').getValue(),
                            belong_project: Ext.getCmp('datadev_query_belong_project').getValue(),
                            inner_dev_nm: Ext.getCmp('datadev_query_inner_dev_nm').getValue()
                        })
                    });
                    datadev_gridstore.load();
                }
            },
            'viewport > tabPanel > panel > datadev_grid dataview': {
                itemdblclick: function (grid, record, item, index, e, eOpts) {
                    var datadev_detailwindow = Ext.create('widget.datadev_detailWindow', {
                        title: record.get('custorm_nm'),
                        height: 597
                    });
                    var datadev_detail_form = Ext.getCmp('datadev_detail_form');
                    datadev_detail_form.loadRecord(record);
                    datadev_detail_form.add([
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_save',
                                    flex: 1,
                                    text: '保存',
                                    handler: function () {
                                        datadev_detail_form.getForm().submit({
                                            url: '/teldata/data/u_datadev.action',
                                            waitMsg: '正在保存数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据保存成功!");
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据保存失败!");
                                            }
                                        });
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    border: false,
                                    flex: 0.3,
                                    width: 20,
                                    height: 20
                                }
                                ,
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_trash',
                                    disabled: true,
                                    text: '删除',
                                    flex: 1,
                                    handler: function () {
                                        Ext.Ajax.request({
                                            url: '/teldata/data/d_datadev.action',
                                            params: {
                                                datadev_name: record.get('datadev_name'),
                                                datadev_branch: record.get('datadev_branch')
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (response) {
                                                Ext.Msg.alert("删除", "删除记录成功!");
                                                datadev_detail_form.getForm().reset();
                                            },
                                            failure: function (response) {
                                                Ext.Msg.alert("删除", "删除记录失败!");
                                            }
                                        })
                                    }
                                },
                                {xtype: 'panel', flex: 1, border: false}
                            ]}
                    ]);
                    datadev_detailwindow.show();
                }
            },
            'viewport > tabPanel > panel > datadev_query button[id="datadev_find"]': {
                click: function () {
                    this.getDatadevStore().load();
                }
            },
            '[id="datadev_tool_add"]': {
                click: function () {
                    var datadev_detailwindow = Ext.create('widget.datadev_detailWindow', {
                        title: '添加传输设备信息',
                        iconCls: 'icon_add',
                        height: 596
                    });
                    var datadev_detail_form = Ext.getCmp('datadev_detail_form');
                    datadev_detail_form.add([
                        {
                            xtype: 'button',
                            formBind: true,
                            text: '保存',
                            margin: '0 0 0 160',
                            iconCls: 'icon_save',
                            handler: function () {
                                datadev_detail_form.getForm().submit({
                                    url: '/teldata/data/a_data_dev.action',
                                    waitMsg: '正在保存数据...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        form.reset();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    ]);
                    datadev_detailwindow.show();
                }
            },
            '[id="datadev_tool_refresh"]': {
                click: function () {
                    this.getDatadevStore().load();
                }
            },

//            数字电路控制事件==========================================================================================
            'viewport > tabPanel > panel > digitGrid dataview': {
                itemclick: this.bindGridToPanel
            },

            'viewport > tabPanel > panel > digitcir_grid': {
                afterrender: function (_this) {
                    digitcir_gridstore = _this.getStore();
                    digitcir_gridstore.on("beforeload", function () {
                        Ext.apply(digitcir_gridstore.proxy.extraParams, {
                            custorm_name: Ext.getCmp('digitcir_query_custorm_nm').getValue(),
                            custorm_branch: Ext.getCmp('digitcir_query_custorm_branch').getValue(),
                            circute_code: Ext.getCmp('digitcir_query_circute_code').getValue(),
                            circute_property: Ext.getCmp('digitcir_query_circute_property').getValue(),
                            circute_type: Ext.getCmp('digitcir_query_circute_type').getValue()
                        })
                    });
                    digitcir_gridstore.load();
                }
            },

            'viewport > tabPanel > panel > digitcir_grid dataview': {
                itemdblclick: function (grid, record, item, index, e, eOpts) {
                    var digitcir_detailwindow = Ext.create('widget.digitcir_detailWindow', {
                        title: record.get('custorm_name'),
                        height: 606
                    });
                    var digitcir_detail_form = Ext.getCmp('digitcir_detail_form');
                    digitcir_detail_form.loadRecord(record);
                    digitcir_detail_form.add([
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                }
                                ,
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_save',
                                    flex: 1,
                                    text: '保存',
                                    handler: function () {
                                        digitcir_detail_form.getForm().submit({
                                            url: '/teldata/data/u_digit_circute.action',
                                            waitMsg: '正在保存数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据保存成功!");
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据保存失败!");
                                            }
                                        });
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    border: false,
                                    flex: 0.3,
                                    width: 20,
                                    height: 20
                                }
                                ,
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_trash',
                                    disabled: true,
                                    text: '删除',
                                    flex: 1,
                                    handler: function () {
                                        Ext.Ajax.request({
                                            url: '/teldata/data/d_digit_circute.action',
                                            params: {
                                                custorm_name: record.get('custorm_name'),
                                                custorm_branch: record.get('custorm_branch')
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (response) {
                                                Ext.Msg.alert("删除", "删除记录成功!");
                                                digitcir_detail_form.getForm().reset();
                                            },
                                            failure: function (response) {
                                                Ext.Msg.alert("删除", "删除记录失败!");
                                            }
                                        })
                                    }
                                },
                                {xtype: 'panel', flex: 1, border: false}
                            ]}
                    ]);
                    digitcir_detailwindow.show();
                }
            },
            '[id="digitcir_tool_refresh"]': {
                click: function () {
                    this.getDigitcirStore().reload();
                }
            },
            '[id="digitcir_tool_export"]': {
                click: function () {
                    try {
                        var xls = new ActiveXObject("Excel.Application");
                    } catch (e) {
                        alert("查看你是否安装了Excel电子表格软件，同时浏览器必须使用“ActiveX控件！");
                        return "";
                    }

                    xls.visible = true;
                    var xlBook = xls.Workbooks.Add;
                    var xlsheet = xlBook.Worksheets(1);

                    xlsheet.Cells(1, 1).Value = "客户名称";
                    xlsheet.Cells(1, 2).Value = "客户分支单位";
                    xlsheet.Cells(1, 3).Value = "电路代号";
                    xlsheet.Cells(1, 4).Value = "营业编码";
                    xlsheet.Cells(1, 5).Value = "所属项目";
                    xlsheet.Cells(1, 6).Value = "电路属性";
                    xlsheet.Cells(1, 7).Value = "电路类型";
                    xlsheet.Cells(1, 8).Value = "电路速率";
                    xlsheet.Cells(1, 9).Value = "电路等级";
                    xlsheet.Cells(1, 10).Value = "电路路由";
                    xlsheet.Cells(1, 11).Value = "电路IP信息";
                    xlsheet.Cells(1, 12).Value = "接口类型";
                    xlsheet.Cells(1, 13).Value = "协议转换器型号";
                    xlsheet.Cells(1, 14).Value = "A端传输设备网管名称";
                    xlsheet.Cells(1, 15).Value = "A端传输设备端口";
                    xlsheet.Cells(1, 16).Value = "A端客户设备名称";
                    xlsheet.Cells(1, 17).Value = "A端客户设备端口";
                    xlsheet.Cells(1, 18).Value = "Z端传输设备网管名称";
                    xlsheet.Cells(1, 19).Value = "Z端传输设备端口";
                    xlsheet.Cells(1, 20).Value = "Z端客户设备名称";
                    xlsheet.Cells(1, 21).Value = "Z端客户设备端口";
                    xlsheet.Cells(1, 22).Value = "开通时间";
                    xlsheet.Cells(1, 23).Value = "备注";
                    xlsheet.Cells(1, 24).Value = "状态";

                    store = this.getDigitcirStore();
                    var i = 2;
                    store.each(function (record) {
                        xlsheet.Cells(i, 1).Value = record.get('custorm_name');
                        xlsheet.Cells(i, 2).Value = record.get('custorm_branch');
                        xlsheet.Cells(i, 3).Value = record.get('circute_code');
                        xlsheet.Cells(i, 4).Value = record.get('busi_code');
                        xlsheet.Cells(i, 5).Value = record.get('belong_project');
                        xlsheet.Cells(i, 6).Value = record.get('circute_property');
                        xlsheet.Cells(i, 7).Value = record.get('circute_type');
                        xlsheet.Cells(i, 8).Value = record.get('bandwidth');
                        xlsheet.Cells(i, 9).Value = record.get('circute_level');
                        xlsheet.Cells(i, 10).Value = record.get('circute_route');
                        xlsheet.Cells(i, 11).Value = record.get('circute_ip');
                        xlsheet.Cells(i, 12).Value = record.get('port_type');
                        xlsheet.Cells(i, 13).Value = record.get('protocal_conv_model');
                        xlsheet.Cells(i, 14).Value = record.get('a_trans_device_nmc_nm');
                        xlsheet.Cells(i, 15).Value = record.get('a_trans_device_port');
                        xlsheet.Cells(i, 16).Value = record.get('a_custorm_device_nm');
                        xlsheet.Cells(i, 17).Value = record.get('a_custorm_device_port');
                        xlsheet.Cells(i, 18).Value = record.get('z_trans_device_nmc_nm');
                        xlsheet.Cells(i, 18).Value = record.get('z_trans_device_port');
                        xlsheet.Cells(i, 19).Value = record.get('z_custorm_device_nm');
                        xlsheet.Cells(i, 20).Value = record.get('z_custorm_device_port');
                        xlsheet.Cells(i, 21).Value = record.get('turn_on_date');
                        xlsheet.Cells(i, 22).Value = record.get('remark');
                        xlsheet.Cells(i, 23).Value = record.get('state');
                        i++;
                    });
                }
            },

            '[id="digitcir_tool_add"]': {
                click: function () {
                    var digitcir_detailwindow = Ext.create('widget.digitcir_detailWindow', {
                        title: '添加数据电路信息',
                        iconCls: 'icon_add',
                        height: 606
                    });
                    var digitcir_detail_form = Ext.getCmp('digitcir_detail_form');
                    digitcir_detail_form.add([
                        {
                            xtype: 'button',
                            formBind: true,
                            text: '保存',
                            margin: '0 0 0 160',
                            iconCls: 'icon_save',
                            handler: function () {
                                digitcir_detail_form.getForm().submit({
                                    url: '/teldata/data/a_digit_circute.action',
                                    waitMsg: '正在保存数据...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        form.reset();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    ]);
                    digitcir_detailwindow.show();
                }
            },
            'viewport > tabPanel > panel > digitcir_query button[id="find"]': {
                click: function () {
                    this.getDigitcirStore().load();
                }
            },

//          数据电路控制事件==========================================================================================
            //公网VPN电路事件控制
            'viewport > tabPanel > panel > datacir_grid_pubnet': {
                afterrender: function (_this) {
                    datacir_pubnet_gridstore = _this.getStore();
                    datacir_pubnet_gridstore.on("beforeload", function () {
                        Ext.apply(datacir_pubnet_gridstore.proxy.extraParams, {
                            custorm_name: Ext.getCmp('datacir_pubnet_query_custorm_nm').getValue(),
                            custorm_branch: Ext.getCmp('datacir_pubnet_query_custorm_branch').getValue(),
                            belong_project: Ext.getCmp('datacir_pubnet_query_belong_project').getValue(),
                            bandwidth: Ext.getCmp('datacir_pubnet_query_bandwidth').getValue(),
                            ip: Ext.getCmp('datacir_pubnet_query_ip').getValue(),
                            inner_dev_nm: Ext.getCmp('datacir_pubnet_query_inner_dev_nm').getValue()
                        })
                    });
                    datacir_pubnet_gridstore.load();
                }
            },
            '[id="datacir_pubnet_find"]': {
                click: function () {
                    this.getDatacirpubnetStore().load();
                }
            },
            '[id="datacir_pubnet_tool_refresh"]': {
                click: function () {
                    this.getDatacirpubnetStore().load();
                }
            },
            '[id="datacir_pubnet_tool_export"]': {
                click: function () {
                    try {
                        var xls = new ActiveXObject("Excel.Application");
                    } catch (e) {
                        alert("查看你是否安装了Excel电子表格软件，同时浏览器必须使用“ActiveX控件！");
                        return "";
                    }

                    xls.visible = true;
                    var xlBook = xls.Workbooks.Add;
                    var xlsheet = xlBook.Worksheets(1);
                    xlsheet.Cells(1, 1).Value = "客户名称";
                    xlsheet.Cells(1, 2).Value = "客户分支单位";
                    xlsheet.Cells(1, 3).Value = "电路代码";
                    xlsheet.Cells(1, 4).Value = "营业编码";
                    xlsheet.Cells(1, 5).Value = "所属项目";
                    xlsheet.Cells(1, 6).Value = "电路速率";
                    xlsheet.Cells(1, 7).Value = "接入设备名称";
                    xlsheet.Cells(1, 8).Value = "接入设备端口";
                    xlsheet.Cells(1, 9).Value = "局端设备名称";
                    xlsheet.Cells(1, 10).Value = "局端设备端口";
                    xlsheet.Cells(1, 11).Value = "受理账号";
                    xlsheet.Cells(1, 12).Value = "IP地址";
                    xlsheet.Cells(1, 13).Value = "子网掩码";
                    xlsheet.Cells(1, 14).Value = "业务网关";
                    xlsheet.Cells(1, 15).Value = "对应vlan";
                    xlsheet.Cells(1, 16).Value = "PING-IP";
                    xlsheet.Cells(1, 17).Value = "局域网概述";
                    xlsheet.Cells(1, 18).Value = "开通时间";
                    xlsheet.Cells(1, 19).Value = "备注";

                    var store = this.getDatacirpubnetStore();
                    var i = 2;
                    store.each(function (record) {
                        xlsheet.Cells(i, 1).Value = record.get('custorm_name');
                        xlsheet.Cells(i, 2).Value = record.get('custorm_branch');
                        xlsheet.Cells(i, 3).Value = record.get('circute_code');
                        xlsheet.Cells(i, 4).Value = record.get('busi_code');
                        xlsheet.Cells(i, 5).Value = record.get('belong_project');
                        xlsheet.Cells(i, 6).Value = record.get('bandwidth');
                        xlsheet.Cells(i, 7).Value = record.get('join_dev_nm');
                        xlsheet.Cells(i, 8).Value = record.get('join_dev_port');
                        xlsheet.Cells(i, 9).Value = record.get('inner_dev_nm');
                        xlsheet.Cells(i, 10).Value = record.get('inner_dev_port');
                        xlsheet.Cells(i, 11).Value = record.get('account');
                        xlsheet.Cells(i, 12).Value = record.get('ip');
                        xlsheet.Cells(i, 13).Value = record.get('subnet');
                        xlsheet.Cells(i, 14).Value = record.get('busi_gateway');
                        xlsheet.Cells(i, 15).Value = record.get('vlan');
                        xlsheet.Cells(i, 16).Value = record.get('ping_ip');
                        xlsheet.Cells(i, 17).Value = record.get('lan_des');
                        xlsheet.Cells(i, 18).Value = record.get('turn_on_date');
                        xlsheet.Cells(i, 19).Value = record.get('remark');

                        i++;
                    })
                }
            },
            '[id="datacir_pubnet_tool_add"]': {
                click: function () {
                    var datacir_detailwindow = Ext.create('widget.datacir_detailWindow_pubnet', {
                        title: '添加数据电路信息',
                        iconCls: 'icon_add',
                        height: 600
                    });
                    var datacir_detail_form = Ext.getCmp('datacir_pubnet_detail_form');
                    datacir_detail_form.add([
                        {
                            xtype: 'button',
                            formBind: true,
                            text: '保存',
                            margin: '0 0 0 160',
                            iconCls: 'icon_save',
                            handler: function () {
                                datacir_detail_form.getForm().submit({
                                    url: '/teldata/data/a_pubnetvpn_circute.action',
                                    waitMsg: '正在保存数据...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        form.reset();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    ]);
                    datacir_detailwindow.show();
                }
            },

            'viewport > tabPanel > panel > datacir_grid_pubnet dataview': {
                itemdblclick: function (grid, record, item, index, e, eOpts) {
                    var datacir_detailwindow = Ext.create('widget.datacir_detailWindow_pubnet', {
                        title: record.get('custorm_name'),
                        height: 600
                    });
                    var datacir_detail_form = Ext.getCmp('datacir_pubnet_detail_form');
                    datacir_detail_form.loadRecord(record);
                    datacir_detail_form.add([
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_save',
                                    text: '保存',
                                    flex: 1,
                                    handler: function () {
                                        datacir_detail_form.getForm().submit({
                                            url: '/teldata/data/u_pubnetvpn_circute.action',
                                            waitMsg: '正在保存数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                form.reset();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据保存失败!");
                                            }
                                        });
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    flex: 0.3,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_trash',
                                    disabled: true,
                                    text: '删除',
                                    flex: 1,
                                    handler: function () {
                                        Ext.Ajax.request({
                                            url: '/teldata/data/d_pubnetvpn_circute.action',
                                            params: {
                                                custorm_name: record.get('custorm_name'),
                                                custorm_branch: record.get('custorm_branch')
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (response) {
                                                Ext.Msg.alert("删除", "删除记录成功!");
                                                datacir_detail_form.getForm().reset();
                                            },
                                            failure: function (response) {
                                                Ext.Msg.alert("删除", "删除记录失败!");
                                            }
                                        })
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                }
                            ]
                        }
                    ]);
                    datacir_detailwindow.show();
                }
            },

            'viewport > tabPanel > panel > datacir_grid_gov dataview': {
                itemdblclick: function (grid, record, item, index, e, eOpts) {
                    var datacir_detailwindow = Ext.create('widget.datacir_detailWindow_gov', {
                        title: record.get('custorm_name'),
                        height: 600
                    });
                    var datacir_detail_form = Ext.getCmp('datacir_gov_detail_form');
                    datacir_detail_form.loadRecord(record);
                    datacir_detail_form.add([
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_save',
                                    text: '保存',
                                    flex: 1,
                                    handler: function () {
                                        datacir_detail_form.getForm().submit({
                                            url: '/teldata/data/u_govvpn_circute.action',
                                            waitMsg: '正在保存数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                form.reset();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据保存失败!");
                                            }
                                        });
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    flex: 0.3,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_trash',
                                    disabled: true,
                                    text: '删除',
                                    flex: 1,
                                    handler: function () {
                                        Ext.Ajax.request({
                                            url: '/teldata/data/d_govvpn_circute.action',
                                            params: {
                                                custorm_name: record.get('custorm_name'),
                                                custorm_branch: record.get('custorm_branch')
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (response) {
                                                Ext.Msg.alert("删除", "删除记录成功!");
                                                datacir_detail_form.getForm().reset();
                                            },
                                            failure: function (response) {
                                                Ext.Msg.alert("删除", "删除记录失败!");
                                            }
                                        })
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                }
                            ]
                        }
                    ]);
                    datacir_detailwindow.show();
                }
            },

            //数据电路工具栏添加按钮事件
            '[id="datacir_gov_tool_add"]': {
                click: function () {
                    var datacir_detailwindow = Ext.create('widget.datacir_detailWindow_gov', {
                        title: '添加数据电路信息',
                        iconCls: 'icon_add',
                        height: 600
                    });
                    var datacir_detail_form = Ext.getCmp('datacir_gov_detail_form');
                    datacir_detail_form.add([
                        {
                            xtype: 'button',
                            formBind: true,
                            text: '保存',
                            margin: '0 0 0 160',
                            iconCls: 'icon_save',
                            handler: function () {
                                datacir_detail_form.getForm().submit({
                                    url: '/teldata/data/a_govvpn_circute.action',
                                    waitMsg: '正在保存数据...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        form.reset();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    ]);
                    datacir_detailwindow.show();
                }
            },


            '[id="warn_month_find"]': {
                click: function () {
                    this.getWarnStore().load();
                    this.getWarntenStore().load();
                }
            },

            '[id="warn_month_grid]': {
                afterrender: function (_this) {
                    var warn_month_gridstore = _this.getStore();
                    warn_month_gridstore.on("beforeload", function () {
                        Ext.apply(warn_month_gridstore.proxy.extraParams, {
                            start_date: Ext.getCmp('warn_query_month_start_date').getValue(),
                            end_date: Ext.getCmp('warn_query_month_end_date').getValue()
                        })
                    });
                    warn_month_gridstore.load();


                    var warn_key_gridstore = this.getWarntenStore();
                    warn_key_gridstore.on("beforeload", function () {
                        Ext.apply(warn_key_gridstore.proxy.extraParams, {
                            start_date: Ext.getCmp('warn_query_month_start_date').getValue(),
                            end_date: Ext.getCmp('warn_query_month_end_date').getValue()
                        })
                    });
                    warn_key_gridstore.load();
                }
            },

            '[id="warn_week_grid]': {
                afterrender: function (_this) {
                    var warn_week_gridstore = _this.getStore();
                    warn_week_gridstore.on("beforeload", function () {
                        Ext.apply(warn_week_gridstore.proxy.extraParams, {
                            start_date: Ext.getCmp('warn_query_week_start_date').getValue(),
                            end_date: Ext.getCmp('warn_query_week_end_date').getValue()
                        })
                    });
                    warn_week_gridstore.load();
                }
            },

            '[id="warn_week_find"]': {
                click: function () {
                    this.getWarnweekStore().load();
                }
            },

            '[id="mine_bd_busi_per"]': {
                afterrender: function () {
                    var busi_store = this.getBusiPerStore();
                    busi_store.on("beforeload", function () {
                        Ext.apply(busi_store.proxy.extraParams, {
                            start_date: Ext.getCmp('mine_bd_query_start').getValue(),
                            end_date: Ext.getCmp('mine_bd_query_end').getValue()
                        })
                    });
                }
            },

            '[id="mine_bd_cause_per"]': {
                afterrender: function () {
                    var cause_store = this.getCauseperStore();
                    cause_store.on("beforeload", function () {
                        Ext.apply(cause_store.proxy.extraParams, {
                            start_date: Ext.getCmp('mine_bd_query_start').getValue(),
                            end_date: Ext.getCmp('mine_bd_query_end').getValue()
                        })
                    });
                }
            },

            '[id="mine_bd_cause_type_per"]': {
                afterrender: function () {
                    var cause_type_store = this.getCausepertypeStore();
                    cause_type_store.on("beforeload", function () {
                        Ext.apply(cause_type_store.proxy.extraParams, {
                            start_date: Ext.getCmp('mine_bd_query_start').getValue(),
                            end_date: Ext.getCmp('mine_bd_query_end').getValue()
                        })
                    });
                }
            },

            '[id="mine_bd_find"]': {
                click: function () {
                    this.getBusiPerStore().load();
                    this.getCausepertypeStore().load();
                    this.getCauseperStore().load();
                }
            },

            '[id="total_bd_area_per"]': {
                afterrender: function () {
                    var area_store = this.getAreaPerStore();
                    area_store.on("beforeload", function () {
                        Ext.apply(area_store.proxy.extraParams, {
                            start_date: Ext.getCmp('total_bd_query_start').getValue(),
                            end_date: Ext.getCmp('total_bd_query_end').getValue()
                        })
                    });
                }
            },

            '[id="total_bd_duty_per"]': {
                afterrender: function () {
                    var duty_store = this.getDutyPerStore();
                    duty_store.on("beforeload", function () {
                        Ext.apply(duty_store.proxy.extraParams, {
                            start_date: Ext.getCmp('total_bd_query_start').getValue(),
                            end_date: Ext.getCmp('total_bd_query_end').getValue()
                        })
                    });
                }
            },

            '[id="total_bd_find"]': {
                click: function () {
                    this.getAreaPerStore().load();
                    this.getDutyPerStore().load();
                }
            },

            '[id="datacir_gov_find"]': {
                click: function () {
                    this.getDatacirgovStore().load();
                }
            },
            '[id="datacir_gov_tool_refresh"]': {
                click: function () {
                    this.getDatacirgovStore().load();
                }
            },//数据电路工具栏添加按钮事件
            '[id="datacir_gov_tool_export"]': {
                click: function () {
                    try {
                        var xls = new ActiveXObject("Excel.Application");
                    } catch (e) {
                        alert("查看你是否安装了Excel电子表格软件，同时浏览器必须使用“ActiveX控件！");
                        return "";
                    }

                    xls.visible = true;
                    var xlBook = xls.Workbooks.Add;
                    var xlsheet = xlBook.Worksheets(1);
                    xlsheet.Cells(1, 1).Value = "客户名称";
                    xlsheet.Cells(1, 2).Value = "客户分支单位";
                    xlsheet.Cells(1, 3).Value = "电路代码";
                    xlsheet.Cells(1, 4).Value = "营业编码";
                    xlsheet.Cells(1, 5).Value = "所属项目";
                    xlsheet.Cells(1, 6).Value = "电路速率";
                    xlsheet.Cells(1, 7).Value = "接入设备名称";
                    xlsheet.Cells(1, 8).Value = "接入设备端口";
                    xlsheet.Cells(1, 9).Value = "局端设备名称";
                    xlsheet.Cells(1, 10).Value = "局端设备端口";
                    xlsheet.Cells(1, 11).Value = "受理账号";
                    xlsheet.Cells(1, 12).Value = "IP地址";
                    xlsheet.Cells(1, 13).Value = "子网掩码";
                    xlsheet.Cells(1, 14).Value = "业务网关";
                    xlsheet.Cells(1, 15).Value = "对应vlan";
                    xlsheet.Cells(1, 16).Value = "PING-IP";
                    xlsheet.Cells(1, 17).Value = "局域网概述";
                    xlsheet.Cells(1, 18).Value = "开通时间";
                    xlsheet.Cells(1, 19).Value = "备注";

                    var store = this.getDatacirgovStore();
                    var i = 2;
                    store.each(function (record) {
                        xlsheet.Cells(i, 1).Value = record.get('custorm_name');
                        xlsheet.Cells(i, 2).Value = record.get('custorm_branch');
                        xlsheet.Cells(i, 3).Value = record.get('circute_code');
                        xlsheet.Cells(i, 4).Value = record.get('busi_code');
                        xlsheet.Cells(i, 5).Value = record.get('belong_project');
                        xlsheet.Cells(i, 6).Value = record.get('bandwidth');
                        xlsheet.Cells(i, 7).Value = record.get('join_dev_nm');
                        xlsheet.Cells(i, 8).Value = record.get('join_dev_port');
                        xlsheet.Cells(i, 9).Value = record.get('inner_dev_nm');
                        xlsheet.Cells(i, 10).Value = record.get('inner_dev_port');
                        xlsheet.Cells(i, 11).Value = record.get('account');
                        xlsheet.Cells(i, 12).Value = record.get('ip');
                        xlsheet.Cells(i, 13).Value = record.get('subnet');
                        xlsheet.Cells(i, 14).Value = record.get('busi_gateway');
                        xlsheet.Cells(i, 15).Value = record.get('vlan');
                        xlsheet.Cells(i, 16).Value = record.get('ping_ip');
                        xlsheet.Cells(i, 17).Value = record.get('lan_des');
                        xlsheet.Cells(i, 18).Value = record.get('turn_on_date');
                        xlsheet.Cells(i, 19).Value = record.get('remark');

                        i++;
                    })
                }
            },
//          互联网电路
            'viewport > tabPanel > panel > datacir_grid': {
                afterrender: function (_this) {
                    datacir_gridstore = _this.getStore();
                    datacir_gridstore.on("beforeload", function () {
                        Ext.apply(datacir_gridstore.proxy.extraParams, {
                            custorm_name: Ext.getCmp('datacir_query_custorm_nm').getValue(),
                            custorm_branch: Ext.getCmp('datacir_query_custorm_branch').getValue(),
                            belong_project: Ext.getCmp('datacir_query_belong_project').getValue(),
                            bandwidth: Ext.getCmp('datacir_query_bandwidth').getValue(),
                            ip: Ext.getCmp('datacir_query_ip').getValue(),
                            inner_dev_nm: Ext.getCmp('datacir_query_inner_dev_nm').getValue()
                        })
                    });
                    datacir_gridstore.load();
                }
            },

            'viewport > tabPanel > panel > datacir_grid dataview': {
                itemdblclick: function (grid, record, item, index, e, eOpts) {
                    var datacir_detailwindow = Ext.create('widget.datacir_detailWindow', {
                        title: record.get('custorm_name'),
                        height: 600
                    });
                    var datacir_detail_form = Ext.getCmp('datacir_detail_form');
                    datacir_detail_form.loadRecord(record);
                    datacir_detail_form.add([
                        {
                            xtype: 'panel',
                            border: false,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_save',
                                    text: '保存',
                                    flex: 1,
                                    handler: function () {
                                        datacir_detail_form.getForm().submit({
                                            url: '/teldata/data/u_data_circute.action',
                                            waitMsg: '正在保存数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                form.reset();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据保存失败!");
                                            }
                                        });
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    flex: 0.3,
                                    border: false
                                },
                                {
                                    xtype: 'button',
                                    iconCls: 'icon_trash',
                                    disabled: true,
                                    text: '删除',
                                    flex: 1,
                                    handler: function () {
                                        Ext.Ajax.request({
                                            url: '/teldata/data/d_data_circute.action',
                                            params: {
                                                custorm_name: record.get('custorm_name'),
                                                custorm_branch: record.get('custorm_branch')
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (response) {
                                                Ext.Msg.alert("删除", "删除记录成功!");
                                                datacir_detail_form.getForm.reset();
                                            },
                                            failure: function (response) {
                                                Ext.Msg.alert("删除", "删除记录失败!");
                                            }
                                        })
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: false
                                }
                            ]
                        }
                    ]);
                    datacir_detailwindow.show();
                }
            },
            'viewport > tabPanel > panel > datacir_query button[id="datacir_find"]': {
                click: function () {
                    this.getDatacirStore().load();
                }
            },
            //数据电路工具栏添加按钮事件
            '[id="datacir_tool_add"]': {
                click: function () {
                    var datacir_detailwindow = Ext.create('widget.datacir_detailWindow', {
                        title: '添加数据电路信息',
                        iconCls: 'icon_add',
                        height: 600
                    });
                    var datacir_detail_form = Ext.getCmp('datacir_detail_form');
                    datacir_detail_form.add([
                        {
                            xtype: 'button',
                            formBind: true,
                            text: '保存',
                            margin: '0 0 0 160',
                            iconCls: 'icon_save',
                            handler: function () {
                                datacir_detail_form.getForm().submit({
                                    url: '/teldata/data/a_data_circute.action',
                                    waitMsg: '正在保存数据...',
                                    success: function (form, action) {
                                        Ext.Msg.alert("成功", "数据保存成功!");
                                        form.reset();
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert("失败", "数据保存失败!");
                                    }
                                });
                            }
                        }
                    ]);
                    datacir_detailwindow.show();
                }
            },
            //数据电路工具栏添加按钮事件
            '[id="datacir_tool_refresh"]': {
                click: function () {
                    this.getDatacirStore().load();
                }
            },
            //数据电路工具栏添加按钮事件
            '[id="datacir_tool_export"]': {
                click: function () {
                    try {
                        var xls = new ActiveXObject("Excel.Application");
                    } catch (e) {
                        alert("查看你是否安装了Excel电子表格软件，同时浏览器必须使用“ActiveX控件！");
                        return "";
                    }

                    xls.visible = true;
                    var xlBook = xls.Workbooks.Add;
                    var xlsheet = xlBook.Worksheets(1);
                    xlsheet.Cells(1, 1).Value = "客户名称";
                    xlsheet.Cells(1, 2).Value = "客户分支单位";
                    xlsheet.Cells(1, 3).Value = "电路代码";
                    xlsheet.Cells(1, 4).Value = "营业编码";
                    xlsheet.Cells(1, 5).Value = "所属项目";
                    xlsheet.Cells(1, 6).Value = "电路速率";
                    xlsheet.Cells(1, 7).Value = "接入设备名称";
                    xlsheet.Cells(1, 8).Value = "接入设备端口";
                    xlsheet.Cells(1, 9).Value = "局端设备名称";
                    xlsheet.Cells(1, 10).Value = "局端设备端口";
                    xlsheet.Cells(1, 11).Value = "受理账号";
                    xlsheet.Cells(1, 12).Value = "IP地址";
                    xlsheet.Cells(1, 13).Value = "子网掩码";
                    xlsheet.Cells(1, 14).Value = "业务网关";
                    xlsheet.Cells(1, 15).Value = "对应vlan";
                    xlsheet.Cells(1, 16).Value = "PING-IP";
                    xlsheet.Cells(1, 17).Value = "局域网概述";
                    xlsheet.Cells(1, 18).Value = "开通时间";
                    xlsheet.Cells(1, 19).Value = "备注";

                    var store = this.getDatacirStore();
                    var i = 2;
                    store.each(function (record) {
                        xlsheet.Cells(i, 1).Value = record.get('custorm_name');
                        xlsheet.Cells(i, 2).Value = record.get('custorm_branch');
                        xlsheet.Cells(i, 3).Value = record.get('circute_code');
                        xlsheet.Cells(i, 4).Value = record.get('busi_code');
                        xlsheet.Cells(i, 5).Value = record.get('belong_project');
                        xlsheet.Cells(i, 6).Value = record.get('bandwidth');
                        xlsheet.Cells(i, 7).Value = record.get('join_dev_nm');
                        xlsheet.Cells(i, 8).Value = record.get('join_dev_port');
                        xlsheet.Cells(i, 9).Value = record.get('inner_dev_nm');
                        xlsheet.Cells(i, 10).Value = record.get('inner_dev_port');
                        xlsheet.Cells(i, 11).Value = record.get('account');
                        xlsheet.Cells(i, 12).Value = record.get('ip');
                        xlsheet.Cells(i, 13).Value = record.get('subnet');
                        xlsheet.Cells(i, 14).Value = record.get('busi_gateway');
                        xlsheet.Cells(i, 15).Value = record.get('vlan');
                        xlsheet.Cells(i, 16).Value = record.get('ping_ip');
                        xlsheet.Cells(i, 17).Value = record.get('lan_des');
                        xlsheet.Cells(i, 18).Value = record.get('turn_on_date');
                        xlsheet.Cells(i, 19).Value = record.get('remark');

                        i++;
                    })
                }
            },
            'viewport > tabPanel > panel > datacir_query button[id="datacir_reset"]': {
                click: function () {
                    Ext.getCmp('datacir_query').form.reset();
                    this.getDatacirStore().load();
                }
            }

        });
    },


//    政务网VPN电路事件控制
    'viewport > tabPanel > panel > datacir_grid_gov': {
        afterrender: function (_this) {
            alert("gov render");
            datacir_gridstore = _this.getStore();
            datacir_gridstore.on("beforeload", function () {
                Ext.apply(datacir_gridstore.proxy.extraParams, {
                    custorm_name: Ext.getCmp('datacir_gov_query_custorm_nm').getValue(),
                    custorm_branch: Ext.getCmp('datacir_gov_query_custorm_branch').getValue(),
                    belong_project: Ext.getCmp('datacir_gov_query_belong_project').getValue(),
                    bandwidth: Ext.getCmp('datacir_gov_query_bandwidth').getValue(),
                    ip: Ext.getCmp('datacir_gov_query_ip').getValue(),
                    inner_dev_nm: Ext.getCmp('datacir_gov_query_inner_dev_nm').getValue()
                })
            });
        }
    },


    'viewport > tabPanel > panel > datacir_query_gov button[id="datacir_gov_find"]': {
        click: function () {
            this.getDatacirgovStore().load();
        }
    },

    bindGridToPanel: function (grid, record) {
    }
});
