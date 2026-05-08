const fs = require('fs');
const path = require('path');

// Charger les variables .env en local si elles existent
require('dotenv').config({ path: path.join(__dirname, '.env') });

const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Remplacement des placeholders par les variables d'environnement
const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_ANON_KEY || '';

content = content.replace(/__SUPABASE_URL__/g, url);
content = content.replace(/__SUPABASE_ANON_KEY__/g, key);

// Création du dossier public si nécessaire
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Écriture du fichier final dans public/
fs.writeFileSync(path.join(__dirname, 'public', 'index.html'), content);

console.log('✅ Build réussi : index.html généré dans le dossier public/');
