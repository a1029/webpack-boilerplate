const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(methodOverride('_method'));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(404).send("해당 라우터나 페이지가 없습니다.");
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});