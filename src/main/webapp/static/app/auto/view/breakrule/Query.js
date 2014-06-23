Ext.define('App.view.breakrule.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.br_query',
    split: true,
    height: 120,
    bodyPadding: 20,
    id: 'br_query',
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaultType: 'textfield',
    layout: 'column',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'violation_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加违章信息记录',
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
                                                fieldLabel: '违章编号',
                                                name: 'id'
                                            },
                                            {
                                                fieldLabel: '车牌号',
                                                name: 'plate'
                                            },
                                            {
                                                fieldLabel: '违章类型',
                                                name: 'type'
                                            },
                                            {
                                                fieldLabel: '违章日期',
                                                name: 'illegal',
                                                xtype: 'datefield',
                                                format: 'Y-m-d'
                                            },
                                            {
                                                xtype: 'numberfield',
                                                fieldLabel: '罚款(元)',
                                                name: 'fine'
                                            },
                                            {
                                                fieldLabel: ' 扣分',
                                                name: 'deduct'
                                            },
                                            {
                                                fieldLabel: ' 驾驶员',
                                                name: 'driver'
                                            },
                                            {
                                                fieldLabel: ' 违章地点',
                                                name: 'place'
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
                                                            url: 'add_violation_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_violation').getStore().reload();
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
                            }).show(Ext.get('violation_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'vehicle_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_violation').getSelectionModel();
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
                                    fieldLabel: '违章编号',
                                    name: 'id'
                                },
                                {
                                    fieldLabel: '车牌号',
                                    name: 'plate'
                                },
                                {
                                    fieldLabel: '违章类型',
                                    name: 'type'
                                },
                                {
                                    fieldLabel: '违章日期',
                                    name: 'illegal',
                                    xtype: 'datefield',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'numberfield',
                                    fieldLabel: '罚款(元)',
                                    name: 'fine'
                                },
                                {
                                    fieldLabel: ' 扣分',
                                    name: 'deduct'
                                },
                                {
                                    fieldLabel: ' 驾驶员',
                                    name: 'driver'
                                },
                                {
                                    fieldLabel: ' 违章地点',
                                    name: 'place'
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
                                                url: 'update_violation_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_violation').getStore().reload();
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
                        editWindow.show(Ext.get('vehicle_edit'));
                        editForm.getForm().loadRecord(record);
                    }
                },
                {
                    text: '导出',
                    id: 'bd_tool_export',
                    iconCls: 'icon_excel'
                },
                {
                    text: '刷新',
                    id: 'bd_tool_refresh',
                    iconCls: 'icon_table_refresh'
                },
                {
                    text: '删除',
                    iconCls: 'icon_delete',
                    handler: function () {
                        Ext.Msg.confirm('信息', '确定要删除？', function (btn) {
                            if (btn == 'yes') {
                                var sm = Ext.getCmp('grid_violation').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_violation_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_violation').getStore().reload();
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
    items: [
        {
            xtype: 'panel',
            id: 'bd_query_panel1',
            columnWidth: .3,
            border: false,
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            defaults: {
                labelWidth: 60,
                editable: false,
                xtype: 'combobox'
            },
            items: [
                {
                    allowBlank: true,
                    fieldLabel: '车牌号',
                    id: 'bd_query_custorm_nm',
                    name: 'plate',
                    emptyText: '车牌号'
                },
                {
                    xtype: 'textfield',
                    allowBlank: true,
                    fieldLabel: '违章类型',
                    id: 'bd_query_duty_type',
                    name: 'type',
                    emptyText: '违章类型'
                }
            ]
        },
        {

            xtype: 'panel',
            columnWidth: .3,
            border: false,
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            defaults: {
                labelWidth: 60,
                editable: false,
                xtype: 'combobox'
            },
            items: [
                {
                    xtype: 'datefield',
                    allowBlank: true,
                    editable: false,
                    fieldLabel: '开始时间',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, -(new Date()).getDate() + 1),
                    id: 'bd_query_start_date',
                    name: 'start_date',
                    format: 'Y-m-d',
                    emptyText: '开始时间'
                },
                {
                    xtype: 'datefield',
                    allowBlank: true,
                    editable: false,
                    fieldLabel: '结束时间',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, 0),
                    id: 'bd_query_end_date',
                    format: 'Y-m-d',
                    name: 'end_date',
                    emptyText: '结束时间'
                }
            ]
        },
        {
            xtype: 'panel',
            columnWidth: .3,
            border: false,
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            defaults: {
                labelWidth: 60,
                editable: false,
                xtype: 'combobox'
            },
            items: [
                {
                    fieldLabel: '司机',
                    id: 'bd_query_record_person',
                    editable: false,
                    store: 'Recordperson',
                    displayField: 'record_person',
                    valueField: 'record_person'
                },
                {
                    fieldLabel: '归档状态',
                    id: 'bd_query_status',
                    value: '全部',
                    store: Ext.create('Ext.data.Store', {
                        fields: ['nm'],
                        data: [
                            {nm: '全部'},
                            {nm: '已归档'},
                            {nm: '未归档'}
                        ]
                    }),
                    displayField: 'nm',
                    valueField: 'nm',
                    editable: false
                }
            ]
        },
        {
            xtype: 'panel',
            columnWidth: .1,
            border: false,
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'button',
                    id: 'bd_find',
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
                    id: 'bd_reset',
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
