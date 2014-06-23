/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_out_refuel', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_out_refuel',
    proxy: {
        type: 'ajax',
        url: 'obtain_outrefuel_info',
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

