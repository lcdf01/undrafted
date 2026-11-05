# Sito WLA Cup 2027

Bozza a pagina singola: `index.html` contiene tutto (stile e script inclusi).
Le parti evidenziate in giallo (classe `tbd`) e la fascia «Bozza del sito» in alto vanno sistemate prima della pubblicazione.

## Pubblicarlo con GitHub Pages (gratis)

1. Crea un account su github.com (o usa il tuo) e un repository pubblico, ad esempio `wlacup`.
2. Carica `index.html`, `wla.html`, `privacy.html` e le cartelle `css`, `js`, `img` (pulsante «Add file → Upload files»).
3. Settings → Pages → Source: «Deploy from a branch», branch `main`, cartella `/ (root)` → Save.
   Dopo un minuto il sito è online su `https://<tuo-utente>.github.io/wlacup/`.

## Collegare il dominio (es. wlacup.it)

1. Compra il dominio da un registrar (Aruba, Register.it, OVH, Namecheap...).
2. Nel pannello DNS del registrar aggiungi:
   - 4 record **A** per `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 record **CNAME** per `www` → `<tuo-utente>.github.io`
3. Su GitHub: Settings → Pages → Custom domain → scrivi `wlacup.it` → Save
   (GitHub crea da solo il file `CNAME` nel repository).
4. Quando il controllo DNS è verde, spunta **Enforce HTTPS**. La propagazione DNS può richiedere da pochi minuti a 24 ore.

## Prima di aprire le iscrizioni

- Inserisci il link del modulo Jotform 2027 nel pulsante «Modulo d'iscrizione».
- Aggiungi indirizzo e link Google Maps del WLA.
- Collega regolamento, privacy e termini (pagine o PDF).
- Togli la fascia «Bozza del sito» e tutte le evidenziazioni gialle.
