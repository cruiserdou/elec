Ext.define('App.view.contract.upload.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contract_upload_grid',
    store: 'syj_contract',

    initComponent: function () {

        this.columns = [
            {text: '合同编号', width: 120, dataIndex: 'id'},
            {text: '合同名称', width: 130, dataIndex: 'name', sortable: true},
            {text: '工程名称', width: 130, dataIndex: 'project'},
            {text: '签署日期', width: 100, dataIndex: 'sign',
                renderer: Ext.util.Format.dateRenderer('Y-m-d')
            },
            {text: '备注',  flex: 1, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };

        this.callParent(arguments);
    }
});