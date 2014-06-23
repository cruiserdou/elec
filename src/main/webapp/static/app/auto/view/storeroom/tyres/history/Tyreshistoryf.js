Ext.define('App.view.storeroom.tyres.history.Tyreshistoryf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tyreshistoryf',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'tyreshistory_query',
                region: 'north'
            },
            {
                xtype: 'tyreshistory_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});