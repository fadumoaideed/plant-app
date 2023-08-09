export enum Watering {
  daily = 'DAILY',
  weekly = 'WEEKLY',
  biweekly = 'BIWEEKLY',
  monthly = 'MONTHLY',
  fortnightly = 'FORTNIGHTLY',
}
export enum LightLevel {
  direct = 'DIRECT',
  shade = 'SHADE',
  partial = 'PARTIAL',
}

export enum Drainage {
  high = 'HIGH',
  low = 'LOW',
}

export interface Plant {
  id: number | undefined;
  name?: string;
  scientificName?: string;
  watering?: Watering;
  lastWaterered?: string;
  image?: string;
  sunlight?: LightLevel;
  maxheight?: string;
  soilDrainage?: Drainage;
  tags?: Array<string>;
}
