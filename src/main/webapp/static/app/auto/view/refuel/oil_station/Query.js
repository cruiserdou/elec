Ext.define('App.view.refuel.oil_station.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.refuel_oilstation_query',
    split: true,
    bodyPadding: 20,
    id: 'os_refuel_query',
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
                    id: 'out_refuel_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加外出加油记录',
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
                                                fieldLabel: '外出加油编号',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '车牌号',
                                                name: 'plate'
                                            },
                                            {
                                                fieldLabel: '加油站',
                                                name: 'station'
                                            },
                                            {
                                                fieldLabel: '加油日期',
                                                name: 'oil',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '油料标号',
                                                name: 'type'
                                            },
                                            {
                                                fieldLabel: '付款方法',
                                                name: 'payment'
                                            },
                                            {
                                                fieldLabel: '油卡编号',
                                                name: 'cardno'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '单价',
                                                name: 'price'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '加油量(升)',
                                                name: 'fuel'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '金额(元)',
                                                name: 'pay'
                                            },
                                            {
                                                fieldLabel: ' 经手人',
                                                name: 'handling'
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
                                                            url: 'add_outrefuel_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_out_refuel').getStore().reload();
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
                            }).show(Ext.get('out_refuel_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'out_refuel_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_out_refuel').getSelectionModel();
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
                                    fieldLabel: '外出加油编号',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '车牌号',
                                    name: 'plate'
                                },
                                {
                                    fieldLabel: '加油站',
                                    name: 'station'
                                },
                                {
                                    fieldLabel: '加油日期',
                                    name: 'oil',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '油料标号',
                                    name: 'type'
                                },
                                {
                                    fieldLabel: '付款方法',
                                    name: 'payment'
                                },
                                {
                                    fieldLabel: '油卡编号',
                                    name: 'cardno'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '单价',
                                    name: 'price'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '加油量(升)',
                                    name: 'fuel'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '金额(元)',
                                    name: 'pay'
                                },
                                {
                                    fieldLabel: ' 经手人',
                                    name: 'handling'
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
                                                url: 'update_outrefuel_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_out_refuel').getStore().reload();
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
                        editWindow.show(Ext.get('out_refuel_edit'));
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
                                var sm = Ext.getCmp('grid_out_refuel').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_outrefuel_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_out_refuel').getStore().reload();
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
                    xtype: 'combobox',
                    store: 'Custorm_nm',
                    displayField: 'custorm_nm',
                    valueField: 'custorm_nm',
                    fieldLabel: '车牌号',
                    id: 'os_refuel_query_custorm_nm',
                    queryMode: 'local',
                    name: 'custorm_nm',
                    emptyText: '车牌号'
                },
                {
                    allowBlank: true,
                    fieldLabel: '加油站',
                    name: 'custorm_branch',
                    id: 'os_refuel_query_custorm_branch',
                    emptyText: '加油站'
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
                    format: 'Y-m-d',
                    fieldLabel: '加油日期',
                    name: 'link_person',
                    id: 'os_refuel_query_lnk_person',
                    emptyText: '加油日期'
                },
                {
                    allowBlank: true,
                    fieldLabel: '油料标号',
                    name: 'custorm_type',
                    id: 'os_refuel_query_custorm_type',
                    emptyText: '油料标号'
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