Ext.define('App.view.depts.Brf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.brf',
    "iconCls": "icon_edit_find_replace",
    layout: 'border',
    items: [
        {
            xtype: 'panel',
            region: 'center'
        }
    ],
    initComponent: function () {
        this.items = [
            {
                xtype: 'br_query',
                region: 'north'
            },
            {
                xtype: 'br_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});