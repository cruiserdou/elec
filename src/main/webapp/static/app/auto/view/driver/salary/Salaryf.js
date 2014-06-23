Ext.define('App.view.driver.salary.Salaryf', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.salaryf',
    "iconCls": "icon_money",
    layout: 'border',
    border: false,
    initComponent: function () {
        this.items = [
            {
                xtype: 'salary_query',
                region: 'north'
            },
            {
                xtype: 'salary_grid',
                region: 'center'
            }
        ]
        this.callParent(arguments);
    }
});