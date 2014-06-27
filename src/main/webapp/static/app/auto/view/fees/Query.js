Ext.define('App.view.fees.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.refuel_query',
    split: true,
    bodyPadding: 20,
    id: 'sr_refuel_q',
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
                    id: 'fees_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加电费记录',
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
                                                fieldLabel: '费用ID',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '电表ID',
                                                name: 'meterid'
                                            },
                                            {
                                                fieldLabel: '电表编号',
                                                name: 'meternum'
                                            },
                                            {
                                                fieldLabel: '客户ID',
                                                name: 'custid'
                                            },
                                            {
                                                fieldLabel: '客户名',
                                                name: 'custname'
                                            },
                                            {
                                                fieldLabel: '用表类型ID',
                                                name: 'typeid'
                                            },
                                            {
                                                fieldLabel: '用表类型名称',
                                                name: 'typename'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '单价',
                                                name: 'price'
                                            },
                                            {
                                                fieldLabel: '抄表日期',
                                                name: 'readdate',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '上期计数',
                                                name: 'lastuesd'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '本期计数',
                                                name: 'currentuesd'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: ' 本期应交金额',
                                                name: 'should'
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
                                                            url: 'add_fees_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_fees').getStore().reload();
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
                            }).show(Ext.get('fees_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'fees_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_fees').getSelectionModel();
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
                                    fieldLabel: '费用ID',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '电表ID',
                                    name: 'meterid'
                                },
                                {
                                    fieldLabel: '电表编号',
                                    name: 'meternum'
                                },
                                {
                                    fieldLabel: '客户ID',
                                    name: 'custid'
                                },
                                {
                                    fieldLabel: '客户名',
                                    name: 'custname'
                                },
                                {
                                    fieldLabel: '用表类型ID',
                                    name: 'typeid'
                                },
                                {
                                    fieldLabel: '用表类型名称',
                                    name: 'typename'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '单价',
                                    name: 'price'
                                },
                                {
                                    fieldLabel: '抄表日期',
                                    name: 'readdate',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '上期计数',
                                    name: 'lastuesd'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '本期计数',
                                    name: 'currentuesd'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: ' 本期应交金额',
                                    name: 'should'
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
                                                url: 'update_fees_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_fees').getStore().reload();
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
                        editWindow.show(Ext.get('fees_edit'));
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
                                var sm = Ext.getCmp('grid_fees').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_fees_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_fees').getStore().reload();
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
//                    xtype: 'combobox',
//                    store: 'Custorm_nm',
//                    displayField: 'custorm_nm',
//                    valueField: 'custorm_nm',
                    fieldLabel: '客户名',
                    id: 'query_custname',
                    queryMode: 'local',
                    name: 'custname',
                    emptyText: '客户名'
                },
                {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    fieldLabel: '抄表日期',
                    name: 'readdate',
                    id: 'query_readdate',
                    emptyText: '抄表日期'
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
                    xtype: 'panel',
                    border: false,
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'icon_search',
                            text: '查找',
                            listeners: {
                                click: function(){
                                    var store = Ext.getCmp('grid_fees').getStore();
                                    store.load({
                                        params: {
                                            custname: Ext.getCmp('query_custname').getValue(),
                                            readdate: Ext.getCmp('query_readdate').getValue()
                                        }
                                    });
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            iconCls: 'icon_reset',
                            text: '重置',
                            listeners: {
                                click: function(_this){
                                    _this.up('form').getForm().reset();
                                    Ext.getCmp('grid_fees').getStore().load();
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});