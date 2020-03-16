const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api/', 
        { "target": 'https://lamppoststudios.api-us1.com/',
        secure: false,
        changeOrigin: true,
        "headers": {
          "host": 'https://lamppoststudios.api-us1.com/'
        },
        cookieDomainRewrite: ""}
    ));
}
