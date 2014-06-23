/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_driver', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_driver',
    proxy: {
        type: 'ajax',
        url: 'obtain_driver_info',
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

