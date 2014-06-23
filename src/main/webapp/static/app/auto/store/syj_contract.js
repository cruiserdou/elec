/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_contract', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_contract',
    proxy: {
        type: 'ajax',
        url: 'obtain_contract_info',
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

