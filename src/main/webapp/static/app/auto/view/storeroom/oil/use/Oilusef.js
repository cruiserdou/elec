Ext.define('App.view.storeroom.oil.use.Oilusef', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.oilusef',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'oiluse_query',
                region: 'north'
            },
            {
                xtype: 'oiluse_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});