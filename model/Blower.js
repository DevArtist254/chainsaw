const mongoose = require('mongoose');

const BlowerSchema = new mongoose.Schema({
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
        }
    },
    specifications: {
        max_flow_rate: {
            value: {
                type: Number,
            },
            unit: {
                type: String,
                enum: ["gpm", "lpm", "m3/h", "gpd"],
                default: "gpm"
            }
        },
        min_flow_rate: {
            value: {
                type: Number,
            },
            unit: {
                type: String,
                enum: ["gpm", "lpm", "m3/h", "gpd"],
                default: "gpm"
            }
        },
        electrical_details: {
            power: {
                value: Number,
                unit: {
                    type: String,
                    enum: ["w", "kW", "MW", "GW"],
                    default: "w"
                }
            },
            horse_power: {
                value: Number,
                unit: {
                    type: String,
                    enum: ["hp", "w", "ahp"],
                    default: "hp"
                }
            },
            voltage: {
                value: Number,
                unit: {
                    type: String,
                    enum: ["V", "Voltage"],
                    default: "V"
                }
            },
            ampere: {
                value: Number,
                unit: {
                    type: String,
                    enum: ["V", "Voltage"],
                    default: "V"
                }
            },
        },
        max_pressure_range: {
            value: {
                type: Number,
            },
            unit: {
                type: String,
                enum: ["Pa", "bar", "kPa", "MPa", "psi"],
                default: "bar"
            }
        },
        min_pressure_range: {
            value: {
                type: Number,
            },
            unit: {
                type: String,
                enum: ["Pa", "bar", "kPa", "MPa", "psi"],
                default: "bar"
            }
        },
        speed: {
            value: {
                type: Number,
            },
            unit: {
                type: String,
                enum: ["rpm", "m/s", "km/h"],
                default: "rpm"
            }
        },
        details: {
            inlet: {
                value: {
                    type: Number
                },
                unit: {
                    type: String,
                    enum: ['inch', "cm", "m", "mm"],
                    default: "inch"
                },
                plumbing: {
                    type: String,
                    enum: ["female", "male", "flanged"],
                    default: "female"
                }
            },
            outlet: {
                value: {
                    type: Number
                },
                unit: {
                    type: String,
                    enum: ['inch', "cm", "m", "mm"],
                    default: "inch"
                },
                plumbing: {
                    type: String,
                    enum: ["female", "male", "flanged"],
                    default: "female"
                }
            },
            stages: {
                value: {
                    type: String
                },
                unit: {
                    type: String,
                    enum: [
                        "Double",
                        "Single",
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

const Blower = mongoose.model('Blower', BlowerSchema)

module.exports = Blower;
