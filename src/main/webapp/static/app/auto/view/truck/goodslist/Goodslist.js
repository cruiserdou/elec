Ext.define('App.view.truck.goodslist.Goodslist', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.goodslist',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'goodslist_query',
                region: 'north'
            },
            {
                xtype: 'goodslist_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});