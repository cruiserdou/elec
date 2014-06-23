/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_fitt_inventory', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_fitt_inventory',
    proxy: {
        type: 'ajax',
        url: 'obtain_inventory_info',
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

