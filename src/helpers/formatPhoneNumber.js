export const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        const formattedNumber = '(' + match[1] + ') ' + match[2] + '-' + match[3];
        return formattedNumber;
    }
    return null;
  };
  