Ext.define('App.view.storeroom.oil.note.Oilnotef', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.oilnotef',
    "iconCls": "icon_paper_doc",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'oilnote_query',
                region: 'north'
            },
            {
                xtype: 'oilnote_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});