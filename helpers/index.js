const moment = require('moment');
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
    generateRandomString:(length = 10)=>{

        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },
    addedTime : ()=>{
        //return time with added expiry time
        return moment().add(process.env.TTL, 'minutes')
    },
    compareTime:(dateTime)=>{
        const now = moment()
        const givenTime = moment(dateTime)
        const diff = givenTime.diff(now)
        console.log({now},{givenTime})
        console.log({diff})
        return diff > 0 ? true : false
       
    }


}