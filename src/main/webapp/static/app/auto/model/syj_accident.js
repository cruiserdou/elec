/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_accident', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'file'},
        {name: 'plate'},
        {name: 'driver'},
        {name: 'condition'},
        {name: 'results'},
        {name: 'occurred'},
        {name: 'happenplc'},
        {name: 'repairplc'},
        {name: 'duty'},
        {name: 'amount'},
        {name: 'costs'},
        {name: 'pay'},
        {name: 'explain'},
        {name: 'remark'}
    ]
});

