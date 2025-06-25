# kanbanApp2

Projekt tablicy kanban na bazie Trello i Asana

### Co będzie miał kanbanApp?
- Zmiana widoków: lista, tablica, oś czasuw
- edycja nazwy kolumny na klik
- 
- Kolumny:
  - dodawanie kolumny
  - menu kontekstowe: usuń kolumnę, sortuj taski
  - nazwa kolumny, dodawanie taska, ilość tasków, menu kontekstowe w jednym poziomie na samej górze karty (jak w Asana)
  - w kolumnie widok taska: nazwa, priorytet, status, osoba przypisana, termin realizacji


- Taski:
  - dodawanie taska (widok): nazwa, kolumna (domyślnie ustawiona), priorytet (niski, normalny, wysoki), typ/rodzaj tasku (lista rozwijana, tworzona na bieżąco), opis (WYSYWIG), lista zadań (lista checkbox), data wykonania (od-do), załączniki, podzadania (tworzenie nowego tasku)
  - menu kontekstowe: brak; task edytowany na poziomie podglądu (popup)

### TODO
- ~~wylaczenie modala po kliknieciu poza modal lub na Esc~~
- Zmiana widoków: lista, tablica, oś czasu
- drag & drop dla kolumn i tasków
- ~~edycja nazwy kolumny na klik~~

- Kolumny:
    - ~~dodawanie kolumny~~
    - menu kontekstowe: usuń kolumnę, sortuj taski
    - nazwa kolumny, dodawanie taska, ilość tasków, menu kontekstowe w jednym poziomie na samej górze karty (jak w Asana)
    - w kolumnie widok taska: nazwa, priorytet, status, osoba przypisana, termin realizacji


- Taski:
    - dodawanie taska (widok): ~~nazwa~~, kolumna (domyślnie ustawiona), priorytet (niski, normalny, wysoki), typ/rodzaj tasku (lista rozwijana, tworzona na bieżąco), opis (WYSYWIG), lista zadań (lista checkbox), data wykonania (od-do), załączniki, podzadania (tworzenie nowego tasku)
    - menu kontekstowe: brak; task edytowany na poziomie podglądu (popup)
- wyłącz modal na Esc

### Co działa?
- Dodawanie kolumny
- dodawanie taska
- modyfikacja nazwy kolumny (na dbl click)
- obsługa modala
- dodane sub-menu dla kolumn i tasków
- kolumny dostępne jako status w select menu

### Co NIE działa?
- zmiana nazwy kolumny nie zmienia nazwy statusu w liscie rozwijanej

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
