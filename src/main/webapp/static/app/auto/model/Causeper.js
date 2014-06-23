/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.model.Causeper', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'cause_type'
        },
        {
            name: 'count',
            type: 'integer'
        }
    ]
});
