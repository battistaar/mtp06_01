## 01 - Stampare il contenuto di una cartella filtrato per estensione
Scrivere un programma che accetta come primo parametro l'indirizzo della cartella e come secondo l'estensione per cui filtrare.

Il programma userà il metodo `fs.readdir()` (quindi la versione asincrona) e stamperà a terminale la lista dei file filtrata per l'estensione passata come secondo parametro.

## 02 - Dividere la logica del programma precedente in più funzioni
Spostare la logica che legge il contenuto della directory e lo filtra in una funzione separata.

Questa funzione accetterà 3 parametri: la path della cartella, l'estensione per cui filtrare e la funzione di callback da eseguire al completamento dell'operazione.

## 03 - Spostare la logica del punto precedente in un file (modulo) separato
Creare un file `filter.js` dove spostare la funzione creata al punto precedente. La funzione sarà esportata (`module.exports = function...`) e utilizzata dal file principale dell'applicazione.

## 04 - Modificare il codice dell'applicazione perchè usi il concetto di Promise invece delle funzioni di callback
Le librerie native di node hanno quasi tutte a disposizione una versione in cui i metodi tornano una Promise invece di usare i callback.

Per la libreria `fs` questa versione è disponibile facendo `require('fs/promises')`.

Le firme dei metodi sono le stesse usate in precedenza, ad esclusione del fatto che accettano un parametro in meno non usando la funzione di callback.

## 05 - Modificare il codice dell'applicazione in modo che usi il concetto di async/await
Ricordarsi che una funzione definita `async` torna a tutti gli effetti una promise. E che una funzione che torna una Promise può essere chiamata usando `await`.