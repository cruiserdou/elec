/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_tire_history', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_tire_history',
    proxy: {
        type: 'ajax',
        url: 'obtain_trhistory_info',
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

