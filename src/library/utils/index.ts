import { PrismaClient } from "@prisma/client";
import { InputOption } from "../types";
import date from "./date";
import http from "./http";
import response from "./response";

/**
 * Formats
 */

function formatEnumLabel(label: string) {
  if (!label) return "";
  return String(label)
    .replace(/([A-Z])/g, " $1")
    .replace(/([/])/g, " $1")
    .replace(/([_])/g, "")
    .trim();
}

/**
 * Convert To
 */

function convertToEnumArray<Type extends { [key: string]: string }>(
  enumObject: Type
) {
  const array: { id: string; label: string }[] = [];

  const keys = Object.keys(enumObject).filter((key) => isNaN(Number(key)));
  const values = Object.values(enumObject);

  keys.forEach((key, index) => {
    array.push({
      id: key,
      label: formatEnumLabel(values[index]),
    });
  });

  return array;
}

function convertToEnumOptions(enumObject: any) {
  const options: InputOption[] = [];

  const enumArray = convertToEnumArray(enumObject);

  enumArray.forEach((item) => {
    options.push({
      value: item.id,
      label: item.label,
    });
  });

  return options;
}

/**
 * Functions
 */

async function fetcher([url]: [string]) {
  return http.get(`${url}`);
}

const utils = {
  date,
  db: new PrismaClient(),
  format: {
    enumLabel: formatEnumLabel,
  },
  functions: {
    fetcher,
  },
  convertTo: {
    enumArray: convertToEnumArray,
    enumOptions: convertToEnumOptions,
  },
  http,
  response,
};

export default utils;
