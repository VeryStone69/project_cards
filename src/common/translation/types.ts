export type Translate = {
  app: TranslateApp
}
export type TranslateAppDecksAddNewDeck = {
  title: string
}
export type TranslateAppDecksSearch = {
  placeholder: string
}
export type TranslateAppDecksTabSwitcherTab = {
  allDecks: string
  myDeck: string
}
export type TranslateAppDecksTabSwitcher = {
  tab: TranslateAppDecksTabSwitcherTab
  title: string
}
export type TranslateAppDecksSlider = {
  title: string
}
export type TranslateAppDecksClearFilter = {
  title: string
}
export type TranslateAppDecksTable = {
  cards: string
  create: string
  name: string
  update: string
}
export type TranslateAppDecksPagination = {
  onThePage: string
  show: string
}
export type TranslateAppDecks = {
  addNewDeck: TranslateAppDecksAddNewDeck
  clearFilter: TranslateAppDecksClearFilter
  pagination: TranslateAppDecksPagination
  search: TranslateAppDecksSearch
  slider: TranslateAppDecksSlider
  tabSwitcher: TranslateAppDecksTabSwitcher
  table: TranslateAppDecksTable
  title: string
}
export type TranslateAppCardsDropdown = {
  delete: string
  edit: string
  learn: string
}
export type TranslateAppCardsLearn = {
  title: string
}
export type TranslateAppCardsAddNewCardToast = {
  error: string
  pending: string
  success: string
}
export type TranslateAppCardsAddNewCard = {
  title: string
  toast: TranslateAppCardsAddNewCardToast
}
export type TranslateAppCardsSearch = {
  placeholder: string
}
export type TranslateAppCardsTable = {
  cards: string
  create: string
  name: string
  update: string
}
export type TranslateAppCardsPagination = {
  onThePage: string
  show: string
}
export type TranslateAppCards = {
  addNewCard: TranslateAppCardsAddNewCard
  back: string
  dropdown: TranslateAppCardsDropdown
  learn: TranslateAppCardsLearn
  pagination: TranslateAppCardsPagination
  search: TranslateAppCardsSearch
  table: TranslateAppCardsTable
}
export type TranslateAppLearnRate = {
  1: string
  2: string
  3: string
  4: string
  5: string
  title: string
}
export type TranslateAppLearn = {
  answer: string
  attempts: string
  end: string
  next: string
  question: string
  rate: TranslateAppLearnRate
  show: string
  title: string
}
export type TranslateAppProfile = {
  back: string
  logout: string
  title: string
}
export type TranslateAppGreeting = {
  description: string
  login: string
  rules: string
  title: string
}
export type TranslateAppRules = {
  1: string
  2: string
  3: string
  4: string
  5: string
  back: string
  title: string
}
export type TranslateAppLoginToast = {
  success: string
}
export type TranslateAppLogin = {
  email: string
  forgot: string
  login: string
  noAcc: string
  password: string
  register: string
  remember: string
  title: string
  toast: TranslateAppLoginToast
}
export type TranslateAppNotFound = {
  back: string
  title: string
}
export type TranslateAppRegister = {
  confirm: string
  email: string
  haveAcc: string
  login: string
  password: string
  register: string
  title: string
}
export type TranslateAppRecovery = {
  email: string
  login: string
  remember: string
  send: string
  subtitle: string
  title: string
}
export type TranslateAppCheck = {
  back: string
  description: string
  title: string
}
export type TranslateAppNewPasswordToast = {
  pending: string
  success: string
}
export type TranslateAppNewPassword = {
  create: string
  description: string
  password: string
  title: string
  toast: TranslateAppNewPasswordToast
}
export type TranslateAppAddDeckModalToast = {
  error: string
  pending: string
  success: string
}
export type TranslateAppAddDeckModal = {
  cancel: string
  create: string
  deckName: string
  private: string
  title: string
  toast: TranslateAppAddDeckModalToast
  upload: string
}
export type TranslateAppEditDeckModalToast = {
  error: string
  pending: string
  success: string
}
export type TranslateAppEditDeckModal = {
  cancel: string
  deckName: string
  delete: string
  private: string
  title: string
  toast: TranslateAppEditDeckModalToast
  update: string
  upload: string
}
export type TranslateAppDeleteDeckModalToast = {
  error: string
  pending: string
  success: string
}
export type TranslateAppDeleteDeckModal = {
  cancel: string
  description: string
  remove: string
  title: string
  toast: TranslateAppDeleteDeckModalToast
}
export type TranslateAppAddCardModalSelect = {
  picture: string
  text: string
  title: string
}
export type TranslateAppAddCardModalSubtitle = {
  picture: string
  text: string
}
export type TranslateAppAddCardModalToast = {
  error: string
  pending: string
  success: string
}
export type TranslateAppAddCardModal = {
  answer: string
  cancel: string
  create: string
  delete: string
  question: string
  select: TranslateAppAddCardModalSelect
  subtitle: TranslateAppAddCardModalSubtitle
  title: string
  toast: TranslateAppAddCardModalToast
  upload: string
}
export type TranslateAppEditCardModalSelect = {
  picture: string
  text: string
  title: string
}
export type TranslateAppEditCardModalSubtitle = {
  picture: string
  text: string
}
export type TranslateAppEditCardModalToast = {
  error: string
  pending: string
  success: string
}
export type TranslateAppEditCardModal = {
  answer: string
  cancel: string
  delete: string
  question: string
  select: TranslateAppEditCardModalSelect
  subtitle: TranslateAppEditCardModalSubtitle
  title: string
  toast: TranslateAppEditCardModalToast
  update: string
  upload: string
}
export type TranslateAppDeleteCardModalToast = {
  error: string
  pending: string
  success: string
}
export type TranslateAppDeleteCardModal = {
  cancel: string
  description: string
  remove: string
  title: string
  toast: TranslateAppDeleteCardModalToast
}
export type TranslateAppValidate = {
  confirm: string
  email: string
  img: string
  maxName: string
  maxPassword: string
  name: string
  password: string
  sizeImg: string
}
export type TranslateApp = {
  addCardModal: TranslateAppAddCardModal
  addDeckModal: TranslateAppAddDeckModal
  cards: TranslateAppCards
  check: TranslateAppCheck
  decks: TranslateAppDecks
  deleteCardModal: TranslateAppDeleteCardModal
  deleteDeckModal: TranslateAppDeleteDeckModal
  editCardModal: TranslateAppEditCardModal
  editDeckModal: TranslateAppEditDeckModal
  greeting: TranslateAppGreeting
  learn: TranslateAppLearn
  login: TranslateAppLogin
  newPassword: TranslateAppNewPassword
  notFound: TranslateAppNotFound
  profile: TranslateAppProfile
  recovery: TranslateAppRecovery
  register: TranslateAppRegister
  rules: TranslateAppRules
  validate: TranslateAppValidate
}
