Ext.define('App.view.truckuse.in.DetailW', {
    extend: 'Ext.window.Window',
    alias: 'widget.datadev_detailWindow',
    autoScroll: true,
    width: 400,
    modal: true,
    initComponent: function () {
        var datadev_detail_form = Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            border: false,
            id: 'datadev_detail_form',
            defaultType: 'field',
            items: [
                {
                    xtype: 'fieldset',
                    title: '基础信息',
                    collapsible: true,
                    defaultType: 'textfield',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            fieldLabel: '工单编号',
                            name: 'custorm_nm'
                        },
                        {
                            fieldLabel: '出车车辆',
                            name: 'custorm_branch'
                        },
                        {
                            fieldLabel: '用车部门',
                            name: 'belong_network'
                        },
                        {
                            fieldLabel: '用车人',
                            name: 'belong_project'
                        },
                        {
                            fieldLabel: '驾驶员',
                            name: 'dev_type'
                        },
                        {
                            fieldLabel: '油量状况',
                            name: 'id'
                        },
                        {
                            fieldLabel: '燃油费',
                            name: 'mac'
                        },
                        {
                            fieldLabel: '停车费',
                            name: 'join_dev_model'
                        },
                        {
                            fieldLabel: '过路费',
                            name: 'nmc_nm'
                        },
                        {
                            fieldLabel: '出车时间',
                            name: 'nmc_addr'
                        },
                        {
                            fieldLabel: '目的地',
                            name: 'inner_dev_nm'
                        },
                        {
                            fieldLabel: '里程数',
                            name: 'inner_dev_port'
                        },
                        {
                            fieldLabel: '随行来宾',
                            name: 'busi_relation'
                        },
                        {
                            fieldLabel: '随行人员',
                            name: 'use_fiber_code'
                        },
                        {
                            fieldLabel: '出车原因',
                            name: 'optical_plitter_pos'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: '备注',
                            name: 'remark'
                        }
                    ]
                }
            ]
        });
        this.items = datadev_detail_form;
        this.callParent();
    }
});