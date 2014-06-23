Ext.define('App.view.truck.fare.Fare', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.fare',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'fare_query',
                region: 'north'
            },
            {
                xtype: 'fare_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});