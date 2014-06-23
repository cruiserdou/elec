/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_fitt_consume', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_fitt_consume',
    proxy: {
        type: 'ajax',
        url: 'obtain_consume_info',
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



