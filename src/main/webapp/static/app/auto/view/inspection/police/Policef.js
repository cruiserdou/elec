Ext.define('App.view.inspection.police.Policef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.policef',
    layout: 'border',
    iconCls: 'icon_paper_doc',
    initComponent: function () {

        this.items = [
            {
                xtype: 'police_query',
                region: 'north'
            },
            {
                xtype: 'police_grid',
                region: 'center'
            }
        ];
        this.callParent(arguments);
    }
});