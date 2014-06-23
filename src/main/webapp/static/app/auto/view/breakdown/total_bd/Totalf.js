Ext.define('App.view.breakdown.total_bd.Totalf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.totalf',
    "iconCls": "icon_chart",
    layout: 'border',
    autoScroll: true,

    initComponent: function () {
        var char_area = Ext.create('Ext.chart.Chart', {
            animate: true,
            store: 'AreaPer',
            id: 'total_bd_area_per',
            shadow: true,
            insetPadding: 30,
            theme: 'Base:gradient',
            series: [
                {
                    type: 'pie',
                    highlight: {
                        segment: {
                            margin: 20
                        }
                    },
                    field: 'count',
                    showInLegend: true,
                    label: {
                        field: 'area',
                        display: 'count',
                        font: '20px'
                    }
                }
            ]
        });
        var char_duty = Ext.create('Ext.chart.Chart', {
            animate: true,
            store: 'DutyPer',
            id: 'total_bd_duty_per',
            shadow: true,
            insetPadding: 30,
            theme: 'Base:gradient',
            series: [
                {
                    type: 'pie',
                    highlight: {
                        segment: {
                            margin: 20
                        }
                    },
                    field: 'count',
                    showInLegend: true,
                    label: {
                        field: 'duty_type',
                        display: 'count',
                        font: '20px'
                    }
                }
            ]
        });

        this.items = [
            {
                xtype: 'total_bd_query',
                region: 'north'
            },
            {
                xtype: 'panel',
                border: false,
                region: 'center',
                layout: 'border',
                items: [
                    {
                        xtype: 'panel',
                        title: '区域类型分析',
                        region: 'center',
                        flex: 1,
                        layout: 'fit',
                        margin: '0 0 0 5',
                        bodyPadding: 10,
                        items: [char_area]
                    },
                    {
                        xtype: 'panel',
                        title: '任务类型分析',
                        region: 'west',
                        flex: 1,
                        layout: 'fit',
                        bodyPadding: 10,
                        items: [char_duty]
                    }
                ]
            }
        ]
        this.callParent(arguments);
    }
});