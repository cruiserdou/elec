/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.CauseType', {
    extend: 'Ext.data.Store',
    model: 'App.model.CauseType',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_cause.action',
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