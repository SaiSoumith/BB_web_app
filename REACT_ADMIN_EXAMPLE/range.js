module.exports=(req,res,next)=>{
   res.header('Content-range','posts 0-20/20')
   next()

}