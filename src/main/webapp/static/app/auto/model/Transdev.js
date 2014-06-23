Ext.define('App.model.Transdev', {
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
            name: 'join_dev_model',
            type: 'string'
        },
        {
            name: 'nmc_nm',
            type: 'string'
        },
        {
            name: 'belong_project',
            type: 'string'
        },
        {
            name: 'inner_dev_nm',
            type: 'string'
        },
        {
            name: 'inner_dev_port',
            type: 'string'
        },
        {
            name: 'dev_type',
            type: 'string'
        },
        {
            name: 'optical_port_conf',
            type: 'string'
        },
        {
            name: 'e1_port_conf',
            type: 'string'
        },
        {
            name: 'rj45_port_conf',
            type: 'string'
        },
        {
            name: 'busi_relation',
            type: 'string'
        },
        {
            name: 'use_fiber_code',
            type: 'string'
        },
        {
            name: 'turn_on_date',
            type: 'string'
        },
        {
            name: 'remark',
            type: 'string'
        }
    ]
});