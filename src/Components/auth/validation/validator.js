// /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
// (?=.*[0-9]) - строка содержит хотя бы одно число;
// (?=.*[!@#$%^&*]) - строка содержит хотя бы один спецсимвол;
// (?=.*[a-z]) - строка содержит хотя бы одну латинскую букву в нижнем регистре;
// (?=.*[A-Z]) - строка содержит хотя бы одну латинскую букву в верхнем регистре;
// [0-9a-zA-Z!@#$%^&*]{6,} - строка состоит не менее, чем из 6 вышеупомянутых символов.

import * as yup from "yup";

let schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("insert correct password"),
  password: yup
    .string()
    .required()
    .min(6, "minimum 6 characters")
    .max(12, "maximum 12 characters")
  // .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/, "passwordMatches")
});

export default schema;
