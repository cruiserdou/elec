var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.storeroom.fituse.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fituse_grid',
    store: 'syj_fitt_consume',
    selModel: sm,
    id :'grid_fitt_consume',
    initComponent: function () {
        this.columns = [
             {text: '配件名称', 
                columns:[
                {text: '日期', width: 190, dataIndex: 'tracdt'},
                {text: '车辆号', width: 190, dataIndex: 'plate'}
               ]
             },
            {text: '配件规格',
                columns:[
                {text: '出库数量', width: 190, dataIndex: 'dvnum'},
                {text: '结余数量', width: 190, dataIndex: 'surpnum'}
               ]
             },
            {text: '备注', width: 100, dataIndex: 'remark', sortable: true}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_fitt_consume',
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
