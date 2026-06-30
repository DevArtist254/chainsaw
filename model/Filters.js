const mongoose = require('mongoose');

const filterSchema = new mongoose.Schema({
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
        },
        quantity: {
            value: Number,
            unit: {
                type: String,
                enum: ["pcs", "pc"],
            }
        }
    },
    specifications: {
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
        micron: {
            value: Number,
            unit: {
                type: String,
                default: "micron"
            }
        },
        mesh: {
            value: String,
            unit: {
                type: String,
                enum: ["micron", "mesh"]
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
        pressure_range: {
            value: {
                type: String,
            },
            unit: {
                type: String,
                enum: ["Pa", "bar", "kPa", "MPa", "psi"],
            }
        },
        temperature: {
            value: {
                type: String,
            },
            unit: {
                type: String,
                enum: ["\({}^{\circ }C\)", "K", "\({}^{\circ }F\)"],
            }
        },
        liquid_type: {
            value: {
                type: String,
            },
            unit: {
                type: String,
                enum: ["Brackish_Water", "Air", "Waste_Water", "Saline_water", "Turbid_Water", "Pool"],
            }
        },
        service_life: {
            value: {
                type: Number
            },
            unit: {
                type: String,
                enum: ["ltrs", "Days"],
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
                        "membrane",
                        "Wound",
                        "glass",
                        "Spun",
                        "Pleated",
                        "carbon",
                        "resin",
                        "ceramic",
                        "silca",
                        "UF"
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

const Filter = mongoose.model('Filter', filterSchema)

module.exports = Filter;
