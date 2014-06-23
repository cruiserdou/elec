Ext.define('App.view.breakdown.mine_bd.Minef', {
    extend: 'Ext.panel.Panel',
    border: false,
    alias: 'widget.minef',
    "iconCls": "icon_chart",
    layout: 'border',
    autoScroll: true,

    initComponent: function () {
        var char_busi = Ext.create('Ext.chart.Chart', {
            animate: true,
            store: 'BusiPer',
            id: 'mine_bd_busi_per',
            shadow: true,
            insetPadding: 16,
            theme: 'Base:gradient',
            series: [
                {
                    highlight: {
                        segment: {
                            margin: 20
                        }
                    },
                    type: 'pie',
                    field: 'count',
                    showInLegend: true,
                    label: {
                        field: 'busi_type',
                        display: 'count',
                        font: '20px'
                    }
                }
            ]
        });
        var char_cause = Ext.create('Ext.chart.Chart', {
            animate: true,
            store: 'Causeper',
            id: 'mine_bd_cause_per',
            shadow: true,
            insetPadding: 16,
            theme: 'Base:gradients',
            series: [
                {
                    type: 'pie',
                    field: 'count',
                    highlight: {
                        segment: {
                            margin: 20
                        }
                    },
                    showInLegend: true,
                    label: {
                        field: 'cause_type',
                        display: 'count',
                        font: '20px'
                    }
                }
            ]
        });

        var char_cause_type = Ext.create('Ext.chart.Chart', {
            animate: true,
            store: 'Causepertype',
            id: 'mine_bd_cause_type_per',
            shadow: true,
            insetPadding: 16,
            theme: 'Base:gradients',
            series: [
                {
                    type: 'pie',
                    field: 'count',
                    highlight: {
                        segment: {
                            margin: 20
                        }
                    },
                    showInLegend: true,
                    label: {
                        field: 'cause_type',
                        display: 'count',
                        font: '20px'
                    }
                }
            ]
        });

        var chart = Ext.create('Ext.chart.Chart', {
            animate: true,
            shadow: true,
            store: 'Bdmonth',
            margin: '10 20 10 10',
            axes: [
                {
                    type: 'Numeric',
                    position: 'left',
                    fields: ['count'],
                    title: false,
                    grid: true
                },
                {
                    type: 'Category',
                    position: 'bottom',
                    fields: ['ym'],
                    title: false
                }
            ],
            series: [
                {
                    type: 'line',
                    axis: 'left',
                    gutter: 80,
                    xField: 'ym',
                    yField: ['count']
                }
            ]
        });

        this.items = [
            {
                xtype: 'mine_bd_query',
                region: 'north'
            },
            {
                xtype: 'panel',
                border: false,
                region: 'center',
                layout: 'border',
                flex: 1,
                items: [
                    {
                        xtype: 'panel',
                        title: '障碍原因分析',
                        region: 'center',
                        flex: 1,
                        layout: {
                            type: 'hbox',
                            align: 'stretch',
                            pack: 'start'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                flex: 2,
                                border: false,
                                layout: 'fit',
                                items: [char_cause]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        title: '障碍业务类型分析',
                        margin: '0 5 0 0',
                        region: 'west',
                        flex: 1,
                        layout: 'fit',
                        items: [char_busi]
                    }

                ]
            },
            {
                xtype: 'panel',
                region: 'south',
                flex: 1,
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                    pack: 'start'
                },
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        title: '障碍类型分析',
                        margin: '5 0 0 0',
                        layout: 'fit',
                        items: [char_cause_type]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        margin: '5 0 0 5',
                        title: '障碍量走势',
                        layout: 'fit',
                        items: [chart]
                    }
                ]
            }
        ]
        this.callParent(arguments);
    }
});