/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.WorkOrderPer', {
    extend: 'Ext.data.Store',
    model: 'App.model.WorkOrderPer',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_bd_workorder.action',
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