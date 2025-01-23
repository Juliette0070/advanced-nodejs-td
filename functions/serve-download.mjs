import { createReadStream } from 'fs';
import { join } from 'path';
import { STORAGE_PATH } from '../constants.mjs';

/**
 * Sert à télécharger un fichier du serveur
 * 
 * @param {*} req - Requête
 * @param {*} res - Réponse
 * @returns Une promesse de réponse HTTP
 */
async function serveDownload(req, res) {
  const { filename } = req.params;
    // Code pour télécharger un fichier
    createReadStream(join(process.cwd(), STORAGE_PATH, filename))
      .pipe(res)
      .on('end', () => {
        res.end();
      });
}

export default serveDownload;