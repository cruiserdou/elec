/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.model.BusiPer', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'busi_type'
        },
        {
            name: 'count',
            type: 'integer'
        }
    ]
});
