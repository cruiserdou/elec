Ext.define('App.view.truck.transdetail.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.transdetail_query',
    split: true,
    height: 120,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'traffic_details_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加行车明细',
                                modal: true,
                                width: 600,
                                height: 600,
                                iconCls: 'icon_user',
                                bodyPadding: 2,
                                border: false,
                                layout: 'fit',
                                defaults: {
                                    width: 200,
                                    allowBlank: false
                                },
                                items: [
                                    {
                                        xtype: 'form',
                                        bodyPadding: 20,
                                        fieldDefaults: {
                                            labelAlign: 'right',
                                            labelWidth: 60
                                        },
                                        layout: 'column',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                height: 500,
                                                border: false,
                                                columnWidth: .5,
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'strech',
                                                    pack: 'start'
                                                },
                                                defaults: {
                                                    xtype: 'textfield'
                                                },
                                                items: [
                                                    {
                                                        fieldLabel: '行车明细编号',
                                                        name: 'id'
                                                    },
                                                    {
                                                        fieldLabel: '装货单位',
                                                        name: 'load'
                                                    },
                                                    {
                                                        fieldLabel: '装货吨位',
                                                        name: 'loadtg'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '物损损耗',
                                                        name: 'loss'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '过路费',
                                                        name: 'tolls'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '罚款(元)',
                                                        name: 'penalty'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '停车费(元/次)',
                                                        name: 'park'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '保底工资(元)',
                                                        name: 'base'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '实际工资(元)',
                                                        name: 'realwg'
                                                    },
                                                    {
                                                        fieldLabel: '驾驶员',
                                                        name: 'driver'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                height: 500,
                                                border: false,
                                                columnWidth: .5,
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'strech',
                                                    pack: 'start'
                                                },
                                                defaults: {
                                                    xtype: 'textfield'
                                                },
                                                items: [
                                                    {
                                                        fieldLabel: '日期',
                                                        name: 'tracdt',
                                                        xtype: 'datefield',
                                                        format: 'Y-m-d'
                                                    },
                                                    {
                                                        fieldLabel: '卸货单位',
                                                        name: 'unload'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '卸货吨位',
                                                        name: 'unloadtg'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '耗油(元)',
                                                        name: 'gets'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '个人奖金(元)',
                                                        name: 'bonus'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '修理费(元/次)',
                                                        name: 'repair'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '工资运费(元)',
                                                        name: 'freight'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '生活费',
                                                        name: 'alimony'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '实际运费(元)',
                                                        name: 'realft'
                                                    },
                                                    {
                                                        fieldLabel: '备注',
                                                        name: 'remark'
                                                    }
                                                ]
                                            }
                                        ],
                                        buttonAlign : "center",
                                        buttons: [
                                            {
                                                text: '保存',
                                                iconCls: 'icon_save',
                                                handler: function(){
                                                    var form = this.up('form').getForm();
                                                    if (form.isValid()){
                                                        form.submit({
                                                            url: 'add_tradetails_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_traffic_details').getStore().reload();
                                                            },
                                                            failure: function(form, action){
                                                                Ext.Msg.alert("失败", "数据保存失败!");
                                                            }
                                                        });
                                                    }
                                                }
                                            },
                                            {
                                                text: '重置',
                                                iconCls: 'icon_reset',
                                                handler: function () {
                                                    this.up('form').getForm().reset();
                                                }
                                            }
                                        ]
                                    }

                                ]
                            }).show(Ext.get('traffic_details_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'traffic_details_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_traffic_details').getSelectionModel();
                        var record = sm.getSelection()[0];

                        if(!record){
                            Ext.Msg.alert('信息','请选择要编辑的数据');
                            return;
                        }
                        var record = sm.getSelection()[0];

                        var editForm = null;
                        var editWindow = null;
                        editForm = new Ext.form.FormPanel({
                            xtype: 'form',
                            bodyPadding: 20,
                            fieldDefaults: {
                                labelAlign: 'right',
                                labelWidth: 60
                            },
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'panel',
                                    height: 500,
                                    border: false,
                                    columnWidth: .5,
                                    layout: {
                                        type: 'vbox',
                                        align: 'strech',
                                        pack: 'start'
                                    },
                                    defaults: {
                                        xtype: 'textfield'
                                    },
                                    items: [
                                        {
                                            readOnly: true,
                                            fieldLabel: '行车明细编号',
                                            name: 'id'
                                        },
                                        {
                                            fieldLabel: '装货单位',
                                            name: 'load'
                                        },
                                        {
                                            fieldLabel: '装货吨位',
                                            name: 'loadtg'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '物损损耗',
                                            name: 'loss'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '过路费',
                                            name: 'tolls'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '罚款(元)',
                                            name: 'penalty'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '停车费(元/次)',
                                            name: 'park'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '保底工资(元)',
                                            name: 'base'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '实际工资(元)',
                                            name: 'realwg'
                                        },
                                        {
                                            fieldLabel: '驾驶员',
                                            name: 'driver'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    height: 500,
                                    border: false,
                                    columnWidth: .5,
                                    layout: {
                                        type: 'vbox',
                                        align: 'strech',
                                        pack: 'start'
                                    },
                                    defaults: {
                                        xtype: 'textfield'
                                    },
                                    items: [
                                        {
                                            fieldLabel: '日期',
                                            name: 'tracdt',
                                            xtype: 'datefield',
                                            format: 'Y-m-d'
                                        },
                                        {
                                            fieldLabel: '卸货单位',
                                            name: 'unload'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '卸货吨位',
                                            name: 'unloadtg'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '耗油(元)',
                                            name: 'gets'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '个人奖金(元)',
                                            name: 'bonus'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '修理费(元/次)',
                                            name: 'repair'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '工资运费(元)',
                                            name: 'freight'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '生活费',
                                            name: 'alimony'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '实际运费(元)',
                                            name: 'realft'
                                        },
                                        {
                                            fieldLabel: '备注',
                                            name: 'remark'
                                        }
                                    ]
                                }
                            ],
                            buttonAlign : "center",
                            buttons: [
                                {
                                    text: '保存',
                                    iconCls: 'icon_save',
                                    handler: function(){
                                        var form = this.up('form').getForm();
                                        if (form.isValid()){
                                            form.submit({
                                                url: 'update_tradetails_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_traffic_details').getStore().reload();
                                                },
                                                failure: function(form, action){
                                                    Ext.Msg.alert("失败", "数据保存失败!");
                                                }
                                            });
                                        }
                                    }
                                },
                                {
                                    text: '重置',
                                    iconCls: 'icon_reset',
                                    handler: function () {
                                        this.up('form').getForm().reset();
                                    }
                                }
                            ]
                        });
                        editWindow = new Ext.Window({
                            layout: 'fit',
                            width: 600,
                            height: 550,
                            modal: true,
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('grid_traffic_details'));
                        editForm.getForm().loadRecord(record);
                    }
                },
                {
                    text: '导出',
                    iconCls: 'icon_excel'
                },
                {
                    text: '刷新',
                    iconCls: 'icon_table_refresh'
                },
                {
                    text: '删除',
                    iconCls: 'icon_delete',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_traffic_details').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_tradetails_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_traffic_details').getStore().reload();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert("失败", "数据删除失败!");
                                            }
                                        });
                                    }
                                } else {
                                    Ext.Msg.alert('提示', '请选择要删除的记录');
                                }
                            }
                        });
                    }
                }
            ]
        }
    ],
    bodyPadding: 20,
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            columnWidth: .4,
            border: false,
            defaultType: 'textfield',
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    allowBlank: true,
                    fieldLabel: '驾驶员编号',
                    name: 'custorm_nm',
                    emptyText: '驾驶员编号'
                },
                {
                    allowBlank: true,
                    fieldLabel: '驾驶员姓名',
                    name: 'belong_project',
                    emptyText: '驾驶员姓名'
                }
            ]
        },
        {

            xtype: 'panel',
            columnWidth: .4,
            border: false,
            defaultType: 'textfield',
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    allowBlank: true,
                    fieldLabel: '日期',
                    emptyText: '日期'
                },
                {
                    allowBlank: true,
                    fieldLabel: '实际费用',
                    name: 'inner_dev_nm',
                    emptyText: '实际费用'
                }
            ]
        },
        {
            xtype: 'panel',
            columnWidth: .2,
            border: false,
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'button',
                    iconCls: 'icon_search',
                    text: '查找'
                },
                {
                    xtype: 'panel',
                    height: 10,
                    border: false
                },
                {
                    xtype: 'button',
                    iconCls: 'icon_reset',
                    text: '重置'
                }
            ]
        }
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});