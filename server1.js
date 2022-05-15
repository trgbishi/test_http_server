const express = require('express')
const app = express()

app.use((request,response,next)=>{
	console.log('有人请求服务器1了');
	// console.log('请求来自于',request.get('Host'));
	// console.log('请求的地址',request.url);
	next()
})

app.get('/students',(request,response)=>{
	const students = '{"data": [{"time": "2018/09/20","data": "1"}, {"time": "2018/09/21","data": "1"},{"time": "2018/09/22","data": "1"},{"time": "2018/09/23","data": "1"},{"time": "2018/09/24","data": "1"},{"time": "2018/09/25","data": "1"},{"time": "2018/09/26","data": "1"},{"time": "2018/09/27","data": "2"},{"time": "2018/09/28","data": "1"},{"time": "2018/09/29","data": "3"},{"time": "2018/09/30","data": "3"}]}'
	response.send(students)
})

app.get('/items',(request,response)=>{
	const items = '{"items":[{"name":"饰品11111111111111111111111111111111","price":"100","rent":"1","ratio":"111","count":100},{"name":"饰品1","price":"100","rent":"1","ratio":"111","count":100},{"name":"饰品1","price":"100","rent":"1","ratio":"111","count":100},{"name":"饰品1","price":"100","rent":"1","ratio":"111","count":100},{"name":"饰品1","price":"100","rent":"1","ratio":"111","count":100},{"name":"饰品1","price":"100","rent":"1","ratio":"111","count":100},{"name":"饰品1","price":"100","rent":"1","ratio":"111","count":100},{"name":"饰品1","price":"100","rent":"1","ratio":"111","count":100}]}'
	response.send(items)
})


app.listen(5000,(err)=>{
	if(!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/items');
})
