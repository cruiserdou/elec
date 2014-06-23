/**
 * Created by dou on 14-1-11.
 */
Ext.define('App.model.Fiber', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'custorm_nm',
            type: 'string'
        },
        {
            name: 'custorm_branch',
            type: 'string'
        },
        {
            name: 'join_splice_box_nm',
            type: 'string'
        },
        {
            name: 'fiber_count',
            type: 'int'
        },
        {
            name: 'fiber_core_use',
            type: 'string'
        },
        {
            name: 'custorm_formed_pos',
            type: 'string'
        },
        {
            name: 'optical_splice_formed_pos',
            type: 'string'
        },
        {
            name: 'contain_dev_nm',
            type: 'string'
        },
        {
            name: 'fiber_route',
            type: 'string'
        },
        {
            name: 'remark',
            type: 'string'
        }
    ]
});
