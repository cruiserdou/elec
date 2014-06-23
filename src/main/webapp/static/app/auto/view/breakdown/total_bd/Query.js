Ext.define('App.view.breakdown.total_bd.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.total_bd_query',
    split: true,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    height: 90,
    bodyPadding: 20,
    id: 'total_bd_query',
    frame: false,
    defaultType: 'textfield',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            border: true,
            items: [
                {
                    text: '刷新',
                    id: 'total_bd_tool_refresh',
                    iconCls: 'icon_table_refresh'
                }
            ]
        }
    ],
    defaults: {
    },
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            id: 'total_bd_query_panel1',
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
                    editable: false,
                    allowBlank: true,
                    fieldLabel: '开始时间',
                    id: 'total_bd_query_start',
                    name: 'start_date',
                    format: 'Y-m-d',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, -(new Date()).getDate() + 1),
                    emptyText: '开始时间'
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
                    editable: false,
                    allowBlank: true,
                    fieldLabel: '结束时间',
                    id: 'total_bd_query_end',
                    format: 'Y-m-d',
                    name: 'end_date',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, 0),
                    emptyText: '结束时间'
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
                    id: 'total_bd_find',
                    iconCls: 'icon_search',
                    text: '分析'
                }
            ]
        }
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});
