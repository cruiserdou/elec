var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.truck.transdetail.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.transdetail_grid',
    store: 'syj_traffic_details',
    selModel: sm,
    id :'grid_traffic_details',
    initComponent: function () {
        this.columns = [
            {text: '日期', width: 100, dataIndex: 'tracdt', sortable: true},
            {text: '装货单位', width: 100, dataIndex: 'load', sortable: true},
            {text: '装货吨位', width: 100, dataIndex: 'loadtg', sortable: true},
            {text: '卸货单位', width: 100, dataIndex: 'unload', sortable: true},
            {text: '卸货吨位', width: 100, dataIndex: 'unloadtg', sortable: true},
            {text: '物损损耗', width: 100, dataIndex: 'loss', sortable: true},
            {text: '耗油（元）', width: 100, dataIndex: 'gets', sortable: true},
            {text: '过路费（元）', width: 100, dataIndex: 'tolls', sortable: true},
            {text: '个人奖金（元）', width: 100, dataIndex: 'bonus', sortable: true},
            {text: '罚款（元）', width: 100, dataIndex: 'penalty', sortable: true},
            {text: '修理费（元／次）', width: 100, dataIndex: 'repair', sortable: true},
            {text: '停车费（元／次）', width: 100, dataIndex: 'park', sortable: true},
            {text: '单趟实际费用（元／次）', width: 100, dataIndex: 'park', sortable: true},
            {text: '工资运费（元）', width: 100, dataIndex: 'freight', sortable: true},
            {text: '保底工资（元）', width: 100, dataIndex: 'base', sortable: true},
            {text: '生活费（元）', width: 100, dataIndex: 'alimony', sortable: true},
            {text: '实际工资（元）', width: 100, dataIndex: 'realwg', sortable: true},
            {text: '实际运费（元）', width: 100, dataIndex: 'realft', sortable: true},
            {text: '驾驶员', width: 100, dataIndex: 'driver', sortable: true},
            {text: '备注', width: 100, dataIndex: 'remark', sortable: true}
        ];



        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_traffic_details',
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
