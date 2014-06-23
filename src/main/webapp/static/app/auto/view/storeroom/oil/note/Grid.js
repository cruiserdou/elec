var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.storeroom.oil.note.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.oilnote_grid',
    store: 'syj_diesel_reconcile',
    selModel: sm,
    id :'grid_diesel_reconcile',
    initComponent: function () {
        this.columns = [
            {text: "记录编号", width: 230, dataIndex: 'id', sortable: true },
            {text: '日期', width: 100, dataIndex: 'tracdt', sortable: true},
            {text: '车辆号', width: 130, dataIndex: 'plate', sortable: true},
            {text: '油本明细',
                columns: [
                    {text: '单价', width: 100, dataIndex: 'price'},
                    {text: '金额', width: 120, dataIndex: 'wvmon'}
                ]
            },
            {text: '信封报账', width: 120, dataIndex: 'account'},
            {text: '差异', width: 180, dataIndex: 'dispt'},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_diesel_reconcile',
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