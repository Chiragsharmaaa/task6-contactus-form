const express = require('express')

const path = require('path')

const app = express(); 

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactusRoutes = require('./routes/contactus')
const successRoutes = require('./routes/success')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public'))) //to link common file in public folder(css files)

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(contactusRoutes)
app.use(successRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'))
})

app.listen(3000);