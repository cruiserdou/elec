Ext.define('App.view.driver.baseinfo.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.datacir_query_gov',
    split: true,
    height: 120,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'driver_info_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加司机基本信息',
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
                                                fieldLabel: '司机编号',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '姓名',
                                                name: 'name'
                                            },
                                            {
                                                fieldLabel: '性别',
                                                name: 'sex'
                                            },
                                            {
                                                fieldLabel: '出生日期',
                                                name: 'birthday',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '联系地址',
                                                name: 'addr'
                                            },
                                            {
                                                fieldLabel: '常用手机号',
                                                name: 'phone'
                                            },
                                            {
                                                fieldLabel: '备用手机号',
                                                name: 'tphone'
                                            },
                                            {
                                                fieldLabel: '身份证号',
                                                name: 'card'
                                            },
                                            {
                                                fieldLabel: '驾驶证号',
                                                name: 'drino'
                                            },
                                            {
                                                fieldLabel: '操作证号',
                                                name: 'openo'
                                            },
                                            {
                                                fieldLabel: '押运证号',
                                                name: 'escorno'
                                            },
                                            {
                                                fieldLabel: ' 处境证号',
                                                name: 'atno'
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
                                                            url: 'add_driver_info',
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
                            }).show(Ext.get('driver_info_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'driver_info_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_driver').getSelectionModel();
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
                                    fieldLabel: '司机编号',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '姓名',
                                    name: 'name'
                                },
                                {
                                    fieldLabel: '性别',
                                    name: 'sex'
                                },
                                {
                                    fieldLabel: '出生日期',
                                    name: 'birthday',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '联系地址',
                                    name: 'addr'
                                },
                                {
                                    fieldLabel: '常用手机号',
                                    name: 'phone'
                                },
                                {
                                    fieldLabel: '备用手机号',
                                    name: 'tphone'
                                },
                                {
                                    fieldLabel: '身份证号',
                                    name: 'card'
                                },
                                {
                                    fieldLabel: '驾驶证号',
                                    name: 'drino'
                                },
                                {
                                    fieldLabel: '操作证号',
                                    name: 'openo'
                                },
                                {
                                    fieldLabel: '押运证号',
                                    name: 'escorno'
                                },
                                {
                                    fieldLabel: ' 处境证号',
                                    name: 'atno'
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
                                                url: 'update_driver_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_driver').getStore().reload();
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
                        editWindow.show(Ext.get('driver_info_edit'));
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
                                var sm = Ext.getCmp('grid_driver').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_driver_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_driver').getStore().reload();
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
                    fieldLabel: '车牌号',
                    name: 'custorm_nm',
                    emptyText: '车牌号'
                },
                {
                    allowBlank: true,
                    fieldLabel: '挂车号',
                    name: 'belong_project',
                    emptyText: '挂车号'
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
                    fieldLabel: '主驾驶',
                    name: 'gender',
                    editable: false
                },
                {
                    allowBlank: true,
                    fieldLabel: '副驾驶',
                    name: 'inner_dev_nm',
                    emptyText: '副驾驶'
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