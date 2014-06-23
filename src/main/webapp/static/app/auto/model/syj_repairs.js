/**
 * Created by jj on 14-6-19.
 */
Ext.define('App.model.syj_repairs', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'plate'},
        {name: 'garage'},
        {name: 'arriveddt'},
        {name: 'estimatedt'},
        {name: 'practicaldt'},
        {name: 'arrivedper'},
        {name: 'repairper'},
        {name: 'fees'},
        {name: 'costs'},
        {name: 'type'},
        {name: 'remark'}
    ]
});



