/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_warehouse_refuel', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_warehouse_refuel',
    proxy: {
        type: 'ajax',
        url: 'obtain_whrefuel_info',
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

