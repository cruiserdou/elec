/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_repairs', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_repairs',
    proxy: {
        type: 'ajax',
        url: 'obtain_repairs_info',
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

