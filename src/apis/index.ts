import req from '../utils/request'
 
/**
 * 测试接口
 */
 
// 测试用Hello World
const TestApi = () => req({ url: '/api/test', method: 'get' })
const TestApi2 = () => req({ url: '/api/test', method: 'get' })


export {
    TestApi,
    TestApi2
}