Ext.define('App.view.truck.transdetail.Transdetail', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.transdetail',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'transdetail_query',
                region: 'north'
            },
            {
                xtype: 'transdetail_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});