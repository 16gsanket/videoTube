class apiError extends Error{
    constructor(message , error=[] , data ,statusCode, stack='' ){
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.error = error
        this.data = data
        this.success = false
    }
}

export {apiError}