Ext.define('App.view.truck.second.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.second_query',
    split: true,
    height: 120,
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    id: 'two_insur_add',
                    text: '添加',
                    iconCls: 'icon_add',
                    listeners: {
                        click: function () {
                            Ext.create('widget.window', {
                                title: '添加二保记录',
                                modal: true,
                                width: 600,
                                height: 600,
                                iconCls: 'icon_user',
                                bodyPadding: 2,
                                border: false,
                                layout: 'fit',
                                defaults: {
                                    width: 200,
                                    allowBlank: false
                                },
                                items: [
                                    {
                                        xtype: 'form',
                                        bodyPadding: 20,
                                        fieldDefaults: {
                                            labelAlign: 'right',
                                            labelWidth: 60
                                        },
                                        layout: 'column',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                height: 500,
                                                border: false,
                                                columnWidth: .5,
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'strech',
                                                    pack: 'start'
                                                },
                                                defaults: {
                                                    xtype: 'textfield'
                                                },
                                                items: [
                                                    {
                                                        fieldLabel: '二保编号',
                                                        name: 'id'
                                                    },
                                                    {
                                                        fieldLabel: '车牌号',
                                                        name: 'plate'
                                                    },
                                                    {
                                                        fieldLabel: '一月编号',
                                                        name: 'janno'
                                                    },
                                                    {
                                                        fieldLabel: '二月编号',
                                                        name: 'febno'
                                                    },
                                                    {
                                                        fieldLabel: '三月编号',
                                                        name: 'marno'
                                                    },
                                                    {
                                                        fieldLabel: '四月编号',
                                                        name: 'aprno'
                                                    },
                                                    {
                                                        fieldLabel: '五月编号',
                                                        name: 'mayno'
                                                    },
                                                    {
                                                        fieldLabel: '六月编号',
                                                        name: 'junno'
                                                    },
                                                    {
                                                        fieldLabel: '七月编号',
                                                        name: 'julno'
                                                    },
                                                    {
                                                        fieldLabel: '八月编号',
                                                        name: 'augno'
                                                    },
                                                    {
                                                        fieldLabel: '九月编号',
                                                        name: 'sepno'
                                                    },
                                                    {
                                                        fieldLabel: '十月编号',
                                                        name: 'octno'
                                                    },
                                                    {
                                                        fieldLabel: '十一月编号',
                                                        name: 'novno'
                                                    },
                                                    {
                                                        fieldLabel: '十二月编号',
                                                        name: 'decno'
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'panel',
                                                height: 500,
                                                border: false,
                                                columnWidth: .5,
                                                layout: {
                                                    type: 'vbox',
                                                    align: 'strech',
                                                    pack: 'start'
                                                },
                                                defaults: {
                                                    xtype: 'textfield'
                                                },
                                                items: [
                                                    {
                                                        fieldLabel: '挂号',
                                                        name: 'trailer'
                                                    },
                                                    {
                                                        fieldLabel: '一月',
                                                        name: 'jan'
                                                    },
                                                    {
                                                        fieldLabel: '二月',
                                                        name: 'feb'
                                                    },
                                                    {
                                                        fieldLabel: '三月',
                                                        name: 'mar'
                                                    },
                                                    {
                                                        fieldLabel: '四月',
                                                        name: 'apr'
                                                    },
                                                    {
                                                        fieldLabel: '五月',
                                                        name: 'may'
                                                    },
                                                    {
                                                        fieldLabel: '六月',
                                                        name: 'jun'
                                                    },
                                                    {
                                                        fieldLabel: '七月',
                                                        name: 'jul'
                                                    },
                                                    {
                                                        fieldLabel: '八月',
                                                        name: 'aug'
                                                    },
                                                    {
                                                        fieldLabel: '九月',
                                                        name: 'sep'
                                                    },
                                                    {
                                                        fieldLabel: '十月',
                                                        name: 'oct'
                                                    },
                                                    {
                                                        fieldLabel: '十一月',
                                                        name: 'nov'
                                                    },
                                                    {
                                                        fieldLabel: '十二月',
                                                        name: 'decs'
                                                    },
                                                    {
                                                        fieldLabel: '备注',
                                                        name: 'remark'
                                                    }
                                                ]
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
                                                            url: 'add_twoInsur_info',
                                                            waitMsg: '正在保存数据...',
                                                            success: function(form, action){
                                                                Ext.Msg.alert("成功", "数据保存成功!");
                                                                //重新载入渠道信息
                                                                Ext.getCmp('grid_two_insur').getStore().reload();
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
                            }).show(Ext.get('two_insur_add'));
                        }
                    }
                },
                {
                    text: '编辑',
                    id: 'two_insur_edit',
                    iconCls: 'icon_edit',
                    handler: function(){
                        var sm = Ext.getCmp('grid_two_insur').getSelectionModel();
                        var record = sm.getSelection()[0];

                        if(!record){
                            Ext.Msg.alert('信息','请选择要编辑的数据');
                            return;
                        }
                        var record = sm.getSelection()[0];

                        var editForm = null;
                        var editWindow = null;
                        editForm = new Ext.form.FormPanel({
                            xtype: 'form',
                            bodyPadding: 20,
                            fieldDefaults: {
                                labelAlign: 'right',
                                labelWidth: 60
                            },
                            layout: 'column',
                            items: [
                                {
                                    xtype: 'panel',
                                    height: 500,
                                    border: false,
                                    columnWidth: .5,
                                    layout: {
                                        type: 'vbox',
                                        align: 'strech',
                                        pack: 'start'
                                    },
                                    defaults: {
                                        xtype: 'textfield'
                                    },
                                    items: [
                                        {
                                            readOnly: true,
                                            fieldLabel: '二保编号',
                                            name: 'id'
                                        },
                                        {
                                            fieldLabel: '车牌号',
                                            name: 'plate'
                                        },
                                        {
                                            fieldLabel: '一月编号',
                                            name: 'janno'
                                        },
                                        {
                                            fieldLabel: '二月编号',
                                            name: 'febno'
                                        },
                                        {
                                            fieldLabel: '三月编号',
                                            name: 'marno'
                                        },
                                        {
                                            fieldLabel: '四月编号',
                                            name: 'aprno'
                                        },
                                        {
                                            fieldLabel: '五月编号',
                                            name: 'mayno'
                                        },
                                        {
                                            fieldLabel: '六月编号',
                                            name: 'junno'
                                        },
                                        {
                                            fieldLabel: '七月编号',
                                            name: 'julno'
                                        },
                                        {
                                            fieldLabel: '八月编号',
                                            name: 'augno'
                                        },
                                        {
                                            fieldLabel: '九月编号',
                                            name: 'sepno'
                                        },
                                        {
                                            fieldLabel: '十月编号',
                                            name: 'octno'
                                        },
                                        {
                                            fieldLabel: '十一月编号',
                                            name: 'novno'
                                        },
                                        {
                                            fieldLabel: '十二月编号',
                                            name: 'decno'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    height: 500,
                                    border: false,
                                    columnWidth: .5,
                                    layout: {
                                        type: 'vbox',
                                        align: 'strech',
                                        pack: 'start'
                                    },
                                    defaults: {
                                        xtype: 'textfield'
                                    },
                                    items: [
                                        {
                                            fieldLabel: '挂号',
                                            name: 'trailer'
                                        },
                                        {
                                            fieldLabel: '一月',
                                            name: 'jan'
                                        },
                                        {
                                            fieldLabel: '二月',
                                            name: 'feb'
                                        },
                                        {
                                            fieldLabel: '三月',
                                            name: 'mar'
                                        },
                                        {
                                            fieldLabel: '四月',
                                            name: 'apr'
                                        },
                                        {
                                            fieldLabel: '五月',
                                            name: 'may'
                                        },
                                        {
                                            fieldLabel: '六月',
                                            name: 'jun'
                                        },
                                        {
                                            fieldLabel: '七月',
                                            name: 'jul'
                                        },
                                        {
                                            fieldLabel: '八月',
                                            name: 'aug'
                                        },
                                        {
                                            fieldLabel: '九月',
                                            name: 'sep'
                                        },
                                        {
                                            fieldLabel: '十月',
                                            name: 'oct'
                                        },
                                        {
                                            fieldLabel: '十一月',
                                            name: 'nov'
                                        },
                                        {
                                            fieldLabel: '十二月',
                                            name: 'decs'
                                        },
                                        {
                                            fieldLabel: '备注',
                                            name: 'remark'
                                        }
                                    ]
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
                                                url: 'update_twoInsur_info',
                                                waitMsg: '正在保存数据...',
                                                success: function(form, action){
                                                    Ext.Msg.alert("成功", "数据保存成功!");
                                                    Ext.getCmp('grid_two_insur').getStore().reload();
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
                        editWindow.show(Ext.get('two_insur_edit'));
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
                                var sm = Ext.getCmp('grid_two_insur').getSelectionModel();
                                var rows = sm.getSelection();

                                if (rows.length > 0) {
                                    for (var i = 0; i < rows.length; i++) {
                                        var row = rows[i];
                                        var id = row.get('id');
                                        Ext.Ajax.request({
                                            url: 'delete_twoInsur_info',
                                            params: {
                                                "id": id
                                            },
                                            waitMsg: '正在删除数据...',
                                            success: function (form, action) {
                                                Ext.Msg.alert("成功", "数据删除成功!");
                                                Ext.getCmp('grid_two_insur').getStore().reload();
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
                    fieldLabel: '车牌号码',
                    name: 'custorm_nm',
                    emptyText: '车牌号码'
                },
                {
                    allowBlank: true,
                    fieldLabel: '挂号',
                    name: 'belong_project',
                    emptyText: '挂号'
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
                    fieldLabel: '季度',
                    emptyText: '季度',
                    editable: false
                },
                {
                    allowBlank: true,
                    fieldLabel: '月份',
                    name: 'inner_dev_nm',
                    emptyText: '月份'
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