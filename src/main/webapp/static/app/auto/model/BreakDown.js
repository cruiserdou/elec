/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.model.BreakDown', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id'
        },
        {
            name: 'custorm_nm'
        },
        {
            name: 'area'
        },
        {
            name: 'duty_type'
        },
        {
            name: 'busi_type'
        },
        {
            name: 'workorder_type'
        },
        {
            name: 'cause'
        },
        {
            name: 'detail_cause'
        },
        {
            name: 'accept_date',
            type: 'date',
            convert: function (v) {
                if (v == null) {
                    return null;
                }
                var str = v.toString().substring(0, 10);
                return new Date(Date.parse(str.replace(/-/g, "/")));
            }
        },
        {
            name: 'record_date',
            type: 'date',
            convert: function (v) {
                if (v == null) {
                    return null;
                }
                var str = v.toString().substring(0, 10);
                return new Date(Date.parse(str.replace(/-/g, "/")));
            }
        },
        {
            name: 'record_person'
        },
        {name: 'remark'},
        {name: 'timeout'},
        {name: 'archiving'}
    ]
});
