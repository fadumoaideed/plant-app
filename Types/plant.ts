enum Watering {
  daily = 'DAILY',
  weekly = 'WEEKLY',
  biweekly = 'BIWEEKLY',
  monthly = 'MONTHLY',
  fortnightly = 'FORTNIGHTLY',
}
enum LightLevel {
  direct = 'DIRECT',
  shade = 'SHADE',
  partial = 'PARTIAL',
}

enum Drainage {
  high = 'HIGH',
  low = 'LOW',
}

interface Plant {
  name: string;
  scientificName: string;
  watering: Watering;
  lastWaterered: string;
  image: string;
  lighting: LightLevel;
  maxheight: string;
  soilType: Drainage;
  tags: Array<string>;
}
