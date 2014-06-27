/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_fees', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'meterid'},
        {name: 'meternum'},
        {name: 'custid'},
        {name: 'custname'},
        {name: 'typeid'},
        {name: 'typename'},
        {name: 'price'},
        {name: 'readdate'},
        {name: 'lastuesd'},
        {name: 'currentuesd'},
        {name: 'should'},
        {name: 'remark'}
    ]
});



