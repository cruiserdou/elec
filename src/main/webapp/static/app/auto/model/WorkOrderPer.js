/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.model.WorkOrderPer', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'workorder_type'
        },
        {
            name: 'count',
            type: 'integer'
        }
    ]
});
