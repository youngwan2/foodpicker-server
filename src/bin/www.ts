import app from '../server'
const PORT = process.env.PORT || 8001

app.listen(PORT,()=>{

    console.log("포트:",PORT +' 가동 중...')
})