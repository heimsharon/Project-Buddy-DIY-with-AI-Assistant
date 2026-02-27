export type Dimensions = {
  length: number;
  width: number;
  height?: number;
  unit: UnitTypes;
};

export enum UnitTypes {
  inches = 'in',
  feet = 'ft',

  centimeter = 'cm',
  meter = 'm',

  yard = 'yd',

  pound = 'lb',
  kilogram = 'kg',
}

export interface UnitCoverage {
  length_ft?: number;
  width_ft?: number;
  height_ft?: number;
  depth_ft?: number;
  area_ft2?: number;
  volume_ft3?: number;

  length_in?: number;
  width_in?: number;
  height_in?: number;
  depth_in?: number;
  area_in2?: number;
  volume_in3?: number;

  length_m?: number;
  width_m?: number;
  height_m?: number;
  depth_m?: number;
  area_m2?: number;
  volume_m3?: number;

  length_cm?: number;
  width_cm?: number;
  height_cm?: number;
  depth_cm?: number;
  area_cm2?: number;
  volume_cm3?: number;

  length_yd?: number;
  width_yd?: number;
  height_yd?: number;
  depth_yd?: number;
  area_yd2?: number;
  volume_yd3?: number;

  weight_lb?: number;
  weight_kg?: number;
}
