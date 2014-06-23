Ext.define('App.view.insurance.Insurerf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.insurerf',
    "iconCls": "icon_license",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'insurer_query',
                region: 'north'
            },
            {
                xtype: 'insurer_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});