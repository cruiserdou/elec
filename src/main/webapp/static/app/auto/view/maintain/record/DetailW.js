Ext.define('App.view.maintain.record.DetailW', {
    extend: 'Ext.window.Window',
    alias: 'widget.maintain_detailW',
    autoScroll: true,
    width: 400,
    height: 716,
    modal: true,
    initComponent: function () {

        var datacir_detail_form = Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            border: false,
            id: 'datacir_pubnet_detail_form',
            defaultType: 'field',
            items: [
                {
                    xtype: 'fieldset',
                    title: '基础信息',
                    collapsible: true,
                    defaultType: 'field',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            fieldLabel: '工单编号',
                            name: 'custorm_name',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '车牌号',
                            name: 'custorm_branch',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '修理厂',
                            name: 'circute_code',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '送修日期',
                            allowBlank: false,
                            name: 'busi_code'
                        },
                        {
                            fieldLabel: '预计取车时间',
                            name: 'belong_project'
                        },
                        {
                            fieldLabel: '实际取车时间',
                            name: 'bandwidth'
                        },
                        {
                            fieldLabel: '送修人',
                            name: 'lan_des'
                        },
                        {
                            fieldLabel: '取车人',
                            name: 'account'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: '费用',
                    collapsible: true,
                    defaultType: 'field',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            fieldLabel: '本次维修金额',
                            name: 'ip',
                            allowBlank: true
                        },
                        {
                            fieldLabel: '保险金额',
                            name: 'subnet',
                            allowBlank: true
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: '类型',
                    collapsible: true,
                    defaultType: 'field',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            fieldLabel: '送修类型',
                            name: 'join_dev_nm'
                        }
                    ]
                }
            ]
        });
        this.items = datacir_detail_form;
        this.callParent();
    }
});