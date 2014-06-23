/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_traffic_annual', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_traffic_annual',
    proxy: {
        type: 'ajax',
        url: 'obtain_traffic_annual_info',
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

