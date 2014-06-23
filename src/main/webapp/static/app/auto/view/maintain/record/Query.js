Ext.define('App.view.maintain.record.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.maintain_query',
    split: true,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'repairs_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加维修保养记录',
                                modal: true,
                                iconCls: 'icon_add',
                                width: 290,
                                height: 500,
                                border: false,
                                layout: 'fit',
                                defaults: {
                                    width: 200,
                                    allowBlank: false
                                },
                                items: [
                                    {
                                        xtype: 'form',
                                        frame: true,
                                        bodyPadding: 10,
                                        fieldDefaults: {
                                            labelAlign: 'left',
                                            labelWidth: 70
                                        },
                                        defaults: {
                                            labelAlign: 'right',
                                            xtype: 'textfield'
                                        },
                                        items: [
                                            {
                                                fieldLabel: '维修保养记录编号',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '车牌号',
                                                name: 'plate'
                                            },
                                            {
                                                fieldLabel: '送修日期',
                                                name: 'arriveddt',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '预取车日期',
                                                name: 'estimatedt',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '实际取车车日期',
                                                name: 'practicaldt',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '送修人',
                                                name: 'arrivedper'
                                            },

                                            {
                                                fieldLabel: '取车人',
                                                name: 'repairper'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '本次维修保养费(元)',
                                                name: 'fees'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '年检费用(元)',
                                                name: 'costs'
                                            },
                                            {
                                                fieldLabel: ' 送修类型',
                                                name: 'type'
                                            },
                                            {
                                                fieldLabel: ' 修理厂',
                                                name: 'garage'
                                            },
                                            {
                                                fieldLabel: '备注',
                                                name: 'remark'
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
                                                            url: 'add_repairs_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_repairs').getStore().reload();
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
                            }).show(Ext.get('repairs_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'repairs_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_repairs').getSelectionModel();
                        var record = sm.getSelection()[0];

                        if(!record){
                            Ext.Msg.alert('信息','请选择要编辑的数据');
                            return;
                        }
                        var record = sm.getSelection()[0];

                        var editForm = null;
                        var editWindow = null;
                        editForm = new Ext.form.FormPanel({
                            frame: true,
                            fieldDefaults: {
                                labelAlign: 'right',
                                labelWidth: 70
                            },
                            defaults: {
                                xtype: 'textfield'
                            },
                            items: [
                                {
                                    readOnly: true,
                                    fieldLabel: '维修保养记录编号',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '车牌号',
                                    name: 'plate'
                                },
                                {
                                    fieldLabel: '送修日期',
                                    name: 'arriveddt',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '预取车日期',
                                    name: 'estimatedt',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '实际取车车日期',
                                    name: 'practicaldt',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '送修人',
                                    name: 'arrivedper'
                                },

                                {
                                    fieldLabel: '取车人',
                                    name: 'repairper'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '本次维修保养费(元)',
                                    name: 'fees'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '年检费用(元)',
                                    name: 'costs'
                                },
                                {
                                    fieldLabel: ' 送修类型',
                                    name: 'type'
                                },
                                {
                                    fieldLabel: ' 修理厂',
                                    name: 'garage'
                                },
                                {
                                    fieldLabel: '备注',
                                    name: 'remark'
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
                                                url: 'update_repairs_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
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
                            width: 400,
                            height: 450,
                            modal: true,
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('repairs_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },
                {
                    text: '导出',
                    id: 'datacir_pubnet_tool_export',
                    iconCls: 'icon_excel'
                },
                {
                    text: '刷新',
                    id: 'datacir_pubnet_tool_refresh',
                    iconCls: 'icon_table_refresh'
                },
                {
                    text: '删除',
                    iconCls: 'icon_delete',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_repairs').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_repairs_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_repairs').getStore().reload();
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
    height: 146,
    bodyPadding: 20,
    id: 'datacir_pubnet_query',
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    defaults: {
    },
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            id: 'datacir_pubnet_query_panel1',
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
                    fieldLabel: '工单编号',
                    id: 'datacir_pubnet_query_custorm_nm',
                    name: 'custorm_nm',
                    emptyText: '工单编号'
                },
                {
                    allowBlank: true,
                    fieldLabel: '车牌号',
                    id: 'datacir_pubnet_query_custorm_branch',
                    name: 'custorm_branch',
                    emptyText: '车牌号'
                },
                {
                    allowBlank: true,
                    fieldLabel: '修理厂',
                    id: 'datacir_pubnet_query_belong_project',
                    name: 'belong_project',
                    emptyText: '修理厂'
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
                    fieldLabel: '送修日期',
                    id: 'datacir_pubnet_query_bandwidth',
                    name: 'bandwidth',
                    emptyText: '送修日期'
                },
                {
                    allowBlank: true,
                    fieldLabel: '送修人',
                    id: 'datacir_pubnet_query_ip',
                    name: 'ip',
                    emptyText: '送修人'
                },
                {
                    allowBlank: true,
                    fieldLabel: '取车人',
                    id: 'datacir_pubnet_query_inner_dev_nm',
                    name: 'inner_dev_nm',
                    emptyText: '取车人'
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
                    id: 'datacir_pubnet_find',
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
                    id: 'datacir_pubnet_reset',
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