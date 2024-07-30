import mongoose from "mongoose"

const hospitalSchema= new mongoose.Schema({
    name:{

    },
    addressLine1:{

    },
    addressLine2:{

    },
    city:{

    },
    pincode:{

    },
    specializedIn:{
        
    }

    
},{timestamps:true});

export const Hospital= new mongoose.model("Hospital",hospitalSchema);