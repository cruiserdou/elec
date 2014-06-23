/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.DutyType', {
    extend: 'Ext.data.Store',
    model: 'App.model.DutyType',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_duty_type.action',
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