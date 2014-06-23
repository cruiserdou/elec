Ext.define('App.view.breakdown.warn.QueryWeek', {
    extend: 'Ext.form.Panel',
    alias: 'widget.warn_query_week',
    split: true,
    height: 115,
    title: '周预警分析',
    bodyPadding: 20,
    id: 'warn_query_week',
    frame: false,
    collapseMode: 'mini',
    collapsed: false,
    useSplitTips: true,
    defaults: {
        xtype: 'textfield'
    },
    layout: 'column',
    items: [
        {
            xtype: 'panel',
            id: 'warn_query_week_panel1',
            columnWidth: .65,
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
                    id: 'warn_query_week_start_date',
                    name: 'start_date',
                    format: 'Y-m-d',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, -(new Date().getDay()) + 1),
                    emptyText: '开始时间'
                },
                {
                    xtype: 'datefield',
                    editable: false,
                    allowBlank: true,
                    fieldLabel: '结束时间',
                    id: 'warn_query_week_end_date',
                    format: 'Y-m-d',
                    value: Ext.Date.add(new Date(), Ext.Date.DAY, 0),
                    name: 'end_date',
                    emptyText: '结束时间'
                }
            ]
        },
        {
            xtype: 'panel',
            columnWidth: .35,
            border: false,
            layout: {
                type: 'vbox',
                align: 'strech',
                pack: 'start'
            },
            items: [
                {
                    xtype: 'button',
                    id: 'warn_week_find',
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
