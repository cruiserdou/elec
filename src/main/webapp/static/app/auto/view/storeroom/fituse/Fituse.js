Ext.define('App.view.storeroom.fituse.Fituse', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.fituse',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'fituse_query',
                region: 'north'
            },
            {
                xtype: 'fituse_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});