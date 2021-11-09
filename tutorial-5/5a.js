var account = {
    email: "123@pjwstk.edu.pl",
    login: "qwert",
    password: "thisispassword",

    changePassword: function (newPassword){
        account.password = newPassword;
        return account.password;
    },

    displayPassword: function(){
        var result = `Password: ${this.password}`;
        return result
    },

    deleteAccount: function (){
        this.email = null;
        this.login = null;
        this.password = null;
        return "The Account was deleated";
    }
};

function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += `${objName}.${i} = ${obj[i]}, type: ${typeof `${objName}.${i}`}\n`;
        }
    }
    return result;
}

console.log(showProps(account, "account"));
