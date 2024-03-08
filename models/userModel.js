const connection = require('../config/db');


const userModel = {
    createUser(req, res) {
        const newUser = req.body; 
        const query = "INSERT INTO users SET ?";
        
        connection.query(query, newUser, (error, results) => {
            if(error) {
                console.log('Server error', error);
                res.json({
                    message: "Server error.",
                    status_code: 500, 
                })
            }else {
                if(results.affectedRows > 0) {
                    console.log('User created successfully.');
                    res.json({
                        status_code: 200, 
                        message: "User created successfully.",
                        data: newUser
                    })
                }else {
                    console.log('An error occur when creating this user'); 
                    res.json({
                        status_code: 422, 
                        message: "Failed to create this user."
                    })
                }
            }
        }); 
    },

    getUsers(res) {
        const query = 'SELECT * FROM users'; 
        connection.query(query, (error, results) => {
            if(error) {
                res.json({
                    status_code: 422, 
                    message: "Server Error."
                })
            }else {
                console.log(results.length); 
                if(results.length > 0) {
                    res.json({
                        data: results
                    })
                }else {
                    res.json({
                        message: "No users found." 
                    })
                }
            }
        })
    },

    updateUser(req, res) {
        const userId = parseInt(req.params.id); 
        const updateUser = req.body; 
        const query = `UPDATE users SET ? where id = ${userId}`;

        connection.query(query, updateUser, (error, results) => {
            if(error) {
                res.json({
                    status_code: 500,
                    message: "Server Error"
                })
            }else {
                if(results.affectedRows > 0) {
                    res.json({
                        status_code: 200, 
                        message: `${updateUser.name} updated successfully.`,
                        data: updateUser
                    })
                }else {
                    res.json({
                        status_code: 422,
                        message: "User not found."
                    })
                } 
            }
        })

    }
}


module.exports = userModel; 