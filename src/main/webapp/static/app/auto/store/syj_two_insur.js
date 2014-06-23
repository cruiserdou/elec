/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_two_insur', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_two_insur',
    proxy: {
        type: 'ajax',
        url: 'obtain_twoInsur_info',
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

