const port = 5000 || process.env.PORT

module.exports = (app) => {
   app.get('/', (req, res) => {
      res.send('succes')
   })
   app.listen(port, () => {
      console.log(`server is running on port - ${port}`)
   })
}