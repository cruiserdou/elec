var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.storeroom.tyres.datacount.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tyresdatacount_grid',
    store: 'syj_qt_gather',
    selModel: sm,
    id :'grid_qt_gather',
    initComponent: function () {
        this.columns = [
            {text: '车队名称', width: 100, dataIndex: 'fleet', sortable: true},
            {text: '品牌', width: 130, dataIndex: 'brand', sortable: true},
            {text: '规格', width: 120, dataIndex: 'spec'},
            {text: '花纹', width: 100, dataIndex: 'tartan'},
            {text: '胎号', width: 80, dataIndex: 'tyreno'},
            {text: '采购价（元）', width: 80, dataIndex: 'price'},
            {text: '新胎／翻新胎', width: 80, dataIndex: 'isnum'},
            {text: '拆卸日期', width: 80, dataIndex: 'dispart'},
            {text: '刻沟后里程', width: 80, dataIndex: 'ditchml'},
            {text: '报废原因', width: 80, dataIndex: 'scrap'},
            {text: '使用里程', width: 80, dataIndex: 'useml'},
            {text: '修补次数', width: 80, dataIndex: 'repairnum'},
            {text: '换位次数', width: 80, dataIndex: 'convoynum'},
            {text: '服务金额', width: 80, dataIndex: 'service'},
            {text: '刻沟', width: 80, dataIndex: 'ditch'},
            {text: '气压调整次数', width: 80, dataIndex: 'presnum'},
            {text: '安装日期', width: 80, dataIndex: 'install'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_qt_gather',
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