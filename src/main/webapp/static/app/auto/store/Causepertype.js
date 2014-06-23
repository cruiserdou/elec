/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.store.Causepertype', {
    extend: 'Ext.data.Store',
    model: 'App.model.Causeper',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_bd_cause_type.action',
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