/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_insure', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_insure',
    proxy: {
        type: 'ajax',
        url: 'obtain_insure_info',
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

