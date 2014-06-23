Ext.define('App.view.datacir.salary.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.salary_grid',
    store: 'Datacir',
    initComponent: function () {
        this.columns = [
            {text: '工单编号', width: 120, dataIndex: 'circute_code'},
            {text: '车牌号', width: 80, dataIndex: 'busi_code', hidden: true},
            {text: '车管所', width: 80, dataIndex: 'belong_project'},
            {
                text: '年检日期',
                width: 100,
                dataIndex: 'turn_on_date',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {
                text: '到期日期',
                width: 100,
                dataIndex: 'turn_on_date',
                format: 'yyyy-MM-dd',
                renderer: function (val) {
                    return val.substring(0, 10)
                }
            },
            {text: '年检费用', width: 80, dataIndex: 'join_dev_port'},
            {text: '经手人', width: 100, dataIndex: 'inner_dev_nm'},
            {text: '备注', flex: 1, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };
        /*this.pgt = new Ext.PagingToolbar({
         store: 'Datacir',
         displayInfo: true
         });
         this._pgt.on("beforechange", function(_p, _o){
         Ext.apply(_o, {
         custorm_name: 'xwq'
         })
         }, this);*/

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'Datacir',
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