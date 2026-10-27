# 🇷🇴 Prompturi SEO în română

Pentru magazine online și firme din România. Înlocuiește `{{...}}` cu datele tale.

## 1. Audit SEO pentru o pagină

```
Ești specialist SEO tehnic. Analizează pagina de mai jos pentru cuvântul cheie „{{cuvânt cheie}}” (piața: România).
<html>{{codul sursă al paginii sau URL-ul}}</html>
Verifică: indexare (robots, canonical, hreflang), title, meta description, H1 și structura titlurilor, conținutul față de intenția de căutare, linkurile interne, imaginile (alt, dimensiuni), datele structurate, Open Graph și riscuri de viteză.
Dă-mi un scor din 100, primele 3 remedieri cu cel mai mare impact și apoi lista completă (Critic / Important / Opțional), fiecare cu codul exact de pus în pagină. Nu inventa ce nu vezi în HTML.
```

## 2. Title și meta description

```
Scrie title și meta description pentru paginile de mai jos, în română, cu diacritice corecte (ș, ț cu virgulă). Brand: {{brand}}.
Reguli: title 50–60 de caractere, cuvântul cheie la început, brandul la final; descriere 120–160 de caractere, cu un motiv concret de click (livrare, preț, retur). Folosește doar aceste informații: {{livrare în X zile, transport gratuit peste Y lei, retur 14 zile, recenzii...}}.
Pagini: {{URL – ce este – cuvânt cheie}}
Pentru fiecare pagină: 3 variante într-un tabel cu numărul de caractere și recomandarea ta.
```

## 3. Descriere de produs de la furnizor

```
Rescrie descrierea de la furnizor într-o descriere de produs care vinde și se poziționează bine, în română corectă cu diacritice.
<furnizor>{{text și specificații}}</furnizor>
Structură: o propoziție rezumat (ce este + beneficiul principal + vârsta/mărimea), 3–5 beneficii în listă, un paragraf despre utilizare, „Specificații” (păstrează exact toate cifrele), „Conținutul pachetului”, avertismentele de siguranță. Fără exagerări inventate. Adaugă title (≤60) și meta description (≤155).
```

## 4. Text pentru o categorie de magazin

```
Scrie textul pentru categoria „{{categorie}}” a magazinului {{magazin}}.
Date: {{număr produse, branduri, interval de preț, livrare, retur, pentru cine e}}.
Vreau: H1, o introducere de 60–90 de cuvinte deasupra produselor și un ghid de cumpărare de 250–400 de cuvinte sub produse („Cum alegi…”, „Mărimi/vârste…”, „Branduri populare…”), cu linkuri spre {{subcategorii}}. Plus title și meta description.
```

## 5. Pagină locală „serviciu + oraș”

```
Scrie o pagină pentru „{{serviciu}} în {{oraș}}” pentru firma {{firmă}}.
Detalii locale reale: {{cartiere deservite, lucrări făcute acolo, taxă de deplasare, timp de răspuns, autorizații ANRE/ISCIR etc.}}
Include: title, meta, H1, introducere care răspunde la „ce, cât costă, cât de repede”, servicii, prețuri orientative, cum lucrăm, zona acoperită, întrebări frecvente, buton de apel. Apoi JSON-LD LocalBusiness cu areaServed. Să nu pară o copie a altei pagini cu alt oraș.
```

## 6. Profil Google Business

```
Optimizează profilul Google Business pentru {{firmă}} din {{oraș}}.
Date: {{servicii și prețuri, zona deservită, program, ani de activitate, diferențiatori}}.
Dă-mi: categoria principală și secundare, descrierea de 750 de caractere (informațiile cheie în primele 250, fără linkuri), lista de servicii, 5 întrebări și răspunsuri, planul de postări pe 4 săptămâni și lista de poze de făcut.
```

## 7. Răspunsuri la recenzii

```
Scrie răspunsuri la aceste recenzii Google pentru {{firmă}}: calde, scurte (2–4 propoziții), personale, semnate {{nume}}. La cele negative: recunoaște problema, nu te certa, oferă un contact direct. Fără recompense pentru recenzii.
{{nota – textul recenziei}}
```

## 8. Vizibilitate în ChatGPT, Claude și Perplexity

```
Analizează cât de ușor poate fi citat site-ul {{site}} de asistenții AI.
<robots>{{robots.txt}}</robots>
<pagini>{{textul a 3–5 pagini importante}}</pagini>
Verifică accesul roboților AI (de căutare vs de antrenare), dacă textul e în HTML-ul de pe server, llms.txt, răspunsuri directe la început, cifre concrete, consecvența datelor firmei și schema Organization. Dă-mi un tabel cu probleme și remedieri, blocul robots.txt recomandat și un llms.txt complet.
```

## 9. Analiza Search Console

```
Ai exportul din Search Console (interogări și pagini, ultimele 3 luni față de perioada anterioară): {{CSV}}.
Găsește: interogări cu multe afișări și CTR mic (de schimbat title/description), interogări pe pozițiile 8–20 (câștiguri rapide), pagini care au scăzut și când, subiecte noi pentru pagini. Dă-mi o listă de acțiuni în ordinea priorității, cu pagina și modificarea.
```
