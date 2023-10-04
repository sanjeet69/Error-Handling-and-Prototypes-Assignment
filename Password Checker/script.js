 class user {
    constructor (username , password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return '*'.repeat(this._password.length);

    }
    set password (newPassword) {
        if (
             newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword)
        ) {
            this._password = newPassword;
        } else{
            console.error("Invalid password: password must be at  least 8 characters  long and contain at least one uppercase  letter and one number.")
        }
    }
 }

 const user1 = new user("example", "oldPassword123");

 console.log(`masked password: ${user1.password}`);

  user1.password = "NewPass123";

  user1.password = "shord";