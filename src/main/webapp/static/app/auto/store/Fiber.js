Ext.define('App.store.Fiber', {
    extend: 'Ext.data.Store',
    model: 'App.model.Fiber',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_fiber.action',
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