const form = require('express-form'),
      field = form.field;

module.exports = {

    checkKey : 

         form(
                field("cached_key").trim().required(),
            ),
    
    checkUpdateForm : 

            form(
                   field("id").trim().required(),
                   field("random_string").trim().required(),

               ),

}