Ext.define('App.view.refuel.oil_station.Refuelf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.oilstation_refuelf',
    layout: 'border',
    iconCls: 'icon_paper_doc',
    initComponent: function () {

        this.items = [
            {
                xtype: 'refuel_oilstation_query',
                region: 'north'
            },
            {
                xtype: 'refuel_oilstation_grid',
                region: 'center'
            }
        ];
        this.callParent(arguments);
    }
});