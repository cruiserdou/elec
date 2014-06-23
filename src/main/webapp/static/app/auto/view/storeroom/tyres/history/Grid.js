var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.storeroom.tyres.history.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tyreshistory_grid',
    store: 'syj_tire_history',
    selModel: sm,
    id :'grid_tire_history',
    initComponent: function () {
        this.columns = [
            {text: '车队名称', width: 100, dataIndex: 'fleet', sortable: true},
            {text: '车牌号', width: 130, dataIndex: 'plate', sortable: true},
            {text: '安装',
             columns: [
                 {text: '数量', width: 80, dataIndex: 'tirenum'},
                 {text: '位置', width: 100, dataIndex: 'positions'}
             ]
            },
            {text: '品牌', width: 180, dataIndex: 'brand'},
            {text: '胎号', width: 80, dataIndex: 'tyreno'},
            {text: '规格', width: 80, dataIndex: 'spec'},
            {text: '花纹', width: 80, dataIndex: 'tartan'},
            {text: '新胎／翻新胎', width: 80, dataIndex: 'isnum'},
            {text: '采购价（元）', width: 80, dataIndex: 'price'},
            {text: '原始花纹深度', width: 80, dataIndex: 'origdp'},
            {text: '安装日期', width: 80, dataIndex: 'install'},
            {text: '安装时花纹深度', width: 80, dataIndex: 'instdp'},
            {text: '安装里程表读数', width: 80, dataIndex: 'instuseml'},
            {text: '刻沟后里程读数', width: 80, dataIndex: 'ditchml'},
            {text: '拆卸日期', width: 80, dataIndex: 'dispart'},
            {text: '拆卸时花纹深度', width: 80, dataIndex: 'dispartdp'},
            {text: '拆卸时里程表读数', width: 80, dataIndex: 'dispartml'},
            {text: '拆卸原因', width: 80, dataIndex: 'disassem'},
            {text: '报废原因', width: 80, dataIndex: 'scrap'},
            {text: '修补（元）', width: 80, dataIndex: 'repair'},
            {text: '换位（元）', width: 80, dataIndex: 'convoy'},
            {text: '气压调整', width: 80, dataIndex: 'pres'},
            {text: '刻沟', width: 80, dataIndex: 'pres'},
            {text: '其他服务', width: 80, dataIndex: 'othservice'},
            {text: '刻沟增加深度', width: 80, dataIndex: 'ditchdp'},
            {text: '当期花纹磨损', width: 80, dataIndex: 'curwear'},
            {text: '当期使用里程', width: 80, dataIndex: 'curuseml'},
            {text: '当期百公里成本', width: 80, dataIndex: 'curcosts'},
            {text: '毫米价值', width: 80, dataIndex: 'mmvalue'},
            {text: '累计磨损花纹', width: 80, dataIndex: 'wear'},
            {text: '里程预测', width: 80, dataIndex: 'forecastml'},
            {text: '修补次数', width: 80, dataIndex: 'repairnum'},
            {text: '换位次数', width: 80, dataIndex: 'convoynum'},
            {text: '气压调整次数', width: 80, dataIndex: 'presnum'},
            {text: '服务金额', width: 80, dataIndex: 'service'},
            {text: '刻沟', width: 80, dataIndex: 'ditch'},
            {text: '备注', width: 260, dataIndex: 'remark'}
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_tire_history',
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