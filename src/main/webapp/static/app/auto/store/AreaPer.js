/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.AreaPer', {
    extend: 'Ext.data.Store',
    model: 'App.model.AreaPer',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_bd_area.action',
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