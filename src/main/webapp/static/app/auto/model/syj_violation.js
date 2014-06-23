/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_violation', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'plate'},
        {name: 'type'},
        {name: 'illegal'},
        {name: 'fine'},
        {name: 'deduct'},
        {name: 'driver'},
        {name: 'place'},
        {name: 'remark'}
    ]
});


