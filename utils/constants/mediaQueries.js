import {
  smartPhoneScreenWidthMin,
  smartPhoneScreenWidthMax,
  laptopScreenWidthMin
} from "./styles";

const mediaQuery = {
  smartPhoneOnly: `@media (min-width: ${smartPhoneScreenWidthMin}em) and (max-width: ${smartPhoneScreenWidthMax}em)`,
  smartPhoneAndLarger: `@media (min-width: ${smartPhoneScreenWidthMin}em)`,
  laptopAndLarger: `@media (min-width: ${laptopScreenWidthMin}em)`
};

export default mediaQuery;
