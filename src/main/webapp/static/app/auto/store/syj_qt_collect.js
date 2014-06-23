/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.store.syj_qt_collect', {
    extend: 'Ext.data.Store',
    model: 'App.model.syj_qt_collect',
    proxy: {
        type: 'ajax',
        url: 'obtain_trqtcollect_info',
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

