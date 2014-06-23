/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_enter_car', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_enter_car',
    proxy: {
        type: 'ajax',
        url: 'obtain_enter_info',
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