
# Project Title

A brief description of what this project does and who it's for

| CaseId | Opis                                     | Warunki wstępne                                       | Kroki testowe                                                                                          | Oczekiwane wyniki                                                                     |
|--------|------------------------------------------|-------------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| 1      | Rejestracja użytkownika w systemie        | - User nie ma jeszcze konta w systemie.                | 1. Użytkownik wprowadza dane w pole Imię.                                                               | Pojawia się komunikat z informacją o pozytywnie wykonanej akcji.                     |
|        |                                          | - User jest w widoku, w którym znajduje się           | 2. Użytkownik wprowadza dane w pole E-mail.                                                             |                                                                                        |
|        |                                          | formularz rejestracji.                                | 3. Użytkownik wprowadza dane w pole Hasło.                                                              |                                                                                        |
|        |                                          |                                                     | 4. Użytkownik zatwierdza formularz przyciskiem Zarejestruj się.                                         |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 2      | Logowanie użytkownika w systemie          | - User podsiada aktywne konto w systemie.             | 1. Użytkownik wprowadza dane w pole E-mail, które podawał podczas rejestracji.                       | Użytkownik zostaje przekierowany do widoku z formularzem tworzenia budżetu miesięcznego.|
|        |                                          | - User jest w widoku, w którym znajduje się           | 2. Użytkownik wprowadza dane w pole Hasło, które podawał podczas rejestracji.                         |                                                                                        |
|        |                                          | formularz logowania.                                  | 3. Użytkownik zatwierdza formularz przyciskiem Zaloguj się.                                            |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 3      | Tworzenie budżetu miesięcznego w systemie  | - Użytkownik nie utworzył jeszcze budżetu na         | 1. Użytkownik podaje kwotę budżetu miesięcznego.                                                      | W sekcji Twoje budżety miesięczne pojawił się kafelek z wybranym miesiącem.          |
|        |                                          | dany miesiąc.                                       | 2. Użytkownik klika w pole Wybierz miesiąc.                                                           |                                                                                        |
|        |                                          | - Użytkownik jest zalogowany na swoje konto w        | 3. Pojawia się kalendarz z miesiącami do wyboru - użytkownik wybiera jeden z nich.                   |                                                                                        |
|        |                                          | systemie.                                           | 4. Użytkownik zatwierdza wprowadzone dane przyciskiem Stwórz budżet.                                  |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 4      | Wylogowanie z systemu                    | - Użytkownik jest zalogowany na swoje konto w        | 1. Użytkownik klika przycisk Wyloguj się, który jest widoczny na pasku w prawym górnym rogu.         | System wylogowuje użytkownika oraz przekierowuje go do widoku formularza logowania.  |
|        |                                          | systemie.                                           | 2. System wyświetla komunikat z prośbą o potwierdzenie akcji.                                         |                                                                                        |
|        |                                          |                                                     | 3. Użytkownik zatwierdza komunikat przyciskiem Ok.                                                  |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 5      | Tworzenie podbudżetu w budżecie miesięcznym | - Użytkownik jest zalogowany na swoje konto w        | 1. Użytkownik przechodzi do widoku wybranego budżetu miesięcznego.                                    | System utworzył podbudżet w budżecie miesięcznym. Kafelek podbudżetu zostaje utworzony i wyświetlony w interfejsie.|
|        |                                          | systemie.                                           | 2. Użytkownik wpisuje w formularzu tworzenia podbudżetu wymagane dane.                                | użytkownika.                                                                            |
|        |                                          |                                                     | 3. Użytkownik wybiera kategorię – tą akcją przypisuje podbudżet do danej kategorii.                  |                                                                                        |
|        |                                          |                                                     | 4. Na koniec użytkownik zatwierdza podane dane przyciskiem Stwórz podbudżet.                         |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 6      | Dodanie wydatku do podbudżetu             | - Użytkownik jest zalogowany na swoje konto w        | 1. Użytkownik przechodzi do widoku, w którym znajduje się formularz umożliwiający dodanie wydatku do podbudżetu.|
|        |                                          | systemie.                                           | 2. Użytkownik wpisuje w formularzu tworzenia podbudżetu wymagane dane.                               | System utworzył wydatek i przypisał go do wybranego podbudżetu. Kafelek wydatku zostaje utworzony i wyświetlony w |
|        |                                          |                                                     | 3. Użytkownik wybiera kategorię (czyli podbudżet) – tą akcją przypisuje wydatek do podbudżetu.      | interfejsie użytkownika. Kwota podbudżetu zostaje pomniejszona o wartość wydatku.         |
|        |                                          |                                                     | 4. Na koniec użytkownik zatwierdza podane dane przyciskiem Dodaj wydatek.                           |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 7      | Weryfikacja zestawienia wydatków          | - Użytkownik jest zalogowany na swoim koncie.        | 1. Użytkownik klika na wybrany miesiąc spośród widniejących w sekcji Twoje budżety miesięczne.     | Użytkownik zostaje przekierowany do widoku, w którym znajdują się wykresy wydatków wybranego miesiąca.|
|        | w wybranym miesiącu.                       | - W systemie został utworzony budżet miesięczny, w    | 2. Użytkownik zostaje przekierowany do szczegółów budżetu miesięcznego, gdzie klika przycisk Sprawdź zestawienie wydatków.|
|        |                                          | którym znajdują się podbudżety z przypisanymi          |                                                                                                        | System wyświetla wykres wydatków wybranego przez użytkownika miesiąca, który użytkownik może analizować.|
|        |                                          | wydatkami.                                          |                                                                                                        |                                                                                        |
|        |                                          | - Miesiąc musi zakończyć się, aby uzyskać właściwy   |                                                                                                        |                                                                                        |
|        |                                          | i pełny wykres wydatków.                            |                                                                                                        |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 8      | Zaplanowanie celu                          | - Użytkownik jest zalogowany w systemie.             | 1. Użytkownik przechodzi do widoku, w którym widnieje opcja utworzenia celu.                      | System tworzy cel. System wyświetla utworzony cel w postaci paska w interfejsie użytkownika.|
|        |                                          | - Funkcja dodawania celu wyświetla się i działa      | 2. Użytkownik klika na przycisk Utwórz cel.                                                         |                                                                                        |
|        |                                          | poprawnie.                                          | 3. System wyświetla użytkownikowi formularz tworzenia celu.                                        |                                                                                        |
|        |                                          |                                                     | 4. Użytkownik wypełnia pole Nazwa celu.                                                            |                                                                                        |
|        |                                          |                                                     | 5. Na koniec użytkownik zatwierdza formularz tworzenia celu przyciskiem Utwórz cel.               |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 9      | Dodanie kwoty do celu                      | - Cel został utworzony                              | 1. Użytkownik przechodzi do widoku, w którym widnieją utworzone cele.                               | System dodaje kwotę do celu oraz wypełnia pasek kolorem, obrazując procent uzbieranej kwoty.|
|        |                                          | - Użytkownik jest zalogowany na utworzone w          | 2. Użytkownik obok utworzonego celu klika przycisk Dodaj.                                           |                                                                                        |
|        |                                          | serwisie konto.                                     | 3. System wyświetla użytkownikowi okienko z umożliwiające dodanie kwoty.                            |                                                                                        |
|        |                                          |                                                     | 4. Użytkownik wpisuje w pole Kwota wartość.                                                       |                                                                                        |
|        |                                          |                                                     | 5. Użytkownik klika przycisk Dodaj kwotę.                                                          |                                                                                        |
|        |                                          |                                                     |                                                                                                        |                                                                                        |
| 10     | Dodanie artykułu w panelu edukacyjnym przez | - Administrator jest zalogowany na swoje konto        | 1. Admin klika przycisk Przejdź do panelu edukacyjnego.                                           | System tworzy artykuł oraz wyświetla go w panelu edukacyjnym.                           |
|        | admina.                                   | z uprawnieniami administratora.                      | 2. Admin zostaje przekierowany do widoku panelu edukacyjnego.                                      |                                                                                        |
|        |                                          |                                                     | 3. Admin klika w opcję Dodaj artykuł.                                                             |                                                                                        |
|        |                                          |                                                     | 4. System wyświetla formularz umożliwiający dodanie artykułu.                                    |                                                                                        |
|        |                                          |                                                     | 5. Admin uzupełnia prawidłowo wymagane pola.                                                       |                                                                                        |
|        |                                          |                                                     | 6. Admin na koniec klika przycisk Utwórz artykuł.                                                  |                                                                                        |
