/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_users', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'username'},
        {name: 'password'},
        {name: 'sex'},
        {name: 'email'},
        {name: 'phone'},
        {name: 'address'},
        {name: 'card'},
        {name: 'state'},
        {name: 'entry'},
        {name: 'deptid'},
        {name: 'remark'}
    ]
});


