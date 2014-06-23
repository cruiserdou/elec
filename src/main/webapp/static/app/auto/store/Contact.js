Ext.define('App.store.Contact', {
    extend: 'Ext.data.Store',
    model: 'App.model.Contact',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_contact.action',
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