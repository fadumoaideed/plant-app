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
  id?: string | undefined;
  name: string | undefined;
  scientificName: string | undefined;
  watering: Watering | undefined;
  lastWaterered?: Date | undefined;
  image: string;
  sunlight?: LightLevel | undefined;
  maxheight?: string | undefined;
  soilDrainage: Drainage | undefined;
  tags?: Record<string, string> | undefined;
}
