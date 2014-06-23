/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_traffic_annual', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'plate'},
        {name: 'team'},
        {name: 'annualdt'},
        {name: 'expiredt'},
        {name: 'fees'},
        {name: 'handling'},
        {name: 'remark'}
    ]
});


