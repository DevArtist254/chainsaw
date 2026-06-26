const mongoose = require('mongoose');

const chemicalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A product must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A product must have less or equal then 40 char'],
        minlength: [3, 'A product must have more or equal then 3 char'],
    },
    description: {
        type: String,
        required: [true, 'A product must have a description'],
    },
    brand: String,
    category: String,
    sub_category: String,
    application: [String],
    price: {
        type: Number
    },
    meta: {
        title: String,
        description: String
    },
    packing_dimensions: {
        weight: {
            value: Number,
            unit: {
                type: String,
                enum: ["kg", "g", "mg"],
                default: "g"
            },
        },
        litres: {
            value: Number,
            unit: {
                type: String,
                enum: ["l", "ml"],
                default: "l"
            }
        },
    },
    specifications: {
        Regeneration: {
            value: {
                type: String,
            },
        },
        Characteristics: [String],
        details: {
            material: {
                value: {
                    type: String
                }
            }
        }
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
)

const Chemical = mongoose.model('Chemical', chemicalSchema)

module.exports = Chemical;
