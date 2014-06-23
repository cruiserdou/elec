/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.Area', {
    extend: 'Ext.data.Store',
    model: 'App.model.Area',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_area.action',
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