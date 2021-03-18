## 01 - Leggere gli argomenti passati da riga di comando
* Creare il file es02.js
* Aggiungere il codice
```js
console.log(process.argv);
```
* Eseguire il programma con
```bash
node es02.js 1 2 3 4
```
## 02 - Stampare la somma
`process.argv` è un array che inizia sempre con `node` e il `nome del file`, seguiti dagli altri argomenti passati. Ogni argomento è letto come stringa.
* Modificare il programma in modo che stampi solo gli argomenti passati, senza `node` e il `nome del file`
* Modificare il programma in modo che stampi in output la somma degli argomenti passati
* Modificare il programma in modo che stampi in output solo gli argomenti pari
