Ext.define('App.view.custs.Accidentsf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.accidentsf',
    "iconCls": "icon_paper_doc",
    border: false,
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
                xtype: 'accidents_query',
                region: 'north'
            },{
                xtype: 'accidents_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});


