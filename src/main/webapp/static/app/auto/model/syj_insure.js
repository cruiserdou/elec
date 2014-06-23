/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_insure', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'plate'},
        {name: 'policy'},
        {name: 'effect'},
        {name: 'company'},
        {name: 'costs'},
        {name: 'due'},
        {name: 'handling'},
        {name: 'remark'}
    ]
});

