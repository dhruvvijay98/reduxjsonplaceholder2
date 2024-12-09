
function validate ( value ) {
    const formErrors={};

    if(!value.username?.trim()){
        formErrors.username="Username is required";
    }else if(value.username.length<2){
        formErrors.username="Username must be more than two characters"
    }
    if (!String(value.contact || "").trim()) {
      formErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(String(value.contact))) {
      formErrors.contact = "Contact number must be exactly 10 digits";
    }
    if(!value.email?.trim()){
        formErrors.email="Email is required";
      }else if (!/\S+@\S+\.\S+/.test(value.email)){
        formErrors.email="Email.invalid";
      }

      if(!value.password?.trim()){
        formErrors.password="Password is required";
      }else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value.password)){
        formErrors.password="Password is invalid";
      }
      if(!value.confirmpassword?.trim()){
        formErrors.confirmpassword="Confirm Password is required";
      }else if(value.confirmpassword !== value.password){
        formErrors.confirmpassword="Confirm Password is invalid";
      }

      
      return formErrors;

}

export default validate;