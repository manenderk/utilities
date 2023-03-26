import GetEOL from "./GetEOL";

export const GetObjectFromJsonString = (input) => {
  try {
    const result = JSON.parse(input);
    return result;
  } catch (e) {
    return null;
  }
};

export const GetObjectFromString = (str) => {
  const eol = GetEOL(str);
  let lines = str.split(eol).map((line) => line.trim());

  lines = lines.filter((line) => line !== "{" || line !== "}" || line !== "");
  let computedObject = {};
  lines.forEach((line) => {
    let [key, value] = line.split(":");
    key = key?.trim();
    value = value?.trim();
    computedObject[key] = value;
  });

  if (Object.keys(computedObject).length > 0) {
    return computedObject;
  }
  return null;
};
