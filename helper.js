module.exports = {
    validateEmail: function (email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    validateName: function (name) {
        const re = /^[A-Za-z]+$/;
        return re.test(name);
    },
    generateValidationList: function (inputData) {
        let obj = {
            firstName: Boolean,
            lastName: Boolean,
            email: Boolean
        }
        Object.entries(inputData).forEach(([key, val]) => {
            if (key === 'email'){
                obj.email = module.exports.validateEmail(val);
            } else if (key === 'firstName') {
                obj.firstName = module.exports.validateName(val);
            } else {
                obj.lastName = module.exports.validateName(val);
            }
        })
        return obj;
    },
    checkBooleans: function (validationObj){
        let boolean = true;
        let validationList = Object.keys(validationObj).map((key) => validationObj[key]);
        for (let i = 0; i < validationList.length; i++){
            if (!validationList[i]){
                boolean = false;
            }
        }
        return boolean
    },
    addCustomer: function (newCustomer, customers){
        newCustomer.id = (customers.length + 1)
        customers.push(newCustomer);
    }
};
