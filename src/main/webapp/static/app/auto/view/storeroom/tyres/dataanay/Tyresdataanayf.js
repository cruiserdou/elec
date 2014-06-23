Ext.define('App.view.storeroom.tyres.dataanay.Tyresdataanayf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tyresdataanayf',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'tyresdataanay_query',
                region: 'north'
            },
            {
                xtype: 'tyresdataanay_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});