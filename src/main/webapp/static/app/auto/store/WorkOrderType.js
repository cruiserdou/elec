/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.WorkOrderType', {
    extend: 'Ext.data.Store',
    model: 'App.model.WorkOrderType',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_workorder.action',
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