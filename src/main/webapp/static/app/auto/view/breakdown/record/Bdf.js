Ext.define('App.view.breakdown.record.Bdf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.bdf',
    "iconCls": "icon_edit_find_replace",
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
                xtype: 'bd_query',
                region: 'north'
            },
            {
                xtype: 'bd_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});