export function handleResponse(res,callback){
  let {code, msg, data} = res.data?res.data:{};
  if(code !== 200){
    this.$message.error(msg)
  }else {
    if(typeof callback === 'function'){
      callback(data);
    }
  }
}