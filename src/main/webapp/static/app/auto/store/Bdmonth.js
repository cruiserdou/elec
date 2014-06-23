/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.Bdmonth', {
    extend: 'Ext.data.Store',
    model: 'App.model.Bdmonth',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_bdmonth.action',
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