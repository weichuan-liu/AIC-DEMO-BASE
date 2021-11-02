import request from '@/utils/request'

export function HDL(query) {
  return request({
    url: '/vue-element-admin/hai-di-lao/ni-kun-yi',
    method: 'get',
    params: query
  })
}

