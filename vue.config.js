module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack: {
    devServer: {
      before (app) {
        app.get('/api/login', (req, res) => {
          const {username, password} = req.query
          if (username === 'HT' && password==='123'){
            res.json({
              code: 1,
              token: 'jiaToken'
            })
          }else {
            res.status(401).json({
              code: 0,
              message: '用户名或密码错误'
            })
          }
        })

        app.get('/api/userinfo', (req, res, next) => {
          const hasToken = !!req.headers.token
          if(hasToken){
            next()
          }else{
            res.sendStatus(401)
          }
        }, (req, res) => {
          res.json({
            code: 1,
            data: {
              message: '小小测试一下'
            }
          })
        })
      }
    }
  }
}
