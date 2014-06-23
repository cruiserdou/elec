var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.accidents.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.accidents_grid',
    store: 'syj_accident',
    selModel: sm,
    id :'grid_accident',
    initComponent: function () {

        this.columns = [
            {text: '工单编号', width: 120, dataIndex: 'id'},
            {text: '文件号', width: 180, dataIndex: 'file'},
            {text: '车牌号', width: 180, dataIndex: 'plate'},
            {text: '驾驶员', width: 80, dataIndex: 'driver'},
            {text: '处理情况', width: 80, dataIndex: 'condition'},
            {text: '处理结果', width: 260, dataIndex: 'results'},
            {text: '事故日期', width: 300, dataIndex: 'occurred'},
            {text: '事发地点', width: 130, dataIndex: 'happenplc'},
            {text: '修理地点', width: 200, dataIndex: 'repairplc'},
            {text: '责任认定', width: 80, dataIndex: 'duty'},
            {text: '总话费金额（元）', width: 80, dataIndex: 'amount'},
            {text: '保险金额', width: 80, dataIndex: 'costs'},
            {text: '个人支付金额', width: 80, dataIndex: 'pay'},
            {text: '事故说明', width: 260, dataIndex: 'explain'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_accident',
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