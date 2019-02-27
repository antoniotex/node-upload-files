const multer = require('multer')
import store from './../../../../../react-native-study/crud-native/shopping-list-tx88/client/src/store';
const path = require('path')
const crypto = require('crypto')

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (erro, hash) => {
                if(erro) callback(err)

                const fileName = `${hash.toString('hex')}-${file.originalname}`

                callback(null, fileName)
            })
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, callback) => {
        const allowedMimes = [
            'image/jpg',
            'image/pjpeg',
            'image/png',
            'image/gif'

        ]
        if(allowedMimes.includes(file.mimetype)){
            callback(null, true)
        }else{
            callback(new Error('Tipo de arquivo inválido'))
        }
    }
}