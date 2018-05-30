export interface Contact {
    name: string,
    email: string,
    phoneNumber: string,
    message: string
}

export interface ContactFocus {
    name: boolean,
    email: boolean,
    phoneNumber: boolean,
    message: boolean
}

export interface ContactLanguage {
    nameLabel: string,
    emailLabel: string,
    phoneNumberLabel: string,
    messageLabel: string,
    buttonLabel: string,
    nameRequiredLabel: string,
    nameMinLenghtLabel: string,
    emailRequiredLabel: string,
    emailInvalidLabel: string,
    phoneNumberRequired: string,
    messageRequiredLabel: string,
    messageMinLenghtLabel: string
}