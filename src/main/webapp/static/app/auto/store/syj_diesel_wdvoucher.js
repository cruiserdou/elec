/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_diesel_wdvoucher', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_diesel_wdvoucher',
    proxy: {
        type: 'ajax',
        url: 'obtain_wdvoucher_info',
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



