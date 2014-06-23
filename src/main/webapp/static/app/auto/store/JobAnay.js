/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.JobAnay', {
    extend: 'Ext.data.Store',
    model: 'App.model.JobAnay',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_jobanay.action',
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