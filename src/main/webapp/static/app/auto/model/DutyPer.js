/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.model.DutyPer', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'duty_type'
        },
        {
            name: 'count',
            type: 'integer'
        }
    ]
});
