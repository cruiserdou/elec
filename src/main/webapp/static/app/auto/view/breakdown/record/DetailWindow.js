Ext.define('App.view.breakdown.record.DetailWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.bd_detailWindow',
    autoScroll: true,
    width: 400,
    modal: true,
    initComponent: function () {

        var bd_detail_form = Ext.create('Ext.form.Panel', {
            bodyPadding: 10,
            border: false,
            id: 'bd_detail_form',
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
                            name: 'custorm_nm',
                            xtype: 'combobox',
                            fieldLabel: '客户名称',
                            store: 'Custorm_nm',
                            valueField: 'custorm_nm',
                            displayField: 'custorm_nm',
                            typeAhead: true,
                            allowBlank: false,
                            queryMode: 'local'
                        },
                        {
                            xtype: 'combobox',
                            editable: false,
                            value: '城市',
                            fieldLabel: '区域',
                            name: 'area',
                            store: 'Area',
                            displayField: 'nm',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            editable: false,
                            fieldLabel: '任务类型',
                            store: 'DutyType',
                            displayField: 'nm',
                            name: 'duty_type',
                            allowBlank: false
                        },
                        {
                            xtype: 'combobox',
                            editable: false,
                            fieldLabel: '业务类型',
                            store: 'BusiType',
                            displayField: 'nm',
                            allowBlank: false,
                            name: 'busi_type'
                        },
                        {
                            xtype: 'combobox',
                            editable: false,
                            store: 'WorkOrderType',
                            displayField: 'nm',
                            fieldLabel: '工单属性',
                            name: 'workorder_type'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: '责任方',
                            editable: false,
                            value: '电信',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['name'],
                                data: [
                                    {
                                        name: '电信'
                                    },
                                    {
                                        name: '客户'
                                    }
                                ]
                            }),
                            displayField: 'name',
                            name: 'cause_type',
                            valueField: 'name'
                        },
                        {
                            xtype: 'combobox',
                            store: 'CauseType',
                            fieldLabel: '具体原因',
                            displayField: 'nm',
                            name: 'cause'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: '内容描述',
                            name: 'detail_cause'
                        },
                        {
                            fieldLabel: '处理人员',
                            name: 'record_person'
                        },
                        {
                            xtype: 'textareafield',
                            fieldLabel: '备注',
                            name: 'remark'
                        },
                        {
                            xtype: 'combobox',
                            fieldLabel: '归档',
                            editable: false,
                            value: '未归档',
                            name: 'archiving',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['nm'],
                                data: [
                                    {nm: '已归档'},
                                    {nm: '未归档'}
                                ]
                            }),
                            displayField: 'nm',
                            valueField: 'nm'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '超时',
                            name: 'timeout'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: '时间信息',
                    collapsible: true,
                    defaultType: 'field',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            fieldLabel: '派出时间',
                            format: 'Y-m-d',
                            name: 'accept_date',
                            allowBlank: true
                        },
                        {
                            xtype: 'datefield',
                            format: 'Y-m-d',
                            fieldLabel: '完成时间',
                            name: 'record_date',
                            allowBlank: true
                        }
                    ]
                },
                {
                    fieldLabel: '编号',
                    hidden: true,
                    xtype: 'textfield',
                    name: 'id'
                }
            ]
        });
        this.items = bd_detail_form;
        this.callParent();
    }
});