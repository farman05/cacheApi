const jwt = require('jsonwebtoken');
const {globalResponse,errorResponse} = require('../helpers');
module.exports = {
    authToken : async(req,res)=>{
        //get auth token for validating the request

            try {
                //static id for generating the payload
                const payload = {
                                user_id:1
                }
                let token = jwt.sign(payload,process.env.JWT_SECERETE_KEY, { algorithm: 'HS256',expiresIn: '18000s' });
                globalResponse(res,200,1,'Auth token generated successfully ',token);
            } catch (e) {
                errorResponse(e)
            }

    }
}