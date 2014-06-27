var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.insurance.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.insurer_grid',
    store: 'syj_meters',
    selModel: sm,
    id :'grid_meters',
    initComponent: function () {
        this.columns = [
            {text: '电表ID', width: 80, dataIndex: 'id'},
            {text: "电表编号", width: 230, dataIndex: 'meternum', sortable: true},
            {text: "客户编号", width: 100, dataIndex: 'custid', sortable: true},
            {text: '表箱编号', width: 120, dataIndex: 'box'},
            {text: '电表型号', width: 80, dataIndex: 'model'},
            {text: '电量计数', width: 80, dataIndex: 'lastuesd'},
            {
                text: '录入日期',
                width: 100,
                dataIndex: 'entry',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_meters',
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