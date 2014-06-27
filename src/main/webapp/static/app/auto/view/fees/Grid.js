var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.fees.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.refuel_grid',
    store: 'syj_fees',
    selModel: sm,
    id :'grid_fees',
    initComponent: function () {
        this.columns = [
            {text: '费用ID', width: 80, dataIndex: 'id'},
            {text: '电表ID', width: 80, dataIndex: 'meterid'},
            {text: '电表编号', width: 100, dataIndex: 'meternum'},
            {text: '客户ID', width: 80, dataIndex: 'custid'},
            {text: '客户名', width: 100, dataIndex: 'custname'},
            {text: '用表类型ID', width: 80, dataIndex: 'typeid'},
            {text: '用表类型名称', width: 100, dataIndex: 'typename'},
            {text: '单价', width: 100, dataIndex: 'price'},
            {text: '抄表日期', width: 100, dataIndex: 'readdate',
                renderer: Ext.util.Format.dateRenderer('Y-m-d')
            },
            {text: '上期计数', width: 100, dataIndex: 'lastuesd'},
            {text: '本期计数', width: 100, dataIndex: 'currentuesd'},
            {text: '本期应交金额', width: 100, dataIndex: 'should'},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_fees',
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