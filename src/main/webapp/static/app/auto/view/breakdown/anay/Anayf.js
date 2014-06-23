Ext.define('App.view.breakdown.anay.Anayf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.anayf',
    "iconCls": "icon_anay",
    layout: 'border',
    items: [
        {
            xtype: 'panel',
            region: 'center'
        }
    ],
    initComponent: function () {
        this.items = [
            {
                xtype: 'anay_query',
                region: 'north'
            },
            {
                xtype: 'anay_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});