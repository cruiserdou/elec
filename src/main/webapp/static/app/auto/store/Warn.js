/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.Warn', {
    extend: 'Ext.data.Store',
    model: 'App.model.Warn',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_warn_month.action',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            root: 'list',
            totalProperty: 'total'
        }
    },
    autoLoad: true
});