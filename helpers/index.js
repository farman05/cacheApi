module.exports = {
    globalResponse : (res,statusCode,status,msg,result="",err = "",isMobile = false)=>{
        return res.status(statusCode).json({'status':status,'msg':msg,data:result,err:err})

    },
    formErrors: (errors) => {
        let response = [];

        for (var err in errors) {
            response.push(errors[err][0]);
        }
        return response;
    },
    errorResponse: (res, err) => {
        return res
            .status(500)
            .json({
                status: 0,
                msg: "Something Went Wrong",
                data: [],
                err: err.message ? err.message : err,
            });
    },


}