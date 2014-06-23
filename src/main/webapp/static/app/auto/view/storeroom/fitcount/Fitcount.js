Ext.define('App.view.storeroom.fitcount.Fitcount', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.fitcount',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'fitcount_query',
                region: 'north'
            },
            {
                xtype: 'fitcount_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});