Ext.Loader.setConfig({enabled: true});

Ext.require('Ext.container.Viewport');
Ext.require([
    'Ext.chart.*',
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.form.*',
    'Ext.selection.CheckboxModel'
]);
Ext.application({
    name: 'App',
    appFolder: 'static/app/auto',
    controllers: ['Tabitem', 'Frame'],
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'navPanel',
                    region: 'west',
                    width: 200
                },
                {
                    xtype: 'tabPanel',
                    region: 'center',
                    layout: 'border'
                }
            ]
        });
    }
});