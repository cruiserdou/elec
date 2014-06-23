/**
 * Created by dou on 14-1-11.
 */
Ext.define('App.model.Contract',{
    extend: 'Ext.data.Model',
    fields: [
        {name: 'code', type: 'string'},
        {name: 'contract_nm', type: 'string'},
        {name: 'project_nm', type: 'string'},
        {name: 'sign_date', type: 'string'},
        {name: 'doc_nm', type: 'string'},
        {name: 'remark', type: 'string'}
    ]
});
