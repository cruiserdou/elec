var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.truck.fare.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.fare_grid',
    store: 'syj_freight',
    selModel: sm,
    id :'grid_freight',
    initComponent: function () {
        this.columns = [
             {text: '日期', width: 100, dataIndex: 'tracdt', sortable: true},
             {text: '其它车运费明细', 
                columns:[
                {text: '车号', width: 130, dataIndex: 'plate'},
                {text: '装货单位及吨位', width: 130, dataIndex: 'load'},
                {text: '卸车吨位', width: 130, dataIndex: 'tonnage'},
                {text: '差吨', width: 130, dataIndex: 'loss'},
                {text: '单价', width: 130, dataIndex: 'price'}
               ]
             },
             {text: '货款总计', width: 100, dataIndex: 'loans', sortable: true},
             {text: '汇款金额', width: 100, dataIndex: 'remit', sortable: true},
             {text: '余额', width: 100, dataIndex: 'balance', sortable: true},
             {text: '备注', width: 100, dataIndex: 'remark', sortable: true}
        ];



        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_freight',
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
