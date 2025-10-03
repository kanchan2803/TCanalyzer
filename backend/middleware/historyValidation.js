import Joi from 'joi'

const validate = (schema) => (req,res,next) =>{
    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({
            message: "All fields are required in history",
            error
        })
    }
    next();
}

const historySchema = Joi.object({
    code: Joi.string().required(),
    language: Joi.string().required(),
    timeComplexity: Joi.string().required(), 
    spaceComplexity: Joi.string().required(), 
    reasoning: Joi.string().required() 
})

export const validateHistory = validate(historySchema);