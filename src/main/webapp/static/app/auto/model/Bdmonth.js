/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.model.Bdmonth', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'ym'},
        {
            name: 'bd_deal',
            type: 'integer'
        },
        {
            name: 'count',
            type: 'integer'
        }
    ]
});
