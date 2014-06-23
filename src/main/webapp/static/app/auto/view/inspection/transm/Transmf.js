Ext.define('App.view.inspection.transm.Transmf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.transmf',
    layout: 'border',
    iconCls: 'icon_paper_doc',
    initComponent: function () {

        this.items = [
            {
                xtype: 'transm_query',
                region: 'north'
            },
            {
                xtype: 'transm_grid',
                region: 'center'
            }
        ];
        this.callParent(arguments);
    }
});