export const validationFunc = (name, value)=>{
    switch(name){
        case "SID" :
            const val = value.trim()
            if((val.length === 8) 
            &&
            (parseInt(val.substring(2,5)) >= 101 && parseInt(val.substring(2,5)) <= 109 )
            &&
            (parseInt(val.substring(0,2)) <= parseInt(new Date().getFullYear().toString().substr(-2)) ) 
            &&
            (parseInt(val.substring(5)) < 250 ))
            {return true}else {return false}

        case "name" : case "fName" : case "lName" :
            if(value.trim().length > 0){return true}else {return false}

        case "email" :
            const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
            if(value.match(emailRegex)){return true}else {return false}

        case "password" : 
            const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/;
            if(value.match(passwordRegex)){return true}else {return false}

        case "dob" :
            const dobRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
            if(value.match(dobRegex)){return true}else {return false}
        
        case "gender" : case "branch" :
            if(value !== "---Select---"){return true}else {return false}

        case "phone" :
            const phoneRegex = /^\d{10}$/;
            if(value.match(phoneRegex)){return true}else {return false}

        case "semester" : 
            let sem = +(value.trim())
            if(sem > 0 && sem < 9){return true}else {return false}
        
        case "class10" : case "class12" :
            let marks = +(value.trim())
            if(marks > 0 && marks < 101){return true}else {return false}

        default : return true;
    }
}