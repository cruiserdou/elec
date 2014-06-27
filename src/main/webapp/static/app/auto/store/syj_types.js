
Ext.define('App.store.syj_types', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_types',
    proxy: {
        type: 'ajax',
        url: 'obtain_types_info',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            root: 'list'
        }
    },
    autoLoad: true
});



