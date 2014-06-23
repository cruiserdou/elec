var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.storeroom.oil.use.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.oiluse_grid',
    store: 'syj_diesel_wdvoucher',
    selModel: sm,
    id :'grid_diesel_wdvoucher',
    initComponent: function () {
        this.columns = [
            {text: "记录编号", width: 230, dataIndex: 'id', sortable: true, },
            {text: '日期', width: 130, dataIndex: 'tracdt', sortable: true},
            {text: '车号', width: 100, dataIndex: 'plate', sortable: true},
            {text: '入库数（吨）', width: 120, dataIndex: 'wv'},
            {text: '入库换算数（升）', width: 180, dataIndex: 'wvl'},
            {text: '出库数（吨）', width: 80, dataIndex: 'dv'},
            {text: '单价（元）', width: 80, dataIndex: 'price'},
            {text: '出库金额（元）', width: 80, dataIndex: 'wvmon'},
            {text: '入库金额（元）', width: 80, dataIndex: 'dvmon'},
            {text: '余吨', width: 80, dataIndex: 'surplus'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_diesel_wdvoucher',
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