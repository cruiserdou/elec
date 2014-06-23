/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_traffic_details', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_traffic_details',
    proxy: {
        type: 'ajax',
        url: 'obtain_tradetails_info',
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

