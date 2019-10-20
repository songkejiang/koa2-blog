class BaseModel {
  constructor (data, message) {
    if(typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

class SuccessModel extends BaseModel{
  constructor(obj) {
    const {
      data,pageNum, pageSize,total, message
    } = obj
    super(data, message)
    this.errorno = 0
    if(pageNum){
      this.pageNum = +pageNum
    }
    if(pageSize) {
      this.pageSize = +pageSize
    }
    if(total) {
      this.total = total
    }
  }
}

class ErrorModel extends BaseModel{
  constructor(data, message) {
    super(data, message)
    this.errorno = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}