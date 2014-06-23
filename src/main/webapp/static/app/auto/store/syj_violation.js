/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_violation', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_violation',
    proxy: {
        type: 'ajax',
        url: 'obtain_violation_info',
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

