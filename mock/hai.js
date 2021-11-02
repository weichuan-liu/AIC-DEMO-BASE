const Mock = require('mockjs')
const List = []
const count = 66
const Dish_list = ['冬瓜', '冻豆腐', '包心蟹丸', '午餐肉', '双色鳕鱼蟹味棒', '大娃娃菜', '大白菜', '嫩甜玉米笋', '年糕', '我的小郡肝', '手切牛肉', '手切笋', '手撕面筋', '抖抖面筋球', '招牌虾滑',
  '捞派千层毛肚', '捞派巴沙鱼片', '捞派捞面', '捞派滑牛肉', '捞派秘制羊肉', '捞派豆花', '捞派鱼豆腐', '捞派鱼饼', '捞派麻辣滑牛肉', '无刺巴沙鱼片', '昆布鱼籽卷', '木耳', '水晶粉丝', '油豆腐皮',
  '油面筋泡', '海带', '海带芽', '海胆草虾滑', '港式鱼蛋', '火锅牛排', '炸豆衣卷', '牛小排', '甜玉米', '生菜', '白萝卜', '皇帝菜', '竹笋', '精品牛肉丸', '精品肉丸', '红薯粉带', '翡翠藻', '脆皮肠', '腐竹',
  '芝士牛肉丸', '菠菜', '蛋饺', '蟹味棒', '血旺', '豆腐皮', '金纱鱼豆腐', '金针菇', '青笋', '飞鱼子墨鱼丸', '香菇', '鱼籽福袋', '鲈鱼片', '鳕鱼虾滑', '鳕鱼蟹味棒', '鹌鹑蛋', '黄豆芽', '龙虾味球']

const sales_amt = [60, 53, 33, 50, 45, 136, 77, 28, 29, 34, 80, 29, 36, 89, 263, 19, 95, 249,
  125, 31, 47, 22, 42, 89, 94, 24, 13, 31, 20, 41, 52, 39, 39, 17, 56, 65, 18, 32,
  80, 35, 100, 59, 68, 37, 42, 28, 33, 88, 44, 79, 32, 71, 167, 72, 43, 93, 76, 26,
  25, 22, 14, 22, 72, 55, 23, 34]

const sales_std = [12.34, 12.15, 8.42, 11.84, 13.29, 22.56, 18.16, 8.02, 8.72, 8.92, 16.62, 15.93, 8.72, 22.94, 42.48, 5.69, 17.61, 60.54, 31.59,
  8.48, 9.38, 8.13, 10.32, 17.25, 21.53, 8.8, 4.95, 11.13, 6.42, 11.31, 11.26, 2.66, 9.42, 7.04, 12.4, 14.49, 6.23, 9.64, 16.85, 10.94,
  19.13, 13.16, 14.8, 11.32, 9.89, 7.12, 11.14, 19.84, 11.85, 15.52, 8.62, 15.81, 30.96, 13.95, 9.06, 19.39, 13.7, 9.84, 6.17, 5.82, 4.93,
  6.51, 13.98, 12.81, 5.28, 8.62]

const type1 = ['VG', 'TF', 'FZ', 'FZ', 'FZ', 'VG', 'VG', 'VG', 'TF', 'MT', 'MT', 'VG', 'TF', 'TF', 'FZ', 'MT', 'MT', 'TF', 'MT', 'MT', 'TF', 'FZ', 'FZ', 'MT', 'MT', 'FZ', 'VG', 'TF',
  'TF', 'TF', 'VG', 'VG', 'FZ', 'FZ', 'MT', 'TF', 'MT', 'VG', 'VG', 'VG', 'VG', 'VG', 'FZ', 'FZ', 'TF', 'VG', 'FZ', 'TF', 'FZ', 'VG', 'FZ', 'FZ', 'MT', 'TF', 'FZ', 'VG', 'VG', 'FZ',
  'VG', 'FZ', 'MT', 'FZ', 'FZ', 'MT', 'VG', 'FZ']

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: sales_amt[i],
    title: Dish_list[i],
    author: sales_std[i],
    content_short: 'mock data',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': type1[i],
    'status|1': ['有库存', '在途', '无库存'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: sales_amt[i] + Math.floor(sales_std[i] * (Math.random() * 2 - 1)), // generate rand number
    platforms: ['a-platform']
  }))
}

module.exports = [
  {
    url: '/vue-element-admin/hai-di-lao/ni-kun-yi',
    type: 'get',
    response: config => {
      const { importance, type, title, page = 1, limit = 20, sort } = config.query

      let genedList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      if (sort === '+id') {
        genedList.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
      }

      if (sort === '-id') {
        genedList.sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
        genedList = genedList.reverse()
      }

      const pageList = genedList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: genedList.length,
          items: pageList
        }
      }
    }
  }
]
