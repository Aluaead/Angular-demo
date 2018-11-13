import express from 'express';
import bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
export class community{
	constructor(
		public id:number,
		public communityName:string,
		public content:string,
		public Publisher:string,
		public time:string,
		public readcount:number,
		public commentcount:number
	){}
}

const communitys = [
	new community(1,'web开发（二）——函数',
	'（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。',
	'李文轩','2018-10-13',376,2),
	new community(2,'类定义关键字详解',
	'JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来',
	'李文轩','2018-10-13',376,2),
	new community(3,'一个java文件中可包含多个main方法',
	'一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方',
	'李文轩','2018-10-13',376,2),
	new community(4,'数据结构——线性表的经典应用',
	'1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。',
	'李文轩','2018-10-13',376,2),
	new community(5,'栈和队列之间的相互转化',
	'队列实现栈需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素，要取data队列的队尾元',
	'李文轩','2018-10-13',376,2),
	new community(6,'web开发（二）——字符串类型',
	'在C语言中的数据类型中没有字符串类型，字符串是字符数组，那么字符串可以遍历。在前端JavaScript中数组和字符串是两种数据类型，也就是字符串类型是存',
	'李文轩','2018-10-13',376,2),
	new community(7,'JavaScript event（事件对象）',
	'在触发DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的信息。包括导致事件的元素、事件的类型以及其他与特定事件相',
	'李文轩','2018-10-13',376,2),
	new community(8,'数据结构——快速排序',
	'快速排序是C.R.A.Hoare于1962年提出的一种划分交换排序。它采用了一种分治的策略，通常称其为分治法(Divide-and-ConquerMethod)。 分治法的基本思想',
	'李文轩','2018-10-13',376,2),
]

app.get('/api',(req,res)=>{
	res.json(communitys);
});
app.get('/api/course',(req,res)=>{
	res.json(communitys);
});
// app.get('/api/course/:id',(req,res)=>{
// 	res.json(courses.filter((ele)=>ele.id == req.params.id));
// });
//app.get('/api/course/:id', (req, res) => {
   // // req.params 表示请求的是那个id 在下列的res进行判断
   // res.json(courses.find((ele)=>ele.id == req.params.id));
//});

//app.post('/api',(req,res)=>{
   // //console.log(req.body);// 拿到相关的请求的数
    //res.json(courses);
//})
app.listen(8001);
