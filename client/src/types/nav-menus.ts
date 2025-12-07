export interface MenuItem {
  title: string;
  url?: string;
  icon?: ReactNode;
  action?: () => void;
  submenu?: MenuItem[];

}

export interface SingleLevelDropdownMenuProps {
  buttonLabel: string;
  items: MenuItem[];
}