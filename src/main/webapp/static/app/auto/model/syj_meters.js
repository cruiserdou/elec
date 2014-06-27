/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_meters', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'meternum'},
        {name: 'custid'},
        {name: 'custname'},
        {name: 'box'},
        {name: 'model'},
        {name: 'lastuesd'},
        {name: 'entry'},
        {name: 'remark'}
    ]
});


