const regex = {
  mail: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  phone:
    /(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b/,
  url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
  range_1_5: /^[1-5]$/,
};
type regexTypes = "mail" | "password" | "phone" | "url" | "date" | "range_1_5";

export const useFormValidation = () => {
  const matchesRegex = (value: string, type: regexTypes): boolean => {
    return regex[type].test(value);
  };
  return {
    matchesRegex,
  };
};
