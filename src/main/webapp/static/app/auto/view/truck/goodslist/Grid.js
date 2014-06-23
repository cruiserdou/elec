var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.truck.goodslist.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.goodslist_grid',
    store: 'syj_purchase',
    selModel: sm,
    id :'grid_purchase',
    initComponent: function () {
        this.columns = [
             {text: '日期', width: 100, dataIndex: 'tracdt', sortable: true},
             {text: '明细',
                columns:[
                {text: '车号', width: 130, dataIndex: 'plate'},
                {text: '吨位', width: 130, dataIndex: 'tonnage'},
                {text: '目的地', width: 130, dataIndex: 'dest'}
               ]
             },
             {text: '合同数量(吨)', width: 100, dataIndex: 'orders', sortable: true},
             {text: '合同单价(元)', width: 100, dataIndex: 'price', sortable: true},
             {text: '货款总计(元)', width: 100, dataIndex: 'loans', sortable: true},
             {text: '汇款金额(元)', width: 100, dataIndex: 'remit', sortable: true},
             {text: '余额(吨)', width: 100, dataIndex: 'balance', sortable: true},
             {text: '余额(元)', width: 100, dataIndex: 'spare', sortable: true},
             {text: '备注', width: 100, dataIndex: 'remark', sortable: true}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_purchase',
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
