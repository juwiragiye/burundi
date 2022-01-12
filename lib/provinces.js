"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvince = exports.getAllProvinces = void 0;
const data_1 = require("./data");
/* @ts-ignore */
const getAllProvinces = () => {
    return [...data_1.allProvinces];
};
exports.getAllProvinces = getAllProvinces;
/* @ts-ignore */
const getProvince = (options) => {
    if (!options) {
        throw new Error("Must provide an identifier for a province.");
    }
    const province = data_1.allProvinces.find((p) => p.name === options.name ||
        p.code === options.code ||
        p.coordinates === options.coordinates);
    if (!province) {
        throw new Error("Did not find any province of Burundi with the provided arguments.");
    }
    return province;
};
exports.getProvince = getProvince;
