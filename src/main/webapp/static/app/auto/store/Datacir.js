Ext.define('App.store.Datacir', {
    extend: 'Ext.data.Store',
    model: 'App.model.Datacir',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_data_circute.action',
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