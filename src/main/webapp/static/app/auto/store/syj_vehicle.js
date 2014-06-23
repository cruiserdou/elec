/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_vehicle', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_vehicle',
    proxy: {
        type: 'ajax',
        url: 'obtain_vehicle_info',
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

