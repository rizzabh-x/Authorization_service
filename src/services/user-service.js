const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserRepository = require('../repository/user-repository');
const {JWT_KEY} = require('../config/serverConfig');

class UserService{
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the create service layer");
            throw {error};
        }
    }

    async signIn(email, plainPassword){
        try {
            // Fetching user using email
            const user = await this.userRepository.getByEmail(email);
            // Compare incoming  plain password with stored encrypted password
            const passwordMatch = this.checkPassword(plainPassword, user.password);
            if(!passwordMatch){
                console.log("Password doesn't match");
                throw {error : 'Incorrect Password'};
            }
            // If password match create token and send it to user
            const newJWT = this.createToken({email: user.email, id:user.id});
            return newJWT;

        } catch (error) {
            console.log("Something went wrong in the signin process");
            throw error;
        }
    }

    async isAuthenticated(token){
        try {
            const response = this.verifyToken(token);
            if(!response){
                throw {error: 'Invalid token'}
            }

            const user = await this.userRepository.getById(response.id);
            if(!user){
                throw {error: 'No user with the corresponding token exists'};
            }
            return user.id;
            
        } catch (error) {
            console.log("Something went wrong in the auth process");
            throw error;
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token){
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }
    

    isAdmin(userId){
        try {
            return this.userRepository.isAdmin(userId)
        } catch (error) {
            console.log("Something went wrong in password comparison");
            throw error;
        }
    }
}

module.exports = UserService;