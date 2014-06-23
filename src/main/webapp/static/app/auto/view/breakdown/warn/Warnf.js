Ext.define('App.view.breakdown.warn.Warnf', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.warnf',
    split: true,
    iconCls: "icon_warn",
    layout: 'border',
    initComponent: function () {
        var chart = Ext.create('Ext.chart.Chart', {
            animate: true,
            shadow: true,
            height: 300,
            region: 'south',
            store: 'Warnten',
            axes: [
                {
                    type: 'Numeric',
                    position: 'left',
                    fields: ['count'],
                    title: '障碍情况',
                    grid: true,
                    minimum: 0,
                    maximum: 4
                },
                {
                    type: 'Category',
                    position: 'bottom',
                    fields: ['custorm_nm'],
                    title: '省控客户在庆分支单位',
                    label: {
                        rotate: {
                            degrees: 270
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'column',
                    axis: 'left',
                    gutter: 8,
                    xField: 'name',
                    yField: ['count'],
                    style: {
                        fill: '#FF4444'
                    }
                }
            ]
        });
        this.items = [
            {
                xtype: 'panel',
                region: 'east',
                border: false,
                flex: 3,
                split: true,
                layout: 'border',

                items: [
                    {
                        xtype: 'warn_query_month',
                        region: 'north'
                    },
                    {
                        xtype: 'panel',
                        region: 'center',
                        border: false,
                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                            pack: 'start'
                        },
                        items: [
                            {
                                xtype: 'warn_grid_month',
                                flex: 2
                            }
                        ]
                    },
                    chart
                ]
            },
            {
                border: false,
                xtype: 'panel',
                split: true,
                region: 'center',
                flex: 3,
                layout: 'border',
                items: [
                    {
                        xtype: 'warn_query_week',
                        region: 'north'
                    },
                    {
                        xtype: 'warn_grid_week',
                        region: 'center'
                    }
                ]
            },
            chart
        ]
        this.callParent(arguments);
    }
});