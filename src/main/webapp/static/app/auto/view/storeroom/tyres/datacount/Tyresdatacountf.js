Ext.define('App.view.storeroom.tyres.datacount.Tyresdatacountf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tyresdatacountf',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'tyresdatacount_query',
                region: 'north'
            },
            {
                xtype: 'tyresdatacount_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});