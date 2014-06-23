var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.insurance.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.insurer_grid',
    store: 'syj_insure',
    selModel: sm,
    id :'grid_insure',
    initComponent: function () {
        this.columns = [
            {text: "工单编号", width: 230, dataIndex: 'id', sortable: true, locked: true},
            {text: "车牌号", width: 100, dataIndex: 'plate', sortable: true},
            {text: '保单号', width: 120, dataIndex: 'policy'},
            {
                text: '生效日期',
                width: 100,
                dataIndex: 'effect',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {text: '保险公司', width: 80, dataIndex: 'company'},
            {text: '保险费用', width: 80, dataIndex: 'costs'},
            {
                text: '到期日期',
                width: 100,
                dataIndex: 'due',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {text: '经手人', width: 80, dataIndex: 'handling'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_insure',
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