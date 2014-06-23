Ext.define('App.view.truckuse.in.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.truckin_query',
    split: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'enter_car_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加回车记录',
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
                                                fieldLabel: '回车编号',
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
                                                fieldLabel: '驾驶员',
                                                name: 'driver'
                                            },
                                            {
                                                fieldLabel: '油量状况',
                                                name: 'condition'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '停车费',
                                                name: 'parks'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '过路费',
                                                name: 'tolls'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '里程(公里)',
                                                name: 'mileage'
                                            },
                                            {
                                                fieldLabel: '出车原因',
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
                                                            url: 'add_enter_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_enter_car').getStore().reload();
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
                            }).show(Ext.get('enter_car_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'enter_car_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_enter_car').getSelectionModel();
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
                                    fieldLabel: '回车编号',
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
                                    fieldLabel: '驾驶员',
                                    name: 'driver'
                                },
                                {
                                    fieldLabel: '油量状况',
                                    name: 'condition'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '停车费',
                                    name: 'parks'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '过路费',
                                    name: 'tolls'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '里程(公里)',
                                    name: 'mileage'
                                },
                                {
                                    fieldLabel: '出车原因',
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
                                                url: 'update_enter_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_enter_car').getStore().reload();
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
                        editWindow.show(Ext.get('enter_car_edit'));
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
                                var sm = Ext.getCmp('grid_enter_car').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_enter_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_enter_car').getStore().reload();
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
    id: 'datadev_query',
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    defaults: {
    },
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
            fieldLabel: '工单编号',
            id: 'datadev_query_custorm_nm',
            name: 'custorm_nm',
            emptyText: '工单编号'
        },
        {
            allowBlank: true,
            fieldLabel: '出车车辆',
            name: 'belong_network',
            id: 'datadev_query_belong_network',
            emptyText: '出车车辆'
        },
        {
            allowBlank: true,
            fieldLabel: '用车部门',
            name: 'belong_project',
            id: 'datadev_query_belong_project',
            emptyText: '所属项目'
        },
        {
            allowBlank: true,
            fieldLabel: '用车人',
            name: 'inner_dev_nm',
            id: 'datadev_query_inner_dev_nm',
            emptyText: '用车人'
        },
        {
            xtype: 'panel',
            border: false,
            items: [
                {
                    xtype: 'button',
                    id: 'datadev_find',
                    iconCls: 'icon_search',
                    text: '查找'
                },
                {
                    xtype: 'button',
                    id: 'datadev_reset',
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