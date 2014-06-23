Ext.define('App.view.truckuse.out.DetailW', {
    extend: 'Ext.window.Window',
    alias: 'widget.digitcir_detailWindow',
    autoScroll: true,
    width: 430,
    height: 756,
    modal: true,
    initComponent: function () {
        var digitcir_detail_form = Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            border: false,
            id: 'digitcir_detail_form',
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
                            fieldLabel: '制单人',
                            name: 'custorm_name',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '申请单编号',
                            name: 'custorm_branch',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '用车部门',
                            name: 'circute_code',
                            allowBlank: false
                        },
                        {
                            fieldLabel: '用车人',
                            allowBlank: false,
                            name: 'busi_code'
                        },
                        {
                            fieldLabel: '用车时间',
                            name: 'belong_project'
                        },
                        {
                            fieldLabel: '申请车辆',
                            name: 'circute_property'
                        },
                        {
                            fieldLabel: '随车人数',
                            name: 'circute_type'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: '用车事由',
                            name: 'bandwidth'
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
        this.items = digitcir_detail_form;
        this.callParent();
    }
});