Ext.define('App.view.truckuse.in.Truckinf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.truckinf',
    iconCls: "icon_paper_doc",
    border: false,
    layout: 'border',
    initComponent: function () {
        this.items = [
            {
                xtype: 'truckin_query',
                region: 'north'
            },
            {
                xtype: 'truckin_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});

