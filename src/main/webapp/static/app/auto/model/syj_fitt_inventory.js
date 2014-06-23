/**
 * Created by jj on 14-6-19.
 */


Ext.define('App.model.syj_fitt_inventory', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id'},
        {name: 'tracdt'},
        {name: 'name'},
        {name: 'spec'},
        {name: 'dvnum'},
        {name: 'inventorynum'},
        {name: 'stocknum'},
        {name: 'disptnum'},
        {name: 'remark'}
    ]
});