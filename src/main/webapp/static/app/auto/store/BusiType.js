/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.BusiType', {
    extend: 'Ext.data.Store',
    model: 'App.model.BusiType',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_busi_type.action',
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