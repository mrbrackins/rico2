// Action creator
export const sendContactInfo = info => {
  // Return an action
  return {
    type: 'SEND_CONTACT_INFO',
    payload: info
  };
};
