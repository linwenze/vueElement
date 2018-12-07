const testData = {
  menu: [
    {
      fold: '1', 
      icon: '',
      is_buy: null, 
      items:[
        { 
          'buy_url': 'https://pcv8.chexiu.cn/func/product/view/id/.html',
          'icon': '',
          'is_buy': true,
          'path': '/market/softTemplate',
          'title': '微信模板'
        },{
          'buy_url': 'https://pcv8.chexiu.cn/func/product/view/id/.html',
          'icon': '',
          'is_buy': true,
          'path': '/market/posterTemplate',
          'title': '海报模板'
        }
      ], 
      path: '微信模板', 
      title: '模板中心'
    }, 
    {
      fold: '1',
      icon: '',
      items: [
        {
          'buy_url': '',
          'id': '',
          'is_buy': true,
          'path': '/market/wechatgroupsend',
          'title': '微信群发'
        }, {
          'buy_url': '',
          'id': '',
          'is_buy': true,
          'path': '/market/material',
          'title': '素材管理'
        }
      ],
      path: '#',
      title: '微信助手'
    },{
      fold: '1',
      icon: '',
      items: [],
      path: '#',
      title: '短信内容'
    }, {
      fold: '0',
      icon: '',
      items: [{
        'buy_url': '',
        'id': '',
        'is_buy': null,
        'path': '/market/temlateExchange',
        'title': '活动奖励兑换'
      }, {
        'buy_url': '',
        'id': '',
        'is_buy': true,
        'path': '/market/templateExchangelog',
        'title': '兑换记录'
      }],
      path: '#',
      title: '奖励兑换'
    },
  ]
}

export default testData;