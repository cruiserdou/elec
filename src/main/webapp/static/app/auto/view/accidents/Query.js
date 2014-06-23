Ext.define('App.view.accidents.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.accidents_query',
    split: true,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'accidents_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加事故',
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
                                                fieldLabel: '事故编号',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '文件号',
                                                name: 'file'
                                            },
                                            {
                                                fieldLabel: '车牌号',
                                                name: 'plate'
                                            },
                                            {
                                                fieldLabel: '驾驶员',
                                                name: 'driver'
                                            },
                                            {
                                                fieldLabel: '处理情况',
                                                name: 'condition'
                                            },
                                            {
                                                fieldLabel: '处理结果',
                                                name: 'results'
                                            },
                                            {
                                                xtype: 'datefield',
                                                fieldLabel: '发生日期',
                                                name: 'occurred',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                fieldLabel: '发生地点',
                                                name: 'happenplc'
                                            },
                                            {
                                                fieldLabel: '修理地点',
                                                name: 'repairplc'
                                            },
                                            {
                                                fieldLabel: '责任认定',
                                                name: 'duty'
                                            },
                                            {
                                                fieldLabel: '总话费金额(元)',
                                                name: 'amount'
                                            },
                                            {
                                                fieldLabel: '保险金额',
                                                name: 'costs'
                                            },
                                            {
                                                fieldLabel: '个人支付金额',
                                                name: 'pay'
                                            },
                                            {
                                                fieldLabel: '事故说明',
                                                name: 'explain'
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
                                                            url: 'add_accident_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_accident').getStore().reload();
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
                            }).show(Ext.get('accidents_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'accident_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_accident').getSelectionModel();
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
                                    fieldLabel: '事故编号',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '文件号',
                                    name: 'file'
                                },
                                {
                                    fieldLabel: '车牌号',
                                    name: 'plate'
                                },
                                {
                                    fieldLabel: '驾驶员',
                                    name: 'driver'
                                },
                                {
                                    fieldLabel: '处理情况',
                                    name: 'condition'
                                },
                                {
                                    fieldLabel: '处理结果',
                                    name: 'results'
                                },
                                {
                                    xtype: 'datefield',
                                    fieldLabel: '发生日期',
                                    name: 'occurred',
                                    format: 'Y-m-d'
                                },
                                {
                                    fieldLabel: '发生地点',
                                    name: 'happenplc'
                                },
                                {
                                    fieldLabel: '修理地点',
                                    name: 'repairplc'
                                },
                                {
                                    fieldLabel: '责任认定',
                                    name: 'duty'
                                },
                                {
                                    fieldLabel: '总话费金额(元)',
                                    name: 'amount'
                                },
                                {
                                    fieldLabel: '保险金额',
                                    name: 'costs'
                                },
                                {
                                    fieldLabel: '个人支付金额',
                                    name: 'pay'
                                },
                                {
                                    fieldLabel: '事故说明',
                                    name: 'explain'
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
                                                url: 'update_accident_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_accident').getStore().reload();
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
                            width: 350,
                            height: 500,
                            modal: true,
                            items: [editForm]
                        });
                        editWindow.show(Ext.get('accident_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },
                {
                    text: '导出',
                    id: 'geye_tool_export',
                    iconCls: 'icon_excel'
                },
                {
                    text: '刷新',
                    id: 'geye_tool_refresh',
                    iconCls: 'icon_table_refresh'
                },
                {
                    text: '删除',
                    iconCls: 'icon_delete',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_accident').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_accident_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_accident').getStore().reload();
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
    id: 'geye_query',
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
            fieldLabel: '车牌号',
            name: 'plate',
            id: 'geye_query_custorm_nm',
            emptyText: '车牌号'
        },
        {
            allowBlank: true,
            fieldLabel: '驾驶员',
            name: 'driver',
            id: 'geye_query_belong_platform',
            emptyText: '驾驶员'
        },
        {
            xtype: 'panel',
            border: false,
            items: [
                {
                    xtype: 'button',
                    iconCls: 'icon_search',
                    text: '查找'
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