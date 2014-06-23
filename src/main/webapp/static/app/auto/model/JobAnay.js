/**
 * Created by dou on 14-1-19.
 */
Ext.define('App.model.JobAnay', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'record_person'},
        {name: 'bd_deal', type: 'integer'},
        {name: 'cir_open', type: 'integer'},
        {name: 'custorm_service', type: 'integer'},
        {name: 'project_control', type: 'integer'},
        {name: 'import_job', type: 'integer'},
        {name: 'other', type: 'integer'}
    ]
});
