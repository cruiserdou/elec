Ext.define('App.view.storeroom.tyres.datacollect.Tyresdatacollectf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tyresdatacollectf',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'tyresdatacollect_query',
                region: 'north'
            },
            {
                xtype: 'tyresdatacollect_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});