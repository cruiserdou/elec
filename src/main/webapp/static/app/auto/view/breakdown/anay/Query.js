Ext.define('App.view.breakdown.anay.Query', {
    extend: 'Ext.form.Panel',
    alias: 'widget.anay_query',
    split: true,
    height: 90,
    bodyPadding: 20,
    id: 'anay_query',
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
                {text: '导出', id: 'anay_tool_export', iconCls: 'icon_excel'}
            ]
        }
    ],
    items: [
        {
            xtype: 'panel',
            id: 'anay_query_panel1',
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
                    allowBlank: true,
                    fieldLabel: '开始时间',
                    editable: false,
                    id: 'anay_query_start_date',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, -(new Date().getDate()) + 1),
                    name: 'start_date',
                    format: 'Y-m-d',
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
                    allowBlank: true,
                    fieldLabel: '结束时间',
                    editable: false,
                    id: 'anay_query_end_date',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, 0),
                    format: 'Y-m-d',
                    name: 'end_date',
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
                    id: 'anay_find',
                    iconCls: 'icon_search',
                    text: '查找'
                }
            ]
        }
    ],
    initComponent: function () {
        this.callParent(arguments);
    }
});
