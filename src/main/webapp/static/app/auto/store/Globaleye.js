Ext.define('App.store.Globaleye', {
    extend: 'Ext.data.Store',
    model: 'App.model.Globaleye',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_globaleye.action',
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