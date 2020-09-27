const form = require('express-form'),
      field = form.field;

module.exports = {

    checkKey : 

         form(
                field("cached_key").trim().required(),
            ),

}