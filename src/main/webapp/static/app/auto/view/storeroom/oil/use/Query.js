Ext.define('App.view.storeroom.oil.use.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.oiluse_query',
    split: true,
    height: 120,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'wdvoucher_info_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加柴油出入库记录',
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
                                                fieldLabel: '柴油出入库记录编号',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '日期',
                                                name: 'tracdt',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '车辆号',
                                                name: 'plate'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '入库数(吨)',
                                                name: 'wv'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '入库换算数(升)',
                                                name: 'wvl'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '出库数(吨)',
                                                name: 'dv'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '单价',
                                                name: 'price'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '入库金额(元)',
                                                name: 'wvmon'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '出库金额(元)',
                                                name: 'dvmon'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '余吨',
                                                name: 'surplus'
                                            } ,
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
                                                            url: 'add_wdvoucher_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_diesel_wdvoucher').getStore().reload();
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
                            }).show(Ext.get('wdvoucher_info_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'wdvoucher_info_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_diesel_wdvoucher').getSelectionModel();
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
                                    fieldLabel: '柴油出入库记录编号',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '日期',
                                    name: 'tracdt',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '车辆号',
                                    name: 'plate'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '入库数(吨)',
                                    name: 'wv'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '入库换算数(升)',
                                    name: 'wvl'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '出库数(吨)',
                                    name: 'dv'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '单价',
                                    name: 'price'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '入库金额(元)',
                                    name: 'wvmon'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '出库金额(元)',
                                    name: 'dvmon'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '余吨',
                                    name: 'surplus'
                                } ,
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
                                                url: 'update_wdvoucher_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_diesel_wdvoucher').getStore().reload();
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
                        editWindow.show(Ext.get('wdvoucher_info_edit'));
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
                                var sm = Ext.getCmp('grid_diesel_wdvoucher').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_wdvoucher_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_diesel_wdvoucher').getStore().reload();
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
            columnWidth: .5,
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
                    format: 'Y-m-d',
                    allowBlank: true,
                    fieldLabel: '日期',
                    name: 'custorm_nm',
                    emptyText: '日期'
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
            columnWidth: .5,
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