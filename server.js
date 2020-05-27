
const express = require('express')//import express
const app = express()// get the app portion of express
const expressLayouts = require('express-ejs-layouts')//import express layout
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')//set view engine and pass in ejs as where the view engine to use
app.set('views',__dirname+'/views')// set here the views re gonna be coming from, passing the directory as well
app.set('layout','layouts/layout')// set layoout file and where it is gonna be
app.use(expressLayouts)// tell the app we wanna use expreslayout
app.use(express.static('public'))// css, js, img to be in file "public"
app.use('/', indexRouter)// tell app which route path that indexRouter is comming from

app.listen(process.env.PORT || 3000);//listen to port in prod and dev respectively
