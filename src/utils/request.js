export default {
    install: (Vue, options) => {
        Vue.prototype.$request = async ({ path }) => {
            // 实现发送请求
            uni.showLoading({
                title: '正在加载数据...'
            })
            // uni-app对部分小程序原生API进行了封装，可以支持Promise
            const [error, res] = await uni.request({
                url: options.baseURL + path
            })
            // 返回异步接口的结果
            // 隐藏提示
            uni.hideLoading()
            return res.data
        }
    }
}