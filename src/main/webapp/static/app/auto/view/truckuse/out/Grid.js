var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.truckuse.out.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.truckuse_grid',
    store: 'syj_outward_car',
    selModel: sm,
    id :'grid_outward_car',
    initComponent: function () {
        this.store = 'syj_outward_car';

        this.columns = [
//            Ext.create('Ext.grid.RowNumberer'),
            {text: "申请单编号", width: 105, dataIndex: 'id', sortable: true},
            {text: "用车部门", width: 290, dataIndex: 'dept', sortable: true},
            {text: "用车人", width: 70, dataIndex: 'users', sortable: true},
            {
                text: '用车时间',
                width: 100,
                dataIndex: 'usedt',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {
                text: '预计回车时间',
                width: 100,
                dataIndex: 'estimatedt',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {text: "随车人数（人）", width: 85, dataIndex: 'pernum', sortable: true},
            {text: "用车事由", width: 80, dataIndex: 'cause', sortable: true},
            {text: "备注", width: 80, dataIndex: 'remark', sortable: true}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            columnLines: true,
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_outward_car',
                displayInfo: true,
                displayMsg: '第 {0} 至 {1} 条，共 {2}条',
                emptyMsg: '无数据显示'
            })
        });

        this.callParent(arguments);
    }
});