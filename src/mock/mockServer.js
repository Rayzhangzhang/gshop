/* 使用mock 模拟返回数据 */
import Mock from 'mockjs'
import data from './data.json'

// 执行之后即可
Mock.mock('/goods', {code: 0, data: data.goods})
Mock.mock('/ratings', {code: 0, data: data.ratings})
Mock.mock('/info', {code: 0, data: data.info})
