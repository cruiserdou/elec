var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.refuel.storeroom.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.refuel_grid',
    store: 'syj_warehouse_refuel',
    selModel: sm,
    id :'grid_warehouse_refuel',
    initComponent: function () {
        this.columns = [
            {text: "工单号", width: 130, dataIndex: 'id', sortable: true},
            {text: "车牌号", width: 100, dataIndex: 'plate'},
            {text: '加油日期', width: 120, dataIndex: 'oil'},
            {text: '油料标号', width: 120, dataIndex: 'type'},
            {text: '单价（元）', width: 90, dataIndex: 'price'},
            {text: '加油量（升）', width: 80, dataIndex: 'fuel'},
            {text: '金额（元）', width: 100, dataIndex: 'pay'},
            {text: '经手人', width: 100, dataIndex: 'handling'},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_warehouse_refuel',
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