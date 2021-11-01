module.exports = [
  {
    url: '/vue-element-admin/hai-di-lao/ni-kun-yi',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: {
          name: 'wo yao chi hai di lao',
          value: 1000
        }
      }
    }
  }
]
