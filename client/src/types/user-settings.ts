export type Theme = 'light' | 'dark' | 'system';
export type Language = 'en' | 'es' | 'fr';
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
  dateFormat: DateFormat;
  timeFormat: TimeFormat;
  timeZone: TimeZone;
  fontSize: number;
}