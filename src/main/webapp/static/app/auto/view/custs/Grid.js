var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.custs.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.accidents_grid',
    store: 'syj_custs',
    selModel: sm,
    id :'grid_custs',
    initComponent: function () {

        this.columns = [
            {text: '客户ID', width: 120, dataIndex: 'id'},
            {text: '客户名', width: 120, dataIndex: 'custname'},
            {text: '性别', width: 120, dataIndex: 'sex'},
            {text: '身份证号', width: 120, dataIndex: 'card'},
            {text: '客户手机号', width: 120, dataIndex: 'phone'},
            {text: '客户Email', width: 120, dataIndex: 'email'},
            {text: '客户联系地址', width: 120, dataIndex: 'address'},
            {text: '录入日期', width: 120, dataIndex: 'entry'},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_custs',
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



