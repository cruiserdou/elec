Ext.define('App.view.inspection.transm.DetailW', {
    extend: 'Ext.window.Window',
    alias: 'widget.custorm_detail',
    autoScroll: true,
    width: 400,
    modal: true,
    initComponent: function () {
        var custorm_detail_form = Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            border: false,
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
                            name: 'custorm_nm',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '车牌号',
                            name: 'custorm_branch',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '油气站',
                            name: 'lnk_person',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '加油日期',
                            allowBlank: false,
                            name: 'post'
                        },
                        {
                            fieldLabel: '油料标号',
                            name: 'lnk_tel'
                        },
                        {
                            fieldLabel: '付款方式',
                            name: 'lnk_phone'
                        },
                        {
                            fieldLabel: '油卡编号',
                            name: 'lnk_addr'
                        },
                        {
                            fieldLabel: '单价',
                            name: 'custorm_type'
                        },
                        {
                            fieldLabel: '加油量',
                            name: 'custorm_level'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: '金额',
                            name: 'custorm_business_des'
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
        this.items = custorm_detail_form;
        this.callParent();
    }
});