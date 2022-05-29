const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器1了');
	// console.log('请求来自于',request.get('Host'));
	console.log('请求的地址',request.url);
	next()
})

app.get('/api/getLeaseUnitPrice',(request,response)=>{
	const students = '[{"time": "2018/09/20 00:00:00","data": "1"}, {"time": "2018/09/20 05:00:00","data": "1"},{"time": "2018/09/20 08:00:00","data": "1"},{"time": "2018/09/20 14:00:00","data": "1"},{"time": "2018/09/20 18:00:00","data": "1"},{"time": "2018/09/20 23:00:00","data": "1"},{"time": "2018/09/21 06:00:00","data": "1"},{"time": "2018/09/21  12:00:00","data": "2"},{"time": "2018/09/21 16:00:00","data": "1"},{"time": "2018/09/21 20:00:00","data": "3"},{"time": "2018/09/22 00:00:00","data": "3"}]'
	response.send(students)
})
app.get('/api/getOnSaleCount',(request,response)=>{
	const students = '[{"time": "2018/09/20 00:00:00","data": "1"}, {"time": "2018/09/20 01:00:00","data": "1"},{"time": "2018/09/20 02:00:00","data": "1"},{"time": "2018/09/20 03:00:00","data": "1"},{"time": "2018/09/20 04:00:00","data": "1"},{"time": "2018/09/20 05:00:00","data": "1"},{"time": "2018/09/20 06:00:00","data": "1"},{"time": "2018/09/20  07:00:00","data": "2"},{"time": "2018/09/20 08:00:00","data": "1"},{"time": "2018/09/20 09:00:00","data": "3"},{"time": "2018/09/20 10:00:00","data": "3"}]'
	response.send(students)
})
app.get('/api/getPrice',(request,response)=>{
	const students = '[{"time": "2018/09/20 00:00:00","data": "1"}, {"time": "2018/09/21 00:00:00","data": "1"},{"time": "2018/09/22 00:00:00","data": "1"},{"time": "2018/09/23 00:00:00","data": "1"},{"time": "2018/09/24 00:00:00","data": "1"},{"time": "2018/09/25 00:00:00","data": "1"},{"time": "2018/09/26 00:00:00","data": "1"},{"time": "2018/09/27","data": "2"},{"time": "2018/09/28 00:00:00","data": "1"},{"time": "2018/09/29","data": "3"},{"time": "2018/09/30","data": "3"}]'
	response.send(students)
})
app.get('/api/getRatio',(request,response)=>{
	const students = '[{"time": "2018/09/20 00:00:00","data": "1"}, {"time": "2018/09/21 00:00:00","data": "1"},{"time": "2018/09/22 00:00:00","data": "1"},{"time": "2018/09/23 00:00:00","data": "1"},{"time": "2018/09/24 00:00:00","data": "1"},{"time": "2018/09/25 00:00:00","data": "1"},{"time": "2018/09/26 00:00:00","data": "1"},{"time": "2018/09/27","data": "2"},{"time": "2018/09/28 00:00:00","data": "1"},{"time": "2018/09/29","data": "3"},{"time": "2018/09/30","data": "3"}]'
	response.send(students)
})

app.get('/api/trade/Order/GetTopLeaseOutOrderList',(request,response)=>{
	const students = '{"Code":0,"Msg":"请求成功","TipType":10,"Data":[{"IconUrl":"https://youpin.img898.com/economy/image/4e036200613911ec8289acde48001122","LeaseUnitPrice":0.01,"LeaseDays":8,"LeaseDeposit":0.10,"Type":2,"DateTime":"2022.05.21","UpdateTime":null}]}'
	response.send(students)
})

app.post('/api/getRank',(request,response)=>{
	const items = '[{"id":"1","commodityName":"饰品11111111111111111111111111111111","price":"100","leaseUnitPrice":"1","ratio":"111","onSaleCount":100},{"id":"1","commodityName":"饰品1","price":"100","leaseUnitPrice":"1","ratio":"111","onSaleCount":100},{"id":"1","commodityName":"饰品1","price":"100","leaseUnitPrice":"1","ratio":"111","onSaleCount":100},{"id":"1","commodityName":"饰品1","price":"100","leaseUnitPrice":"1","ratio":"111","onSaleCount":100},{"id":"1","commodityName":"饰品1","price":"100","leaseUnitPrice":"1","ratio":"111","onSaleCount":100},{"id":"1","commodityName":"饰品1","price":"100","leaseUnitPrice":"1","ratio":"111","onSaleCount":100},{"id":"1","commodityName":"饰品1","price":"100","leaseUnitPrice":"1","ratio":"111","onSaleCount":100},{"id":"1","commodityName":"饰品1","price":"100","leaseUnitPrice":"1","ratio":"111","onSaleCount":100}]'
	response.send(items)
})


app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/items');
})
