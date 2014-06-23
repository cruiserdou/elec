/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_outward_car', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_outward_car',
    proxy: {
        type: 'ajax',
        url: 'obtain_outward_info',
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

