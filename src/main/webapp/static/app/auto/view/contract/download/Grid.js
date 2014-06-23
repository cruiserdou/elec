Ext.define('App.view.contract.download.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contract_download_grid',
    store: 'syj_contract',

    initComponent: function () {

        this.columns = [
            {text: '合同编号', width: 120, dataIndex: 'id'},
            {text: '合同名称', width: 130, dataIndex: 'name', sortable: true},
            {text: '工程名称', width: 130, dataIndex: 'project'},
            {text: '签署日期', width: 100, dataIndex: 'sign',
                renderer: Ext.util.Format.dateRenderer('Y-m-d')
            },
            {text: '下载', width: 80, dataIndex: 'doc_nm',
             renderer: function(val){
                 return Ext.String.format('<a href="upload/contract/' + val +
                     '" target="_blank"><img src="/teldata/css/images/cloud-download.png" /></a>')
             }
            },
            {text: '备注',  flex: 1, dataIndex: 'remark'}
        ];

        this.viewConfig = {
            forceFit: true
        };

        this.callParent(arguments);
    }
});