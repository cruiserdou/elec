Ext.define('App.view.truckuse.out.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.truckuse_query',
    split: true,
    id: 'truck_query',
    bodyPadding: 20,
    frame: false,
    defaultType: 'textfield',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'outward_car_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加出车记录',
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
                                                fieldLabel: '出车编号',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '用车部门',
                                                name: 'dept'
                                            },
                                            {
                                                fieldLabel: '用车人',
                                                name: 'users'
                                            },
                                            {
                                                fieldLabel: '用车日期',
                                                name: 'usedt',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '预计回车日期',
                                                name: 'estimatedt',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '随车人数(人)',
                                                name: 'pernum'
                                            },
                                            {
                                                fieldLabel: '用车事由',
                                                name: 'cause'
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
                                                            url: 'add_outward_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_outward_car').getStore().reload();
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
                            }).show(Ext.get('outward_car_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'outward_car_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_outward_car').getSelectionModel();
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
                                    fieldLabel: '出车编号',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '用车部门',
                                    name: 'dept'
                                },
                                {
                                    fieldLabel: '用车人',
                                    name: 'users'
                                },
                                {
                                    fieldLabel: '用车日期',
                                    name: 'usedt',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '预计回车日期',
                                    name: 'estimatedt',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '随车人数(人)',
                                    name: 'pernum'
                                },
                                {
                                    fieldLabel: '用车事由',
                                    name: 'cause'
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
                                                url: 'update_outward_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_outward_car').getStore().reload();
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
                            height: 350,
                            modal: true,
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('outward_car_edit'));
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
                                var sm = Ext.getCmp('grid_outward_car').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_outward_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_outward_car').getStore().reload();
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
    layout: {
        type: 'table',
        columns: 3,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },
    items: [
        {
            allowBlank: true,
            fieldLabel: '申请单编号',
            id: 'digitcir_query_custorm_nm',
            name: 'custorm_nm',
            emptyText: '申请单编号'
        },
        {
            allowBlank: true,
            fieldLabel: '申请车辆',
            name: 'custorm_branch',
            id: 'digitcir_query_custorm_branch',
            emptyText: '申请车辆'
        },
        {
            allowBlank: true,
            fieldLabel: '用车部门',
            name: 'circute_code',
            id: 'digitcir_query_circute_code',
            emptyText: '用车人'
        },
        {
            allowBlank: true,
            fieldLabel: '用车时间',
            name: 'circute_property',
            id: 'digitcir_query_circute_property',
            emptyText: '用车时间'
        },
        {
            allowBlank: true,
            fieldLabel: '预计回车时间',
            name: 'circute_type',
            id: 'digitcir_query_circute_type',
            emptyText: '预计回车时间'
        },
        {
            allowBlank: true,
            fieldLabel: '随车人数',
            name: 'z_trans_device_nmc_nm',
            id: 'digitcir_query_z_trans_device_nmc_nm',
            emptyText: '随车人数'
        },
        {
            allowBlank: true,
            fieldLabel: '用车事由',
            name: 'a_area',
            emptyText: '用车事由'
        },
        {
            xtype: 'button',
            id: 'find',
            text: '查找',
            iconCls: 'icon_search'
        }
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});