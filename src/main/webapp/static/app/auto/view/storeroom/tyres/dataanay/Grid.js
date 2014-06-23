var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.storeroom.tyres.dataanay.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tyresdataanay_grid',
    store: 'syj_qt_analysis',
    selModel: sm,
    id :'grid_qt_analysis',
    initComponent: function () {
        this.columns = [
            {text: '规格', width: 100, dataIndex: 'spec', sortable: true},
            {text: '花纹', width: 130, dataIndex: 'tartan', sortable: true},
            {text: '胎号', width: 120, dataIndex: 'tyreno'},
            {text: '报废原因', width: 180, dataIndex: 'scrap'},
            {text: '数量', width: 80, dataIndex: 'numbers'},
            {text: '平均价格', width: 80, dataIndex: 'price'},
            {text: '平均百公里成本', width: 130, dataIndex: 'costs'},
            {text: '平均使用里程', width: 120, dataIndex: 'useml'},
            {text: '平均刻沟后里程', width: 120, dataIndex: 'ditchml'},
            {text: '平均刻沟贡献率', width: 120, dataIndex: 'contrate'},
            {text: '平均修补次数', width: 120, dataIndex: 'repairnum'},
            {text: '换位次数', width: 120, dataIndex: 'convoynum'},
            {text: '平均服务金额', width: 120, dataIndex: 'service'},
            {text: '平均气压调整次数', width: 120, dataIndex: 'presnum'},
            {text: '平均使用月数', width: 120, dataIndex: 'uesmonth'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_qt_analysis',
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