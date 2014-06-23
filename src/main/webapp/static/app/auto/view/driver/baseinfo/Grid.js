var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.driver.baseinfo.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.datacir_grid_gov',
    store: 'syj_driver',
    selModel: sm,
    id :'grid_driver',
    initComponent: function () {
        this.columns = [
            {text: '司机编号', width: 100, dataIndex: 'id', sortable: true},
            {text: '司机姓名', width: 130, dataIndex: 'name', sortable: true},
            {text: '性别', width: 120, dataIndex: 'sex'},
            {
                text: '生日',
                width: 100,
                dataIndex: 'birthday',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {text: '联系地址', width: 180, dataIndex: 'addr'},
            {text: '常用手机号', width: 80, dataIndex: 'phone'},
            {text: '备用手机号', width: 80, dataIndex: 'tphone'},
            {text: '身份证号', width: 80, dataIndex: 'card'},
            {text: '驾驶证号', width: 80, dataIndex: 'drino'},
            {text: '操作证号', width: 80, dataIndex: 'openo'},
            {text: '押运证号', width: 80, dataIndex: 'escorno'},
            {text: '出境证号', width: 80, dataIndex: 'atno'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_driver',
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