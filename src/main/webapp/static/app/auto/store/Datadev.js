Ext.define('App.store.Datadev', {
    extend: 'Ext.data.Store',
    model: 'App.model.Datadev',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_data_dev.action',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            root: 'list',
            totalProperty: 'total'
        }
    },
    autoLoad: false
});