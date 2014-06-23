var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.maintain.record.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.maintain_grid',
    store: 'syj_repairs',
    selModel: sm,
    id :'grid_repairs',
    initComponent: function () {
        this.columns = [
            {text: "工单编号", width: 230, dataIndex: 'id', sortable: true, locked: true},
            {text: "车牌号", width: 160, dataIndex: 'plate', sortable: true},
            {text: '修理厂', width: 220, dataIndex: 'garage'},
            {
                text: '送修日期',
                width: 100,
                dataIndex: 'arriveddt',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {
                text: '预取车时间',
                width: 100,
                dataIndex: 'estimatedt',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {
                text: '实际取车时间',
                width: 100,
                dataIndex: 'practicaldt',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {text: '送修人', width: 100, dataIndex: 'arrivedper'},
            {text: '取车人', width: 80, dataIndex: 'repairper'},
            {text: '本次维修保养费', width: 100, dataIndex: 'fees'},
            {text: '保险金额', width: 80, dataIndex: 'costs'},
            {text: '送修类型', width: 80, dataIndex: 'type'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_repairs',
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