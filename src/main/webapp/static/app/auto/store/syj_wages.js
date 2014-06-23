/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_wages', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_wages',
    proxy: {
        type: 'ajax',
        url: 'obtain_wages_info',
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

