/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_accident', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_accident',
    proxy: {
        type: 'ajax',
        url: 'obtain_accident_info',
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

