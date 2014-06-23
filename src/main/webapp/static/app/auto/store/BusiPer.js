/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.BusiPer', {
    extend: 'Ext.data.Store',
    model: 'App.model.BusiPer',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_bd_busi.action',
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