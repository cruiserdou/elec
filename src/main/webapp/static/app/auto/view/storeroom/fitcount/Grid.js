var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.storeroom.fitcount.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fitcount_grid',
    store: 'syj_fitt_inventory',
    selModel: sm,
    id :'grid_fitt_inventory',
    initComponent: function () {
        this.columns = [
             {text: '日期', width: 100, dataIndex: 'tracdt', sortable: true},
             {text: '配件名称', width: 100, dataIndex: 'name', sortable: true},
             {text: '配件规格（代码）', width: 100, dataIndex: 'spec', sortable: true},
             {text: '出库数', width: 100, dataIndex: 'dvnum', sortable: true},
             {text: '实际盘点在库数量', width: 100, dataIndex: 'inventorynum', sortable: true},
             {text: '系统在库数量', width: 100, dataIndex: 'stocknum', sortable: true},
             {text: '盘点差异', width: 100, dataIndex: 'disptnum', sortable: true},
             {text: '备注', width: 100, dataIndex: 'remark', sortable: true}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_fitt_inventory',
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
