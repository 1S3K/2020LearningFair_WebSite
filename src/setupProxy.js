const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://3.35.126.154:8000',
      changeOrigin: true,
      pathRewrite:{ '^/api':'' }
    })
  );
};