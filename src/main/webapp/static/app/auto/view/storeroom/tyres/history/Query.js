Ext.define('App.view.storeroom.tyres.history.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tyreshistory_query',
    split: true,
    height: 120,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'tire_history_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加轮胎历史记录',
                                modal: true,
                                width: 900,
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
                                                columnWidth:1/3,
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
                                                        fieldLabel: '轮胎历史记录编号',
                                                        name: 'id'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '数量',
                                                        name: 'tirenum'
                                                    },
                                                    {
                                                        fieldLabel: '胎号',
                                                        name: 'tyreno'
                                                    },
                                                    {
                                                        fieldLabel: '新胎/翻新胎',
                                                        name: 'isnum'
                                                    },
                                                    {
                                                        fieldLabel: '安装日期',
                                                        name: 'install',
                                                        xtype: 'datefield',
                                                        format: 'Y-m-d'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '刻沟后里程数',
                                                        name: 'ditchml'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '拆卸时里程',
                                                        name: 'dispartml'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '修补(元)',
                                                        name: 'repair'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '当期使用里程',
                                                        name: 'othservice'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '当前里程',
                                                        name: 'curuseml'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '累计磨损花纹',
                                                        name: 'wear'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '换位次数',
                                                        name: 'convoynum'
                                                    },
                                                    {
                                                        fieldLabel: '刻沟',
                                                        name: 'ditch'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                height: 500,
                                                border: false,
                                                columnWidth:1/3,
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
                                                        fieldLabel: '车队名称',
                                                        name: 'fleet'
                                                    },
                                                    {
                                                        fieldLabel: '位置',
                                                        name: 'positions'
                                                    },
                                                    {
                                                        fieldLabel: '规格',
                                                        name: 'spec'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '采购价',
                                                        name: 'price'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '安装花纹深度',
                                                        name: 'instdp'
                                                    },
                                                    {
                                                        fieldLabel: '拆卸日期',
                                                        name: 'dispart',
                                                        xtype: 'datefield',
                                                        format: 'Y-m-d'
                                                    },
                                                    {
                                                        fieldLabel: '拆卸原因',
                                                        name: 'disassem'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '换位(元)',
                                                        name: 'convoy'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '刻沟增加深度',
                                                        name: 'ditchdp'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '当期百公里成本',
                                                        name: 'curcosts'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '里程预测',
                                                        name: 'forecastml'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '气压调整次数',
                                                        name: 'presnum'
                                                    },
                                                    {
                                                        fieldLabel: '备注',
                                                        name: 'remark'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                height: 500,
                                                border: false,
                                                columnWidth: 1/3,
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
                                                        fieldLabel: '车牌号',
                                                        name: 'plate'
                                                    },
                                                    {
                                                        fieldLabel: '品牌',
                                                        name: 'brand'
                                                    },
                                                    {
                                                        fieldLabel: '花纹',
                                                        name: 'tartan'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '原始花纹深度',
                                                        name: 'origdp'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '安装时里程',
                                                        name: 'instuseml'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '拆卸花纹深度',
                                                        name: 'dispartdp'
                                                    },
                                                    {
                                                        fieldLabel: '报废原因',
                                                        name: 'scrap'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '修补次数',
                                                        name: 'pres'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '当期花纹磨损',
                                                        name: 'curwear'
                                                    }  ,
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '毫米价值',
                                                        name: 'mmvalue'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '修补次数',
                                                        name: 'repairnum'
                                                    }  ,
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '服务金额',
                                                        name: 'service'
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
                                                            url: 'add_trhistory_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_tire_history').getStore().reload();
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
                            }).show(Ext.get('tire_history_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'tire_history_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_tire_history').getSelectionModel();
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
                                    columnWidth: 1/3,
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
                                            fieldLabel: '轮胎历史记录编号',
                                            name: 'id'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '数量',
                                            name: 'tirenum'
                                        },
                                        {
                                            fieldLabel: '胎号',
                                            name: 'tyreno'
                                        },
                                        {
                                            fieldLabel: '新胎/翻新胎',
                                            name: 'isnum'
                                        },
                                        {
                                            fieldLabel: '安装日期',
                                            name: 'install',
                                            xtype: 'datefield',
                                            format: 'Y-m-d'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '刻沟后里程数',
                                            name: 'ditchml'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '拆卸时里程',
                                            name: 'dispartml'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '修补(元)',
                                            name: 'repair'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '当期使用里程',
                                            name: 'othservice'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '当前里程',
                                            name: 'curuseml'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '累计磨损花纹',
                                            name: 'wear'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '换位次数',
                                            name: 'convoynum'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    height: 500,
                                    border: false,
                                    columnWidth: 1/3,
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
                                            fieldLabel: '车队名称',
                                            name: 'fleet'
                                        },
                                        {
                                            fieldLabel: '位置',
                                            name: 'positions'
                                        },
                                        {
                                            fieldLabel: '规格',
                                            name: 'spec'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '采购价',
                                            name: 'price'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '安装花纹深度',
                                            name: 'instdp'
                                        },
                                        {
                                            fieldLabel: '拆卸日期',
                                            name: 'dispart',
                                            xtype: 'datefield',
                                            format: 'Y-m-d'
                                        },
                                        {
                                            fieldLabel: '拆卸原因',
                                            name: 'disassem'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '换位(元)',
                                            name: 'convoy'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '刻沟增加深度',
                                            name: 'ditchdp'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '当期百公里成本',
                                            name: 'curcosts'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '里程预测',
                                            name: 'forecastml'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '气压调整次数',
                                            name: 'presnum'
                                        },
                                        {
                                            fieldLabel: '备注',
                                            name: 'remark'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    height: 500,
                                    border: false,
                                    columnWidth: 1/3,
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
                                            fieldLabel: '车牌号',
                                            name: 'plate'
                                        },
                                        {
                                            fieldLabel: '品牌',
                                            name: 'brand'
                                        },
                                        {
                                            fieldLabel: '花纹',
                                            name: 'tartan'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '原始花纹深度',
                                            name: 'origdp'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '安装时里程',
                                            name: 'instuseml'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '拆卸花纹深度',
                                            name: 'dispartdp'
                                        },
                                        {
                                            fieldLabel: '报废原因',
                                            name: 'scrap'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '修补次数',
                                            name: 'pres'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '当期花纹磨损',
                                            name: 'curwear'
                                        }  ,
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '毫米价值',
                                            name: 'mmvalue'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '修补次数',
                                            name: 'repairnum'
                                        }  ,
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '服务金额',
                                            name: 'service'
                                        },
                                        {
                                            fieldLabel: '刻沟',
                                            name: 'ditch'
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
                                                url: 'update_trhistory_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_tire_history').getStore().reload();
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
                            width: 800,
                            height: 600,
                            modal: true,
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('tire_history_edit'));
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
                                var sm = Ext.getCmp('grid_tire_history').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_trhistory_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_tire_history').getStore().reload();
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
                    fieldLabel: '车队',
                    name: 'custorm_nm',
                    emptyText: '车队'
                },
                {
                    allowBlank: true,
                    fieldLabel: '车号',
                    name: 'belong_project',
                    emptyText: '车号'
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
                    value: '品牌',
                    allowBlank: true,
                    fieldLabel: '品牌'
                },
                {
                    allowBlank: true,
                    fieldLabel: '安装日期',
                    name: 'inner_dev_nm',
                    emptyText: '安装日期'
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