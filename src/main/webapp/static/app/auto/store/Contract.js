Ext.define('App.store.Contract', {
    extend: 'Ext.data.Store',
    model: 'App.model.Contract',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_contract.action',
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