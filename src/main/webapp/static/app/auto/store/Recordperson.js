/**
 * Created by wQ on 14-2-18.
 */
Ext.define('App.store.Recordperson', {
    extend: 'Ext.data.Store',
    model: 'App.model.Recordperson',
    proxy: {
        type: 'ajax',
        url: '/teldata/data/q_recordperson.action',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            root: 'list'
        }
    },
    autoLoad: true
})
