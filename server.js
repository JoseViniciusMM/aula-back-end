import app from '.src/app.js'

const port = process.env.PORT || 3030

app.listen (port, () => {
      console.log(`Servidor escutando em http:localhost:${port}`)
}) // função call back, aero function 

//npm run dev