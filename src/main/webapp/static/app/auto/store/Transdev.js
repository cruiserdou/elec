Ext.define('App.store.Transdev', {
    extend: 'Ext.data.Store',
    model: 'App.model.Transdev',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_trans_dev.action',
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