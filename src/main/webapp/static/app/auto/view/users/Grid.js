var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.users.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.datacir_grid_gov',
    store: 'syj_users',
    selModel: sm,
    id :'grid_users',
    initComponent: function () {
        this.columns = [
            {text: '用户ID', width: 80, dataIndex: 'id', sortable: true},
            {text: '用户名', width: 120, dataIndex: 'username', sortable: true},
            {text: '用户密码', width: 100, dataIndex: 'password', sortable: true},
            {text: '性别', width: 80, dataIndex: 'sex'},
            {text: '用户Email', width: 100, dataIndex: 'email'},
            {text: '用户手机号', width: 100, dataIndex: 'phone'},
            {text: '联系地址', width: 180, dataIndex: 'address'},
            {text: '用户状态', width: 80, dataIndex: 'state'},
            {
                text: '录入日期',
                width: 100,
                dataIndex: 'entry',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },

            {text: '部门', width: 100, dataIndex: 'deptid'},
            {text: '备注',flex: 1, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_users',
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