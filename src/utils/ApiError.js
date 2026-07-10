class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.success = false
        this.error = errors
        this.statck = statck
    }
}

export default ApiError