import { IOption } from "@/library/Input";

function formatEnumLabel(label: string) {
  return label.replace(/([A-Z])/g, " $1").trim();
}

function getEnumArray<Type extends { [key: string]: string }>(
  enumObject: Type
) {
  const array: { id: string; label: string }[] = [];

  const keys = Object.keys(enumObject);
  const values = Object.values(enumObject);

  keys.forEach((key, index) => {
    array.push({
      id: key,
      label: formatEnumLabel(values[index]),
    });
  });

  return array;
}

function getEnumOptions<Type extends { [key: string]: string }>(
  enumObject: Type
) {
  const options: IOption[] = [];

  const enumArray = getEnumArray(enumObject);

  enumArray.forEach((item) => {
    options.push({
      value: item.id,
      label: item.label,
    });
  });

  return options;
}

export default {
  formatLabel: formatEnumLabel,
  toArray: getEnumArray,
  toOptions: getEnumOptions,
};
