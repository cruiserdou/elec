Ext.define('App.view.storeroom.tyres.dataanay.DetailW', {
    extend: 'Ext.window.Window',
    alias: 'widget.tyresdataanay_w',
    autoScroll: true,
    width: 400,
    height: 716,
    modal: true,
    initComponent: function () {

        var datacir_detail_form = Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            border: false,
            id: 'datacir_gov_detail_form',
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
                            fieldLabel: '保单号',
                            name: 'circute_code',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '生效日期',
                            allowBlank: false,
                            name: 'busi_code'
                        },
                        {
                            fieldLabel: '保险公司',
                            name: 'belong_project'
                        },
                        {
                            fieldLabel: '投保费用',
                            name: 'bandwidth'
                        },
                        {
                            fieldLabel: '到期日期',
                            name: 'lan_des'
                        },
                        {
                            fieldLabel: '经手人',
                            name: 'account'
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
        this.items = datacir_detail_form;
        this.callParent();
    }
});