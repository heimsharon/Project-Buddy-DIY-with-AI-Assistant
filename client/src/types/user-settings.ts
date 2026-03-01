export type Theme = 'light' | 'dark' | 'system';
export type Language = 'en' | 'es' | 'fr';
export type Currency = 'USD' | 'Euro'; 
export type AutoSaveInterval = 'Off' | '1Min' | '3Mins' | '5Mins'
export type MeasurementUnits = 'Imperial' | 'Metric'
export type DateFormat = 'mm/dd/yyyy' | 'dd/mm/yyyy';
export type TimeFormat = '12hr' | '24hr';
export type TimeZone = 
  'US_Eastern/New_York' 
| 'US_Central/Chicago' 
| 'US_Mountain/Denver'
| 'US_Mountain_NO_DST/Phoenix' 
| 'US_Pacific/LosAngeles'
| 'US_Alaska/Anchorage'
| 'US_Hawaii-Aleutian/Honolulu';

export interface UserSettings {
  theme: Theme;
  language: Language;
  currency: Currency;
  measurementUnits: MeasurementUnits;
  fontSize: number;
  autoSave: boolean;
  autoSaveInterval: AutoSaveInterval;
  dateFormat: DateFormat;
  timeFormat: TimeFormat;
  timeZone: TimeZone;  
}