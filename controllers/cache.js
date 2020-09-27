const {globalResponse,errorResponse,formErrors} = require('../helpers')
const Cache = require('../models/caches')
const {generateRandomString,addedTime,compareTime} = require('../helpers')
const moment = require('moment');
const self = module.exports = {

            singleCachedData:async(req,res)=>{
                if (!req.form.isValid) {
                    const errors = formErrors(req.form.getErrors());
                    globalResponse(res, 422, 0, "Validation Errors ", [], errors);
                    return
              }
              const {cached_key} = req.query;
              try{
                //chk given key exits or not
                const keyExists = await Cache.findOne({cached_key:cached_key})
                if(keyExists){
                    const {expiry_time,_id} = keyExists
                    //chk time is not expire, if it is not expire then send response back else generate a new random string and update it 
                    if(compareTime(expiry_time)){
                        globalResponse(res,200,1,'Cache Hit',keyExists);
                        return
                    }else{
                        const result = await self.updateCache(_id)
                        globalResponse(res,200,1,'Cache Hit',result);
                        return
                    }

                }else{

                    //get all the cache data and compare the length with the max limit allowed to enter
                    const totalCache = await Cache.find();
                    if(totalCache && totalCache.length < process.env.MAX_LIMIT){
                        const result = await self.addCache(cached_key)
                        globalResponse(res,200,1,'Cache Miss',result);
                    }else{
                        //if cache exceed the maximum limit then delete a data first then insert the new one
                        //the delete will be on the basis of expiry time, the data thats gonna be expire soon will be deleted
                        const [expireData] = await Cache.find().sort({expiry_time:1}).limit(1)
                        console.log({expireData})
                        const removeData = await self.removeCache(expireData._id);
                        const result =   await self.addCache(cached_key)
                        globalResponse(res,200,1,'Cache Miss',result);
                    }
                                }
              }catch(e){
                    errorResponse(res,e);
              }
            },
            addCache:async(cached_key)=>{
                    //add Cache Data
                    try{
                            const random_string = generateRandomString(10);
                            const expiry_time = addedTime();
                            const cache = new Cache({
                                        cached_key,
                                        random_string,
                                        expiry_time,
                                        count:1
                            })
                            const result = await cache.save(); 
                            return result
                    }catch(e){
                        throw new Error('Error while adding the data ' + e.message)
                    }
            },
            removeCache:async(id)=>{

                        try {
                            const removeData = await Cache.findByIdAndRemove({_id:id});
                            return removeData
                        } catch (e) {
                            throw new Error('Error while removing the cache entry '+e.message)
                        }
            },
            updateCache:async(id)=>{
                    try {
                        const random_string = generateRandomString(10);
                        const expiry_time = addedTime();
                        const updateData = {
                                    random_string,
                                    expiry_time
                        }
                        const result = await Cache.update({_id:id},{$set:{updateData}})
                        return result
                    } catch (e) {
                        throw new Error('Error while updating the cache entry '+e.message)
                        
                    }
            },
            allKeys:async(req,res)=>{

                        try {
                            const result = await Cache.find({});
                            globalResponse(res,200,1,'All Keys',result);
                        } catch (e) {
                            errorResponse(res,e)
                        }
            }
}