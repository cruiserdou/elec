var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.truckuse.in.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.truckin_grid',
    store: 'syj_enter_car',
    selModel: sm,
    id :'grid_enter_car',
    initComponent: function () {

        this.columns = [
            {text: '工单编号', width: 230, dataIndex: 'id', sortable: true},
            {text: '用车部门', width: 120, dataIndex: 'dept'},
            {text: '用车人', width: 80, dataIndex: 'users'},
            {text: '驾驶员', width: 80, dataIndex: 'driver'},
            {text: '油量状况', width: 80, dataIndex: 'condition'},
            {text: '停车费', width: 100, dataIndex: 'parks'},
            {text: '过路费', width: 100, dataIndex: 'tolls'},
//            {text: '出车时间', width: 300, dataIndex: 'nmc_nm', hidden: true},
//            {text: '目的地', width: 80, dataIndex: 'nmc_addr', hidden: true},
            {text: '里程数（公里)', width: 120, dataIndex: 'mileage'},
            {text: '出车原因', width: 260, dataIndex: 'cause'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];



        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_enter_car',
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