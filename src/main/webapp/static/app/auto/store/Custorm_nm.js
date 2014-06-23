/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.Custorm_nm', {
    extend: 'Ext.data.Store',
    model: 'App.model.Custorm_nm',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_custorm_nm.action',
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