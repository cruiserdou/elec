/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_freight', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'tracdt'},
        {name: 'plate'},
        {name: 'load'},
        {name: 'tonnage'},
        {name: 'loss'},
        {name: 'price'},
        {name: 'loans'},
        {name: 'remit'},
        {name: 'balance'},
        {name: 'remark'}
    ]
});
