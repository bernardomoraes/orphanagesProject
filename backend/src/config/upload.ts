import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..','..', 'uploads'), //utilizamos o path para compatibilidade em diversos SO's
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName) // callback, primeiro parâmetro é o erro e o segundo é o nome do arquivo.
            // tudo isso está na documentação do multer, então para mais dúvidas é so acessar.
        }
    })
}