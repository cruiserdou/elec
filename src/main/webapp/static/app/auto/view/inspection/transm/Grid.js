var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.inspection.transm.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.transm_grid',
    store: 'syj_tsa_annual',
    selModel: sm,
    id :'grid_tsa_annual',
    initComponent: function () {
        this.columns = [
            {text: '工单号', width: 130, dataIndex: 'id', sortable: true},
            {text: '车牌号', width: 100, dataIndex: 'plate'},
            {text: '车管所', width: 120, dataIndex: 'tsa'},
            {text: '年检日期', width: 120, dataIndex: 'annualdt'},
            {text: '到期日期', width: 100, dataIndex: 'expiredt'},
            {text: '年检费用（元）', width: 100, dataIndex: 'fees'},
            {text: '经手人', width: 100, dataIndex: 'handling'},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_tsa_annual',
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