
Ext.define('App.store.syj_fees', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_fees',
    proxy: {
        type: 'ajax',
        url: 'obtain_fees_info',
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


