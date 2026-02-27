export interface MenuItem {
  title: string;
  url?: string;
  icon?: React.ReactNode;
  action?: () => void;
  submenu?: MenuItem[];
}

export interface singleLevelDropdownMenuProps {
  buttonLabel: string;
  menuItems: MenuItem[];
}

