var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.driver.salary.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.salary_grid',
    store: 'syj_wages',
    selModel: sm,
    id :'grid_wages',
    initComponent: function () {
        this.columns = [
            {text: '流水号', width: 120, dataIndex: 'id'},
            {text: '司机姓名', width: 80, dataIndex: 'name'},
            {text: '月份', width: 80, dataIndex: 'month'},
            {text: '基本工资', width: 80, dataIndex: 'base'},
            {text: '绩效工资', width: 80, dataIndex: 'merit'},
            {text: '生活费', width: 80, dataIndex: 'alimony'},
            {text: '罚款', width: 80, dataIndex: 'penalty'},
            {text: '借款', width: 80, dataIndex: 'loan'},
            {text: '实发工资', width: 80, dataIndex: 'reals'},
            {
                text: '发放日期',
                width: 100,
                dataIndex: 'extend',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];

        Ext.define('App.model.syj_wages', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'id'},
                {name: 'name'},
                {name: 'month'},
                {name: 'base'},
                {name: 'merit'},
                {name: 'alimony'},
                {name: 'penalty'},
                {name: 'loan'},
                {name: 'extend'},
                {name: 'remark'}
            ]
        });

        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_wages',
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