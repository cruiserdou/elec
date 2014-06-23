/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_freight', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_freight',
    proxy: {
        type: 'ajax',
        url: 'obtain_freight_info',
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

