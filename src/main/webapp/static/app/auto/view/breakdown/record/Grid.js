var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.breakdown.record.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bd_grid',
    store: 'BreakDown',

    initComponent: function () {
        this.columns = [
            {text: '工单编号', width: 80, dataIndex: 'duty_type'},
            {text: '车牌号', width: 100, dataIndex: 'busi_type'},
            {text: '违章类型', width: 100, dataIndex: 'workorder_type'},
            {text: '违章日期', width: 120, dataIndex: 'accept_date',
                renderer: Ext.util.Format.dateRenderer('Y-m-d')
            },
            {text: '罚款（元）', width: 80, dataIndex: 'timeout'},
            {text: '扣分', width: 80, dataIndex: 'record_person'},
            {text: '驾驶员', width: 80, dataIndex: 'archiving'},
            {text: '违章地点', width: 80, dataIndex: 'cause'},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'BreakDown',
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
