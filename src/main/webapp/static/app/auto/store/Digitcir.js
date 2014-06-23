Ext.define('App.store.Digitcir', {
    extend: 'Ext.data.Store',
    model: 'App.model.Digitcir',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_digit_circute.action',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            totalProperty: 'total',
            root: 'list'
        }
    },
    autoLoad: false
});
