Ext.define('App.view.breakdown.record.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.bd_query',
    split: true,
    height: 140,
    bodyPadding: 20,
    id: 'bd_query',
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
                    text: '添加',
                    id: 'bd_tool_add',
                    iconCls: 'icon_add'
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
                    fieldLabel: '工单编号',
                    id: 'bd_query_custorm_nm',
                    name: 'custorm_nm',
                    emptyText: '车牌号'
                },
                {
                    allowBlank: true,
                    fieldLabel: '违章类型',
                    id: 'bd_query_duty_type',
                    store: 'DutyType',
                    displayField: 'nm',
                    name: 'duty_type',
                    emptyText: '违章类型'
                },
                {
                    allowBlank: true,
                    fieldLabel: '罚款',
                    id: 'bd_query_busi_type',
                    store: 'BusiType',
                    displayField: 'nm',
                    name: 'busi_type',
                    emptyText: '罚款'
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
                    allowBlank: true,
                    fieldLabel: '扣分',
                    id: 'bd_query_workorder_type',
                    store: 'WorkOrderType',
                    displayField: 'nm',
                    name: 'workorder_type',
                    emptyText: '扣分'
                },
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
