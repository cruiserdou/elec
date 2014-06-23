/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_tsa_annual', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_tsa_annual',
    proxy: {
        type: 'ajax',
        url: 'obtain_tsa_annual_info',
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

