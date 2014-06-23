var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.truck.info.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.truck_grid',
    store: 'syj_vehicle',
    selModel: sm,
    id :'grid_vehicle',
    initComponent: function () {
        this.columns = [
            {text: '车牌号', width: 100, dataIndex: 'plate', sortable: true},
            {text: '挂车号', width: 130, dataIndex: 'trailer', sortable: true},
            {text: '车型', width: 120, dataIndex: 'model'},
            {text: '挂车规格', width: 180, dataIndex: 'spec'},
            {text: '发动机号', width: 80, dataIndex: 'engineno'},
            {text: '底盘号', width: 80, dataIndex: 'chassisno'},
            {text: '主驾驶', width: 80, dataIndex: 'maindri'},
            {text: '副驾驶', width: 80, dataIndex: 'copilot'},
            {text: '责任人', width: 80, dataIndex: 'respons'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_vehicle',
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