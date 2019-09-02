export enum TabbingOrderTypes {
  FORM_FIELD = 'formField',
  LINK = 'link',
  BUTTON = 'button',
}

export const tabbingOrderConfig = {
  login: [
    { value: 'userId', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'password', type: TabbingOrderTypes.FORM_FIELD },
    { value: 'Forgot password?', type: TabbingOrderTypes.LINK },
    { value: 'Sign In', type: TabbingOrderTypes.BUTTON },
    { value: 'Register', type: TabbingOrderTypes.BUTTON },
  ],
  footer: [
    { value: 'About SAP Commerce Cloud', type: TabbingOrderTypes.LINK },
    { value: 'Frequently Asked Questions', type: TabbingOrderTypes.LINK },
    { value: 'Visit SAP', type: TabbingOrderTypes.LINK },
    { value: 'Contact Us', type: TabbingOrderTypes.LINK },
    { value: 'Agile Commerce Blog', type: TabbingOrderTypes.LINK },
    { value: 'Linked In', type: TabbingOrderTypes.LINK },
    { value: 'Facebook', type: TabbingOrderTypes.LINK },
    { value: 'Twitter', type: TabbingOrderTypes.LINK },
  ],
};
