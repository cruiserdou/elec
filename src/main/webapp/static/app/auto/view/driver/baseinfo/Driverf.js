Ext.define('App.view.driver.baseinfo.Driverf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.datacirf_gov',
    "iconCls": "icon_person",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'datacir_query_gov',
                region: 'north'
            },
            {
                xtype: 'datacir_grid_gov',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});