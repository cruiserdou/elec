Ext.define('App.view.refuel.storeroom.Refuelf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.refuelf',
    layout: 'border',
    iconCls: 'icon_paper_doc',
    initComponent: function () {

        this.items = [
            {
                xtype: 'refuel_query',
                region: 'north'
            },
            {
                xtype: 'refuel_grid',
                region: 'center'
            }
        ];
        this.callParent(arguments);
    }
});