import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import db from '../models';

let createNewuser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                MASV: data.MASV,
                TENSV: data.TENSV,
                DCSV: data.DCSV,
                MALH: data.MALH,
                email: data.email,
                password: hashPasswordFromBcrypt,
            })
            resolve('cearte new user succeed')
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }       
    })
}