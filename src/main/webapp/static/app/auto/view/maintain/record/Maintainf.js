Ext.define('App.view.maintain.record.Maintainf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.maintainf',
    "iconCls": "icon_paper_doc",
    border: false,
    layout: 'border',
    initComponent: function () {
        this.items = [
            {
                xtype: 'maintain_query',
                region: 'north'
            },
            {
                xtype: 'maintain_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});
