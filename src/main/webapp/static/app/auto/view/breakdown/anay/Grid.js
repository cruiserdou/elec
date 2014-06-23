var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.breakdown.anay.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.anay_grid',
    store: 'JobAnay',

    initComponent: function () {
        this.columns = [
            {text: '处理人', width: 100, dataIndex: 'record_person'},
            {text: '障碍处理', flex: 1, dataIndex: 'bd_deal',
                renderer: function (val) {
                    if (val == 0) {
                        return '';
                    } else {
                        return val;
                    }
                }
            },
            {text: '电路开通', flex: 1, dataIndex: 'cir_open',
                renderer: function (val) {
                    if (val == 0) {
                        return '';
                    } else {
                        return val;
                    }
                }
            },
            {text: '客户支撑', flex: 1, dataIndex: 'custorm_service',
                renderer: function (val) {
                    if (val == 0) {
                        return '';
                    } else {
                        return val;
                    }
                }
            },
            {text: '项目管理', flex: 1, dataIndex: 'project_control',
                renderer: function (val) {
                    if (val == 0) {
                        return '';
                    } else {
                        return val;
                    }
                }
            },
            {text: '重要工作', flex: 1, dataIndex: 'import_job',
                renderer: function (val) {
                    if (val == 0) {
                        return '';
                    } else {
                        return val;
                    }
                }
            },
            {text: '其他', flex: 1, dataIndex: 'other',
                renderer: function (val) {
                    if (val == 0) {
                        return '';
                    } else {
                        return val;
                    }
                }
            }
        ];

        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'BreakDown',
                displayInfo: true,
                displayMsg: '第 {0} 到 {1} 条数据, 共{2}条',
                emptyMsg: '无数据'
            }),
            columnLines: true,
            enableLocking: true
        });

        this.callParent(arguments);
    }
});
