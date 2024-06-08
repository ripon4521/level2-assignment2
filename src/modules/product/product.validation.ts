import Joi from "joi";

const productJoiSchema = Joi.object({
    _id: Joi.string().optional(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    variants: Joi.array().items(
        Joi.object({
            type: Joi.string().required(),
            value: Joi.string().required(),
            _id: Joi.string().optional()
        })
    ).required(),
    inventory: Joi.object({
        quantity: Joi.number().required(),
        inStock: Joi.boolean().required(),
        _id: Joi.string().optional()
        
    }).required(),

});



export default productJoiSchema;
