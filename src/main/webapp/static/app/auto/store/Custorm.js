Ext.define('App.store.Custorm', {
    extend: 'Ext.data.Store',
    model: 'App.model.Custorm',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_custorm.action',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            root: 'list',
            totalProperty: 'total'
        }
    },
    autoLoad: true
});