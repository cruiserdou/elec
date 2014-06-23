Ext.define('App.view.truck.info.Truckf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.truckf',
    "iconCls": "icon_truck",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'truck_query',
                region: 'north'
            },
            {
                xtype: 'truck_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});