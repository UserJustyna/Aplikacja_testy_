| ![image](https://github.com/UserJustyna/Aplikacja_testy_/assets/153954677/6755cf45-951c-47d9-a71e-a4b2103be50e)  | <h2>Wydział Politechniczny</h2><h5>Katedra Informatyki</h5>                            |
| --------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Autor**                                | Justyna Toczek                                                                           |
| **Kurs**                                      | Testowanie i Jakość Oprogramowania (Projekt)                                           |
| **Temat**                                     | Testowanie aplikacji do zarządzania finansami osobistymi.                                   |



# Opis projektu

Aplikacja będzie miała na celu pomóc w zarządzaniu finansami osobistymi i będzie
skierowana do użytkowników indywidualnych. Użytkownik będzie mógł założyć konto w systemie,
który pomoże użytkownikowi świadomie kontrolować swoje finanse poprzez monitorowanie
wydatków przewidzianych na dany miesiąc i późniejszą ich analizę, pilnowanie terminowości opłat i
pogłębianie wiedzy w temacie oszczędności i tematów związanych z tym zagadnieniem.


# Uruchomienie projektu

Po pobraniu aplikacji wykonujemy komendy z poziomu terminala.

## Backend aplikacji

W pierwszej kolejności przechodzimy po ścieżce do folderu `backend`. Następnie uruchamiamy `npm install` w celu pobrania wszystkich zależności zdefiniowanych w pliku `package.json`. Finalnie uruchamiamy polecenie `npm run dev`, które spowoduje uruchomienie aplikacji (serwer aplikacji zostaje wówczas uruchomiony oraz następuje połączenie z bazą danych). W rezultacie, w konsoli powinny wyświetlać się informacje: `Mongo connected`
`Server is running at 3000`.

## Frontend aplikacji

Przechodzimy po ścieżce do folderu `frontend`. Następnie uruchamiamy kolejno `npm install` a w następnej kolejności polecenie `npm run dev`, które spowoduje wyświetlenie się http://localhost:5173/ - który otwieramy za pomocą kombinacji przycisków `ctrl + click`.

# Uruchomienie testów jednostkowych i integracyjnych.

Testy jednostkowe i integracyjne znajdują się w backendzie aplikacji w folderze `tests`. Aby uruchomić testy, przechodzimy po ścieżce do folderu `backend` w terminalu i uruchamiamy polecenie `npm run test`.

# Dokumentacja API
| Metoda | Ścieżka | Przekazywane Dane | Autoryzacja | Opis |
|--------|---------|-------------------|--------------|------|
| POST   | /api/user/auth | JSON: { "email": "string", "password": "string" } | - | Autentykacja użytkownika. |
| POST   | /api/user/create | JSON: { "email": "string", "password": "string" } | - | Tworzy lub aktualizuje użytkownika zgodnie z przekazanymi danymi. |
| DELETE | /api/user/logout/:userId | - | Auth (Bearer Token) | Usuwa sesję użytkownika na podstawie identyfikatora. |

| Metoda | Ścieżka | Przekazywane Dane | Autoryzacja | Opis |
|--------|---------|-------------------|--------------|------|
| POST   | /api/article/create | JSON: { "title": "string", "content": "string" } | Admin (Bearer Token) | Tworzy lub aktualizuje artykuł zgodnie z przekazanymi danymi. |
| DELETE | /api/article/:articleId | - | Admin (Bearer Token) | Usuwa artykuł na podstawie identyfikatora. |
| GET    | /api/article/get/:articleId | - | Auth (Bearer Token) | Pobiera informacje o artykule na podstawie identyfikatora. |
| GET    | /api/article/getAll | - | Auth (Bearer Token) | Pobiera wszystkie artykuły. |

| Metoda | Ścieżka | Przekazywane Dane | Autoryzacja | Opis |
|--------|---------|-------------------|--------------|------|
| POST   | /api/expense/create | JSON: { "amount": number, "description": "string", "category": "string", "date": "string" } | Auth (Bearer Token) | Tworzy lub aktualizuje wydatek zgodnie z przekazanymi danymi. |
| DELETE | /api/expense/logout/:expenseId | JSON: { "expenseBudgetId": "string" } | Auth (Bearer Token) | Usuwa wydatek na podstawie identyfikatora. |
| GET    | /api/expense/get/:expenseId | - | Auth (Bearer Token) | Pobiera informacje o wydatku na podstawie identyfikatora. |
| GET    | /api/expense/getAllExpense/:expenseCategoryId | - | Auth (Bearer Token) | Pobiera wszystkie wydatki dla danej kategorii wydatków. |

| Metoda | Ścieżka | Przekazywane Dane | Autoryzacja | Opis |
|--------|---------|-------------------|--------------|------|
| POST   | /api/expenseCategory/create | JSON: { "name": "string", "budgetLimit": number, "monthlyBudget": "string" } | Auth (Bearer Token) | Tworzy lub aktualizuje kategorię wydatków zgodnie z przekazanymi danymi. |
| DELETE | /api/expenseCategory/logout/:expenseCategoryId | - | Auth (Bearer Token) | Usuwa kategorię wydatków na podstawie identyfikatora. |
| GET    | /api/expenseCategory/get/:expenseCategoryId | - | Auth (Bearer Token) | Pobiera informacje o kategorii wydatków na podstawie identyfikatora. |
| GET    | /api/expenseCategory/getAll/:monthlyBudget | - | Auth (Bearer Token) | Pobiera wszystkie kategorie wydatków dla danego budżetu miesięcznego. |
| GET    | /api/expenseCategory/expense/:expenseCategoryId | - | Auth (Bearer Token) | Pobiera informacje o wydatku dla danej kategorii wydatków. |
| GET    | /api/expenseCategory/chart/:monthBudgetId | - | Auth (Bearer Token) | Pobiera dane do wykresu dla danej kategorii wydatków w danym budżecie miesięcznym. |
| GET    | /api/expenseCategory/actualMonthlyValue/:monthBudgetId | - | Auth (Bearer Token) | Pobiera aktualną miesięczną wartość dla danej kategorii wydatków w danym budżecie miesięcznym. |

| Metoda | Ścieżka | Przekazywane Dane | Autoryzacja | Opis |
|--------|---------|-------------------|--------------|------|
| POST   | /api/monthBudget/create | JSON: { "budgetLimit": number, "month": "string", "user": "string" } | Auth (Bearer Token) | Tworzy lub aktualizuje budżet miesięczny zgodnie z przekazanymi danymi. |
| DELETE | /api/monthBudget/logout/:monthBudgetId | - | Auth (Bearer Token) | Usuwa budżet miesięczny na podstawie identyfikatora. |
| GET    | /api/monthBudget/get/:monthBudgetId | - | Auth (Bearer Token) | Pobiera informacje o budżecie miesięcznym na podstawie identyfikatora. |
| GET    | /api/monthBudget/getAll/:userId | - | Auth (Bearer Token) | Pobiera wszystkie budżety miesięczne dla danego użytkownika. |  


# Scenariusze dla testera manualnego

| CASEID | OPIS                                        | WARUNKI WSTĘPNE                                   | KROKI TESTOWE                                                                                                      | OCZEKIWANE WYNIKI                                                          |
|--------|---------------------------------------------|---------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 1      | Rejestracja użytkownika w systemie           | - User nie ma jeszcze konta w systemie. User jest w widoku, w którym znajduje się formularz rejestracji. | 1. Użytkownik wprowadza dane w pole Imię. <br>2. Użytkownik wprowadza dane w pole E-mail. <br>3. Użytkownik wprowadza dane w pole Hasło. <br>4. Użytkownik zatwierdza formularz przyciskiem Zarejestruj się. | Pojawia się komunikat z informacją o pozytywnie wykonanej akcji.          |
| 2      | Logowanie użytkownika w systemie             | - User podsiada aktywne konto w systemie. User jest w widoku, w którym znajduje się formularz logowania.  | 1. Użytkownik wprowadza dane w pole E-mail, które podawał podczas rejestracji. <br>2. Użytkownik wprowadza dane w pole Hasło, które podawał podczas rejestracji. <br>3. Użytkownik zatwierdza formularz przyciskiem Zaloguj się. | Użytkownik zostaje przekierowany do widoku z formularzem tworzenia budżetu. |
| 3      | Tworzenie budżetu miesięcznego w systemie     | - Użytkownik nie utworzył jeszcze budżetu na dany miesiąc. Użytkownik jest zalogowany na swoje konto w systemie. | 1. Użytkownik podaje kwotę budżetu miesięcznego. <br>2. Użytkownik klika w pole Wybierz miesiąc. <br>3. Pojawia się kalendarz z miesiącami do wyboru - user wybiera jeden z nich. <br>4. User zatwierdza wprowadzone dane przyciskiem Stwórz budżet. | W sekcji Twoje budżety miesięczne pojawił się kafelek z wybranym miesiącem.|
| 4      | Wylogowanie z systemu                        | - Użytkownik jest zalogowany na swoje konto w systemie. Przycisk Wyloguj się jest dostępny w panelu. | 1. Użytkownik klika przycisk Wyloguj się, który jest widoczny na pasku w prawym górnym rogu. <br>2. System wyświetla komunikat z prośbą o potwierdzenie akcji. <br>3. Użytkownik zatwierdza komunikat przyciskiem Ok. | System wylogowuje użytkownika oraz przekierowuje go do widoku formularza logowania.|
| 5      | Tworzenie podbudżetu w budżecie miesięcznym  | - Użytkownik jest zalogowany na swoje konto w systemie. Kafelek z budżetem miesięcznym został utworzony. Formularz tworzenia podbudżetu wyświetla się prawidłowo. W systemie nie istnieje jeszcze budżet miesięczny dotyczący tego miesiąca (w danym roku). | 1. Użytkownik przechodzi do widoku wybranego budżetu miesięcznego. <br>2. Użytkownik wpisuje w formularzu tworzenia podbudżetu wymagane dane. <br>3. Użytkownik wybiera kategorię – tą akcją przypisuje podbudżet do danej kategorii. <br>4. Na koniec użytkownik zatwierdza podane dane przyciskiem Stwórz podbudżet. | System utworzył podbudżet w budżecie miesięcznym. Kafelek podbudżetu zostaje utworzony i wyświetlony w interfejsie użytkownika. |
| 6      | Dodanie wydatku do podbudżetu                | - Użytkownik jest zalogowany na swoje konto w systemie. Kafelek z podbudżetem został utworzony. Formularz dodawania wydatku wyświetla się prawidłowo. | 1. Użytkownik przechodzi do widoku, w którym znajduje się formularz umożliwiający dodanie wydatku do podbudżetu. <br>2. Użytkownik wpisuje w formularzu tworzenia podbudżetu wymagane dane. <br>3. Użytkownik wybiera kategorię (czyli podbudżet) – tą akcją przypisuje wydatek do podbudżetu. <br>4. Na koniec użytkownik zatwierdza podane dane przyciskiem Dodaj wydatek. | System utworzył wydatek i przypisał go do wybranego podbudżetu. Kafelek wydatku zostaje utworzony i wyświetlony w interfejsie użytkownika. Kwota podbudżetu zostaje pomniejszona o wartość wydatku.|
| 7      | Weryfikacja zestawienia wydatków w wybranym miesiącu | - Użytkownik jest zalogowany na swoim koncie. W systemie został utworzony budżet miesięczny, w którym znajdują się podbudżety z przypisanymi wydatkami. Miesiąc musi zakończyć się, aby uzyskać właściwy i pełny wykres wydatków. | 1. Użytkownik klika na wybrany miesiąc spośród widniejących w sekcji Twoje budżety miesięczne. <br>2. Użytkownik zostaje przekierowany do szczegółów budżetu miesięcznego, gdzie klika przycisk Sprawdź zestawienie wydatków. | Użytkownik zostaje przekierowany do widoku, w którym znajdują się wykres kołowy. System wyświetla wykres wydatków wybranego przez użytkownika miesiąca, który user może analizować. |
| 8      | Zaplanowanie celu                            | - Użytkownik jest zalogowany w systemie. Funkcja dodawania celu wyświetla się i działa poprawnie. | 1. Użytkownik przechodzi do widoku, w którym widnieje opcja utworzenia celu. <br>2. Użytkownik klika na przycisk Utwórz cel. <br>3. System wyświetla użytkownikowi formularz tworzenia celu. <br>4. Użytkownik wypełnia pole Nazwa celu. <br>5. Na koniec użytkownik zatwierdza formularz tworzenia celu przyciskiem Utwórz cel. | System tworzy cel. System wyświetla utworzony cel w postaci paska w interfejsie użytkownika. |
| 9      | Dodanie kwoty do celu                        | - Cel został utworzony Cel został utworzony. Użytkownik jest zalogowany na utworzone w serwisie konto. | 1. Użytkownik przechodzi do widoku, w którym widnieją utworzone cele. <br>2. Użytkownik obok utworzonego celu klika przycisk Dodaj. <br>3. System wyświetla użytkownikowi okienko z umożliwiające dodanie kwoty. <br>4. Użytkownik wpisuje w pole Kwota wartość. <br>5. Użytkownik klika przycisk Dodaj kwotę. | System dodaje kwotę do celu oraz wypełnia pasek kolorem, obrazując procent uzbieranej kwoty.|
| 10     | Dodanie artykułu w panelu edukacyjnym przez   | - Administrator jest zalogowany na swoje konto z uprawnieniami administratora. | 1. Admin klika przycisk Przejdź do panelu edukacyjnego. <br>2. Admin zostaje przekierowany do widoku panelu edukacyjnego. <br>3. Admin klika w opcję Dodaj artykuł. <br>4. System wyświetla formularz umożliwiający dodanie artykułu. <br>5. Admin uzupełnia prawidłowo wymagane pola. <br>6. Admin na koniec klika przycisk Utwórz artykuł. | System tworzy artykuł oraz wyświetla go w panelu edukacyjnym.              |


# Wybrane technologie :
- System kontroli wersji GIT

- Baza danych MongoDB

- React.js

- JavaScript

- JWT

&copy;  Justyna Toczek
