Ext.define('App.view.contract.upload.Upload', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.contract_upload',
    "iconCls": "icon_upload",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'panel',
                region: 'center',
                flex: 2,
                layout: 'fit',
                border: false,
                items: [
                    {
                        xtype: 'form',
                        title: '添加合同',
                        bodyPadding: 30,
                        frame: true,
                        defaults: {
                            xtype: 'textfield',
                            labelWidth: 60
                        },
                        items: [
                            {
                                name: 'code',
                                anchor: '100%',
                                fieldLabel: '合同编号'
                            },{
                                name: 'contract_nm',
                                anchor: '100%',
                                fieldLabel: '合同名称'
                            },{
                                name: 'project_nm',
                                anchor: '100%',
                                fieldLabel: '工程名称'
                            },{
                                xtype: 'datefield',
                                anchor: '100%',
                                format: 'Y-m-d',
                                name: 'sign_date',
                                fieldLabel: '签署日期'
                            },{
                                xtype: 'filefield',
                                name: 'file',
                                fieldLabel: '文件上传',
                                msgTarget: 'side',
                                allowBlank: false,
                                anchor: '100%',
                                buttonText: '选择文件'
                            },{
                                xtype: 'textareafield',
                                name: 'remark',
                                anchor: '100%',
                                fieldLabel: '备注'
                            }
                        ],
                        buttons: [
                            {
                                text: '保存',
                                iconCls: 'icon_save',
                                handler: function(){
                                    var form = this.up('form').getForm();
                                    if (form.isValid()){
                                        form.submit(
                                            {
//                                                url: '/teldata/data/upload.action',
                                                url: '/teldata/data/a_contract.action',
                                                waitMsg: 'file uploading',
                                                success: function(){
                                                    Ext.Msg.show({
                                                        title: '信息提示',
                                                        msg: '保存成功!',
                                                        buttons: Ext.Msg.OK
                                                    })
                                                }
                                            }
                                        )
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: 'border',
                border: false,
                margin: '0 0 0 5',
                region: 'east',
                flex: 3,
                items: [
                    {
                        xtype: 'contract_upload_grid',
                        region: 'center',
                        flex: 3
                    }
                ]
            }
        ]
        this.callParent(arguments);
    }
});