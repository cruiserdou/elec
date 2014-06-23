Ext.define('App.view.driver.salary.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.salary_query',
    split: true,
    height: 120,
    bodyPadding: 20,
    id: 'datacir_query',
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'wages_info_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加司机工资基本信息',
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
                                                fieldLabel: '工资编号',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '姓名',
                                                name: 'name'
                                            },
                                            {
                                                fieldLabel: '月份',
                                                name: 'month'
                                            },

                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '基本工资(元)',
                                                name: 'base'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '绩效工资(元)',
                                                name: 'merit'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '生活费(元)',
                                                name: 'alimony'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '罚款(元)',
                                                name: 'penalty'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '借款(元)',
                                                name: 'loan'
                                            },
                                            {
                                                fieldLabel: '发放日期',
                                                name: 'extend',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '实发工资(元)',
                                                name: 'reals'
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
                                                            url: 'add_wages_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_wages').getStore().reload();
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
                            }).show(Ext.get('wages_info_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'wages_info_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_wages').getSelectionModel();
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
                                    fieldLabel: '工资编号',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '姓名',
                                    name: 'name'
                                },
                                {
                                    fieldLabel: '月份',
                                    name: 'month'
                                },

                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '基本工资(元)',
                                    name: 'base'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '绩效工资(元)',
                                    name: 'merit'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '生活费(元)',
                                    name: 'alimony'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '罚款(元)',
                                    name: 'penalty'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '借款(元)',
                                    name: 'loan'
                                },
                                {
                                    fieldLabel: '发放日期',
                                    name: 'extend',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '实发工资(元)',
                                    name: 'reals'
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
                                                url: 'update_wages_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_wages').getStore().reload();
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
                        editWindow.show(Ext.get('wages_info_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },
                {
                    text: '导出',
                    id: 'datacir_tool_export',
                    iconCls: 'icon_excel'
                },
                {
                    text: '刷新',
                    id: 'datacir_tool_refresh',
                    iconCls: 'icon_table_refresh'
                },
                {
                    text: '删除',
                    iconCls: 'icon_delete',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_wages').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_wages_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_wages').getStore().reload();
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
    defaults: {
    },
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            id: 'datacir_query_panel1',
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
                    fieldLabel: '司机姓名',
                    id: 'datacir_query_custorm_nm',
                    name: 'custorm_nm',
                    emptyText: '司机姓名'
                },
                {
                    xtype: 'combobox',
                    allowBlank: true,
                    value: '所有',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['code', 'month'],
                        data: [{
                            code: 0, month: '所有'
                        },{
                            code: 1, month:'一月'
                        },{
                            code: 2, month: '二月'
                        },{
                            code: 3, month: '三月'
                        },{
                            code: 4, month: '四月'
                        },{
                            code: 5, month: '五月'
                        },{
                            code: 6, month: '六月'
                        },{
                            code: 7, month: '七月'
                        },{
                            code: 8, month: '八月'
                        },{
                            code: 9, month: '九月'
                        },{
                            code: 10, month: '十月'
                        },{
                            code: 11, month: '十一月'
                        },{
                            code: 12, month: '十二月'
                        }]
                    }),
                    displayField: 'month',
                    valueField: 'code',
                    fieldLabel: '月份',
                    id: 'datacir_query_custorm_branch',
                    name: 'custorm_branch',
                    editable: false
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
                    xtype: 'datefield',
                    allowBlank: true,
                    fieldLabel: '发放日期',
                    format: 'Y-m-d',
                    id: 'datacir_query_bandwidth',
                    name: 'bandwidth',
                    editable: false,
                    emptyText: '发放日期'
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