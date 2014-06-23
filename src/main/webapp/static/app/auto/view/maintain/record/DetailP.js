Ext.define('App.view.maintain.record.DetailPanel', {
    extend: 'Ext.Panel',
    bodyPadding: 10,
    alias: 'widget.maintain_detailP',
    split: true,
    height: 180,
    // add tplMarkup as a new property
    tplMarkup: [
        '<div class="detail_panel">',
        '<p><h2>{custorm_name}</h2></p>',
        '<b>电路代码：</b> {circute_code}<br/>',
        '<b>营业编码：</b> {busi_code}<br/>',
        '<b>所属项目：</b> {belong_project}<br/>',
        '<b>电路速率：</b> {bandwidth}<br/>',
        '<b>局域网概述:</b> {lan_des}<br/>',
        '<b>备注:</b> {remark}<br/>',
        '<table class="table_detail">',
        '<tr><th>接入设备名称</th><th>接入设备端口</th><th>局端设备名称</th><th>局端设备端口</th><th>受理账号</th></tr>',
        '<tr><td>{join_dev_nm}</td><td>{join_dev_port}</td><td>{inner_dev_nm}</td><td>{inner_dev_port}</td><td>{account}</td></tr>',
        '</table>',
        '<table class="table_detail">',
        '<tr><th>IP</th><th>子网掩码</th><th>业务网关</th><th>PING-IP</th></tr>',
        '<tr><td>{ip}</td><td>{subnet}</td><td>{busi_gateway}</td><td>{ping_ip}</td></tr>',
        '</table>',
        '</div>'
    ],
    // startingMarup as a new property
    startingMarkup: '详细信息',

    bodyPadding: 7,
    // override initComponent to create and compile the template
    // apply styles to the body of the panel and initialize
    // html to startingMarkup
    initComponent: function () {
        this.tpl = Ext.create('Ext.Template', this.tplMarkup);
        this.html = this.startingMarkup;

        this.bodyStyle = {
            background: '#ffffff'
        };
        // call the superclass's initComponent implementation
        this.callParent(arguments);
    },
    // add a method which updates the details
    updateDetaildata: function (data) {
        this.tpl.overwrite(this.body, data);
    }
});