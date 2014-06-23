Ext.define('App.view.storeroom.tyres.dataanay.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.tyresdataanay_query',
    split: true,
    height: 120,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'qt_analysis_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加数据分析',
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
                                                        fieldLabel: '数据分析编号',
                                                        name: 'id'
                                                    },
                                                    {
                                                        fieldLabel: '花纹',
                                                        name: 'tartan'
                                                    },
                                                    {
                                                        fieldLabel: '报废原因',
                                                        name: 'scrap'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均价格',
                                                        name: 'price'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均使用里程',
                                                        name: 'useml'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均刻沟贡献率',
                                                        name: 'contrate'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均换位次数',
                                                        name: 'convoynum'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均气压调整次数',
                                                        name: 'presnum'
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
                                                        fieldLabel: '规格',
                                                        name: 'spec'
                                                    },
                                                    {
                                                        fieldLabel: '车胎',
                                                        name: 'tyreno'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '数量',
                                                        name: 'numbers'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均百公里成本',
                                                        name: 'costs'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均刻沟后里程数',
                                                        name: 'ditchml'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均修补次数',
                                                        name: 'repairnum'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均服务金额',
                                                        name: 'service'
                                                    },
                                                    {
                                                        xtype: 'numberfield',
                                                        fieldLabel: '平均使用月数',
                                                        name: 'uesmonth'
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
                                                            url: 'add_trqtanalysis_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_qt_analysis').getStore().reload();
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
                            }).show(Ext.get('qt_analysis_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'qt_analysis_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_qt_analysis').getSelectionModel();
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
                                            fieldLabel: '数据分析编号',
                                            name: 'id'
                                        },
                                        {
                                            fieldLabel: '花纹',
                                            name: 'tartan'
                                        },
                                        {
                                            fieldLabel: '报废原因',
                                            name: 'scrap'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均价格',
                                            name: 'price'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均使用里程',
                                            name: 'useml'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均刻沟贡献率',
                                            name: 'contrate'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均换位次数',
                                            name: 'convoynum'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均气压调整次数',
                                            name: 'presnum'
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
                                            fieldLabel: '规格',
                                            name: 'spec'
                                        },
                                        {
                                            fieldLabel: '车胎',
                                            name: 'tyreno'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '数量',
                                            name: 'numbers'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均百公里成本',
                                            name: 'costs'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均刻沟后里程数',
                                            name: 'ditchml'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均修补次数',
                                            name: 'repairnum'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均服务金额',
                                            name: 'service'
                                        },
                                        {
                                            xtype: 'numberfield',
                                            fieldLabel: '平均使用月数',
                                            name: 'uesmonth'
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
                                                url: 'update_trqtanalysis_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_qt_analysis').getStore().reload();
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
                            height: 500,
                            modal: true,
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('qt_analysis_edit'));
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
                                var sm = Ext.getCmp('grid_qt_analysis').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_trqtanalysis_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_qt_analysis').getStore().reload();
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
                    fieldLabel: '胎号',
                    name: 'custorm_nm',
                    emptyText: '胎号'
                },
                {
                    allowBlank: true,
                    fieldLabel: '报废原因',
                    name: 'belong_project',
                    emptyText: '报废原因'
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
                    fieldLabel: '数量',
                    emptyText: '数量'

                },
                {
                    allowBlank: true,
                    fieldLabel: '平均价格',
                    name: 'inner_dev_nm',
                    emptyText: '平均价格'
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