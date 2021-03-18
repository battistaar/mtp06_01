## 01 - Stampare il contenuto di un file di testo
Utilizzare il modulo nativo `fs` ([documentatazione](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfilesync_path_options)) e il suo metodo `readFileSync` per leggere e stampare il contenuto di un file di testo.

Consiglio: `readFileSync` accetta un oggetto `options`, passando il parametro `encoding: 'utf8'` il risultato sarà direttamente una stringa anzichè un Buffer.

## 02 - Stampare il numero di righe del file letto
Consiglio: utilizzare il metodo `split` delle stringhe e usare il carattere newline `\n` come delimitatore.

## 03 - Ripetere il punto 02 utilizando il metodo asincrono readFile