Ext.define('App.store.Datacirgov', {
    extend: 'Ext.data.Store',
    model: 'App.model.Datacir',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_govvpn_circute.action',
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