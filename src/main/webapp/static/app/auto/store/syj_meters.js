Ext.define('App.store.syj_meters', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_meters',
    proxy: {
        type: 'ajax',
        url: 'obtain_meters_info',
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


