Ext.define('App.view.custs.DetailW', {
    extend: 'Ext.window.Window',
    alias: 'widget.geye_detailWindow',
    autoScroll: true,
    width: 400,
    modal: true,
    initComponent: function () {
        var geye_detail_form = Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            border: false,
            id: 'geye_detail_form',
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
                            fieldLabel: '文件号',
                            name: 'file'
                        },
                        {
                            fieldLabel: '车牌号',
                            name: 'plate'
                        },
                        {
                            fieldLabel: '驾驶员',
                            name: 'driver'
                        },
                        {
                            fieldLabel: '事故日期',
                            name: 'occurred'
                        },
                        {
                            fieldLabel: '事发地点',
                            name: 'happenplc'
                        },
                        {
                            fieldLabel: '修理地点',
                            name: 'repairplc'
                        },
                        {
                            fieldLabel: '责任认定',
                            name: 'duty'
                        },
                        {
                            fieldLabel: '总话费金额',
                            name: 'amount'
                        },
                        {
                            fieldLabel: '保险金额',
                            name: 'costs'
                        },
                        {
                            fieldLabel: '个人支付',
                            name: 'pay'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: '处理情况',
                            name: 'condition'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: '处理结果',
                            name: 'results'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: '事故说明',
                            name: 'explain'
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
        this.items = geye_detail_form;
        this.callParent();
    }
});