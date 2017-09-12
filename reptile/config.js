var parse = require('./parse.js')
// module.exports = {
//   // 内推网
//   ntw: 'http://www.neitui.me/?name=job&handle=lists&city=%E5%9F%8E%E5%B8%82&keyword=Web%E5%89%8D%E7%AB%AF',
//   // 智联招聘
//   zlzp: 'http://sou.zhaopin.com/jobs/searchresult.ashx?1=1',
// }

var config = {
  saveToMySql: true,
  use: 'mysql_dev',
  db: {
    // 阿里云服务器的数据库
    mysql_dev: {
      host: '127.0.0.1',
      port: '3306',
      database: 'tests',
      username: 'root',
      password: 'root'
    },
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      database: 'learning',
      username: 'root',
      password: 'root'
    },
    sqlite: {
      database: 'jobs',
      storage: 'jobs.db'
    },
  },
  sites: [
    // 内推网（互联网）
    {
      name: 'ntw',
      url: 'http://www.neitui.me/?name=job&handle=lists',
      chatset: 'utf-8',
      parse: parse.ntw,
      params: {
        keyword: 'keyword',
        city: 'city',
        salary_min: 'sf',
        salary_max: 'st',
        exp: 'experience'
      }
    },
    // 智联招聘（综合招聘）
    {
      name: 'zlzp',
      url: 'http://sou.zhaopin.com/jobs/searchresult.ashx?1=1',
      chatset: 'utf-8',
      parse: parse.zlzp,
      params: {
        keyword: 'kw',
        city: 'jl',
        salary_min: 'sf',
        salary_max: 'st',
        exp: 'we'
      }
    },
    // 51job（综合招聘）
    {
      name: '51job',
      url: 'http://search.51job.com/jobsearch/search_result.php?1=1',
      chatset: 'gb2312', //有的网站采用GBK模式，因此需要配置字符集
      parse: parse.job_51,
      params: {
        keyword: 'keyword',
        city: 'jobarea',//090200-成都
        salary_min: '',
        salary_max: '',
        exp: 'workyear'//0-所有 1-无  2-（1-3）  3-(3-5) 4--(5-10)
      }
    },
    {
      name: 'liepin',
      url: 'https://www.liepin.com/zhaopin/?1=1',
      chatset: 'utf-8',
      parse: parse.liepin,
      params: {
        keyword: 'key',
        city: 'dqs',//280020-成都
        salary_min: 'salary',
        salary_max: '',
        exp: ''
      }
    }
  ]
}

module.exports = config;