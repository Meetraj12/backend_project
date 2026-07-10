const asyncHandler = async (reqHandler) => {
    (req,res,next) => {
        return Promise
        .resolve(reqHandler(req,res,next))
        .catch((error)=> next(err));
    }
}

export default asyncHandler