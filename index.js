const express = require("express")
const path = require("path")

const app = express();



// set the view engine to ejs
app.set('view engine', 'ejs')
// set root folder for views
app.set('views', path.join(__dirname, 'views'))

// Statics
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routers
const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')
const detailRouter = require('./routes/detail')
const bookingRouter = require('./routes/booking')
// const commentRouter = require('./routes/comment')

app.use(indexRouter.router)
app.use(adminRouter.router)
app.use(detailRouter.router)
app.use(bookingRouter.router)
// app.use(commentRouter.router)

// app.use('/admin', adminRouter.router)
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})