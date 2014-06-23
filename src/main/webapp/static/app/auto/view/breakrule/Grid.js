var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.breakrule.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.br_grid',
    store: 'syj_violation',
    selModel: sm,
    id :'grid_violation',
    initComponent: function () {
        this.columns = [
            {text: '违章编号', width: 80, dataIndex: 'id'},
            {text: '车牌号', width: 100, dataIndex: 'plate'},
            {text: '违章类型', width: 100, dataIndex: 'type'},
            {text: '违章日期', width: 120, dataIndex: 'illegal',
                renderer: Ext.util.Format.dateRenderer('Y-m-d')
            },
            {text: '罚款（元）', width: 80, dataIndex: 'fine'},
            {text: '扣分', width: 80, dataIndex: 'deduct'},
            {text: '驾驶员', width: 80, dataIndex: 'driver'},
            {text: '违章地点', width: 80, dataIndex: 'place'},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_violation',
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
