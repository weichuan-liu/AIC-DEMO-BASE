import request from '@/utils/request'

export function chengGong() {
  return request({
    url: '/vue-element-admin/hai-di-lao/ni-kun-yi',
    method: 'get'
  })
}