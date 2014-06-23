/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.BreakDown', {
    extend: 'Ext.data.Store',
    model: 'App.model.BreakDown',
    pageSize: 50,
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_bd.action',
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