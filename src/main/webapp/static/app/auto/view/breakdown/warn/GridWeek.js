Ext.define('App.view.breakdown.warn.GridWeek', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.warn_grid_week',
    id: 'warn_week_grid',
    store: 'Warnweek',

    initComponent: function () {
        this.columns = [
            {text: "客户名称", width: 230, dataIndex: 'custorm_nm', sortable: true },
            {text: '故障次数', width: 150, dataIndex: 'count'},
            {text: '故障类型', flex: 1, dataIndex: 'count',
                renderer: function (val) {
                    if (val == 1) {
                        return '<img src="/teldata/css/images/1.png"> '
                    } else if (val == 2) {
                        return '<img src="/teldata/css/images/2.png"> '
                    } else if (val >= 3) {
                        return '<img src="/teldata/css/images/3.png"> '
                    }
                }
            }
        ];

        this.viewConfig = {
            forceFit: true
        };

        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'Warnweek',
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
