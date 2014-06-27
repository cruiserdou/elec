var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.types.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.refuel_oilstation_grid',
    store: 'syj_types',
    selModel: sm,
    id :'grid_types',
    initComponent: function () {
        this.columns = [
            {text: "用表类型ID", width: 160, dataIndex: 'id', sortable: true},
            {text: "电表类型", width: 160, dataIndex: 'typename', sortable: true},
            {text: '单价', width: 220, dataIndex: 'price'},
            {text: '备注',  flex: 1, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_types',
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