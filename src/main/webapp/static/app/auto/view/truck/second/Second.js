Ext.define('App.view.truck.second.Second', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.second',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'second_query',
                region: 'north'
            },
            {
                xtype: 'second_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});