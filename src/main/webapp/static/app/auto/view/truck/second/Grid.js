var sm = new Ext.selection.CheckboxModel({checkOnly: false});
Ext.define('App.view.truck.second.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.second_grid',
    store: 'syj_two_insur',
    selModel: sm,
    id :'grid_two_insur',
    initComponent: function () {
        this.columns = [
             {text: '车牌号码', width: 100, dataIndex: 'plate', sortable: true},
             {text: '挂号', width: 100, dataIndex: 'trailer', sortable: true},
             {text: '第一季度', 
                columns:[
                {text: '一月', width: 130, dataIndex: 'jan'},
                {text: '登记编号', width: 130, dataIndex: 'janno'},
                {text: '二月', width: 130, dataIndex: 'feb'},
                {text: '登记编号', width: 130, dataIndex: 'febno'},
                {text: '三月', width: 130, dataIndex: 'mar'},
                {text: '登记编号', width: 130, dataIndex: 'marno'}
               ]
             },
             {text: '第二季度', 
                columns:[
                {text: '四月', width: 130, dataIndex: 'apr'},
                {text: '登记编号', width: 130, dataIndex: 'aprno'},
                {text: '五月', width: 130, dataIndex: 'may'},
                {text: '登记编号', width: 130, dataIndex: 'mayno'},
                {text: '六月', width: 130, dataIndex: 'jun'},
                {text: '登记编号', width: 130, dataIndex: 'junno'}
               ]
             },
             {text: '第三季度', 
                columns:[
                {text: '七月', width: 130, dataIndex: 'jul'},
                {text: '登记编号', width: 130, dataIndex: 'julno'},
                {text: '八月', width: 130, dataIndex: 'aug'},
                {text: '登记编号', width: 130, dataIndex: 'augno'},
                {text: '九月', width: 130, dataIndex: 'sep'},
                {text: '登记编号', width: 130, dataIndex: 'sepno'}
               ]
             },
             {text: '第四季度', 
                columns:[
                {text: '十月', width: 130, dataIndex: 'oct'},
                {text: '登记编号', width: 130, dataIndex: 'octno'},
                {text: '十一月', width: 130, dataIndex: 'nov'},
                {text: '登记编号', width: 130, dataIndex: 'novno'},
                {text: '十二月', width: 130, dataIndex: 'decs'},
                {text: '登记编号', width: 130, dataIndex: 'decno'}
               ]
             }
        ];


        this.viewConfig = {
            forceFit: true
        };
        Ext.apply(this, {
            bbar: Ext.create('Ext.PagingToolbar', {
                store: 'syj_two_insur',
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
