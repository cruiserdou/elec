/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_qt_gather', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_qt_gather',
    proxy: {
        type: 'ajax',
        url: 'obtain_trqtgather_info',
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

