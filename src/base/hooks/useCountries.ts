import countries from "world-countries";

const countriesList = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  dial_code: country.idd.root + country.idd.suffixes.join(""),
  flag: country.flag,
}));

const countriesNames = countriesList.map((country) => country.label);

export { countriesList, countriesNames };
