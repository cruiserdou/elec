/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_purchase', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_purchase',
    proxy: {
        type: 'ajax',
        url: 'obtain_purchase_info',
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

