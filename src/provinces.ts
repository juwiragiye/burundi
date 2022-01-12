import { allProvinces } from "./data";

export type Province = {
  name: string;
  code: string;
  coordinates: Array<number>;
};

type Args = {
  name: string;
  code: string | undefined;
  coordinates: Array<number> | undefined;
};

/* @ts-ignore */
export const getAllProvinces: Province[] = () => {
  return [...allProvinces];
};

/* @ts-ignore */
export const getProvince: Province = (options: Args) => {
  if (!options) {
    throw new Error("Must provide an identifier for a province.");
  }

  const province = allProvinces.find(
    (p) =>
      p.name === options.name ||
      p.code === options.code ||
      p.coordinates === options.coordinates
  );
  if (!province) {
    throw new Error(
      "Did not find any province of Burundi with the provided arguments."
    );
  }
  return province;
};
