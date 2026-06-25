const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
        length: {
            value: Number,
            unit: {
                type: String,
                enum: ["mm", "cm", "m"],
                default: "cm"
            }
        },
        width: {
            value: Number,
            unit: {
                type: String,
                enum: ["mm", "cm", "m"],
                default: "cm"
            }
        },
        height: {
            value: Number,
            unit: {
                type: String,
                enum: ["mm", "cm", "m"],
                default: "cm"
            }
        },
        weight: {
            value: Number,
            unit: {
                type: String,
                enum: ["kg", "g", "mg"],
                default: "g"
            },
            litres: {
                value: Number,
                unit: {
                    type: String,
                    enum: ["l", "ml"],
                    default: "l"
                }
            },
        }
    },
    specifications: {
        flow_rate: {
            value: {
                type: String,
            },
            unit: {
                type: String,
                enum: ["gpm", "lpm", "m3/h", "gpd"],
                default: "gpm"
            }
        },
        working_test_conditions: {
            value: {
                type: String,
            },
            unit: {
                type: String,
                enum: ["ppm", "pH"],
                default: "ppm"
            }
        },
        electrical_details: {
            power: {
                value: String,
                unit: {
                    type: String,
                    enum: ["w", "kW", "MW", "GW"],
                    default: "w"
                }
            },
            horse_power: {
                value: String,
                unit: {
                    type: String,
                    enum: ["hp", "w", "ahp"],
                    default: "hp"
                }
            },
            voltage: {
                value: String,
                unit: {
                    type: String,
                    enum: ["V", "Voltage"],
                    default: "V"
                }
            },
            ampere: {
                value: String,
                unit: {
                    type: String,
                    enum: ["V", "Voltage"],
                    default: "V"
                }
            },
        },
        pressure_range: {
            value: {
                type: String,
            },
            unit: {
                type: String,
                enum: ["Pa", "bar", "kPa", "MPa", "psi"],
                default: "bar"
            }
        },
        temperature: {
            value: {
                type: String,
            },
            unit: {
                type: String,
                enum: ["\({}^{\circ }C\)", "K", "\({}^{\circ }F\)"],
                default: "\({}^{\circ }C\)"
            }
        },
        service_life: {
            value: {
                type: Number
            },
            unit: {
                type: String,
                enum: ["ltrs", "Days"],
                default: "ltrs"
            }
        },
        details: {
            dimensions: {
                value: {
                    type: String
                },
                unit: {
                    type: String,
                    enum: ['inch', "cm", "m", "mm"],
                    default: "inch"
                }
            },
            weight: {
                value: {
                    type: Number
                },
                unit: {
                    type: String,
                    enum: ['kg', "g", "mg"],
                    default: "g"
                }
            },
            material: {
                value: {
                    type: String
                },
                unit: {
                    type: String,
                    enum: [
                        "plastic",
                        "GI",
                        "ss",
                        "ss304",
                        "ss316",
                        "fiber",
                        "glass",
                        "polypropylene",
                        "carbon",
                        "resin",
                        "ceramic",
                        "silca",
                        "chemical material"
                    ]
                }
            }
        }
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
