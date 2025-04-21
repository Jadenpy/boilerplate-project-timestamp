// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});


// ******************************* My API endpoints ***********************

// 判断:data的状态    什么类型？是否是空格




// function isTimeValid(timeString) {
//   // 使用Date构造函数尝试解析时间字符串
//   const date = new Date(timeString);

//   // 如果时间戳是有效的，并且不是NaN，表示时间有效
//   return !isNaN(date.getTime());
// }

// // 测试示例
// const validTime = '2024-01-01T12:00:00';
// let validTime2 = '2024-01-01T12';
// const invalidTime = 'invalid time';
// let invalidTime2 = '';

// console.log(isTimeValid(validTime)); // true
// console.log(isTimeValid(validTime2)); // true
// console.log(isTimeValid(invalidTime)); // false
// console.log(isTimeValid(invalidTime2)); // false




app.use(express.json());

function isUnixTimestamp(date) {
  return !isNaN(new Date(date * 1000).getTime());
}

function isUTCTimestamp(date) {
  return !isNaN(new Date(date).getTime());
}

app.get('/api/:date?', (req, res) => {
  let date = req.params.date;
  let response = {};

  if (!date) {
    // 如果date为空，使用当前时间
    date = new Date();
    response.unix = Math.floor(date.getTime());   //ms
    response.utc = date.toUTCString();
    console.log('输入的日期为空');
  } else {
    // console.log('输入的日期类型为：', typeof date);
    // 尝试解析date
    if (isUTCTimestamp(date)) {
      console.log('输入的日期类型为：', 'UTC时间');
      date = new Date(date);
      response.unix = Math.floor(date.getTime());   
    } else if (isUnixTimestamp(date)) {
      console.log('输入的日期类型为：', 'unix时间');
      date = new Date(parseInt(date)); // unix时间戳必须为int才能正确解析
      response.utc = date.toUTCString();
    } else {
      return res.status(400).json({
        error: 'Invalid date'
      });
    }
  }

  // if (isNaN(date.getTime())) {
  //   // 如果date无效，返回错误信息
  //   return res.status(400).json({
  //     error: 'Invalid date'
  //   });
  // }

  // 如果date有效，返回unix时间戳和UTC时间
  
  

  res.json(response);
});




// ******************************* My API endpoints ***********************



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
