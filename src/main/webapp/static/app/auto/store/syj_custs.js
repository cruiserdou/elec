/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_custs', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_custs',
    proxy: {
        type: 'ajax',
        url: 'obtain_custs_info',
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

