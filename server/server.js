import express from 'express';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import http from 'http';
import path from 'path';
import winston from 'winston';
import dotenv from 'dotenv';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

dotenv.config();
const port = process.env.PORT || 8080;

const app = express();
app.set('port', port);
const publicPath = express.static(path.join(__dirname, '../client/assets'));

app.use('/', publicPath);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
}));

app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);
server.listen(port);
winston.info('We are serving on port', port);

module.exports = app;