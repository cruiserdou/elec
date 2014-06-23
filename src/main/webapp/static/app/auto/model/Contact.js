/**
 * Created by dou on 14-1-11.
 */
Ext.define('App.model.Contact', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'department',
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'position',
            type: 'string'
        },
        {
            name: 'tel',
            type: 'string'
        },
        {
            name: 'phone',
            type: 'string'
        }
    ]
});
