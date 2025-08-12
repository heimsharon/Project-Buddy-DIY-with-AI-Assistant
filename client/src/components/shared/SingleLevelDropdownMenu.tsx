import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, singleLevelDropdownMenuProps } from '../../types/menu';

type position = 'left' | 'right' | `down` | `up`;

const renderMenuItems = (
  item: MenuItem,
  open: boolean,
  inx: number,
  closeDropdown: () => void,
  _submenuPosition: position = 'right'

): React.ReactElement => {
  const submenuRef = useRef<HTMLDivElement>(null);
  const [submenuPos, setSubmenuPos] = useState<position>(`right`);

  useEffect(() => {
    if (item.submenu && open && submenuRef.current) {
      const submenu = submenuRef.current;
      const rect = submenu.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      let position: position = `right`;

      if (rect.right > viewportWidth - 20) {
        if (rect.left > 200) {
          position = `left`;
        } else {
          position = `down`;
        }
      }
      if (position === `down` && rect.bottom > viewportHeight - 20) {
        if (rect.top > 200) {
          position = `up`;
        }
      }

      setSubmenuPos(position);
    }
  }, [item.submenu, open]);

  const handleTouchStart = (event: React.TouchEvent) => {
    event.preventDefault();
    if (item.action) item.action();
    closeDropdown();
  };

  return (

    <div className="dropdown-item" key={inx}>
      {item.url ? (
        <Link
          to={item.url}
          role="menuitem"
          tabIndex={open ? 0 : -1}
          onClick={closeDropdown}
          onTouchStart={handleTouchStart}
        >
          {item.icon} {item.title}
        </Link>

      ) : (

        <button
          onClick={() => {
            if (item.action) item.action();
            closeDropdown();
          }}
          onTouchStart={handleTouchStart}
          className="dropdown-button"
          type="button"
          role="menuitem"
          tabIndex={open ? 0 : -1}
        >
          {item.icon} {item.title}
        </button>
      )}

      {item.submenu && (
        <div
          ref={submenuRef}
          className={`dropdown-submenu dropdown-submunu--${submenuPos}`}
          style={{ visibility: open ? 'visible' : 'hidden' }}
        >
          {item.submenu.map((subItem, subInx) =>
            renderMenuItems(subItem, open, subInx, closeDropdown, submenuPos)
          )}
        </div>
      )}
    </div>
  );
};

const SingleLevelDropdownMenu: React.FC<singleLevelDropdownMenuProps> = ({
  buttonLabel,
  menuItems

}) => {
  const [open, setOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<position>(`down`);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);

  // Calculate dropdown position
  const calculatePosition = useCallback(() => {
    if (dropdownRef.current && contentRef.current) {
      const button = dropdownRef.current.querySelector('button');
      const content = contentRef.current;

      if (button) {
        const buttonReact = button.getBoundingClientRect();
        const contentReact = content.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let position: position = `right`;
        // Determine if mobile or desktop
        const isMobile = viewportWidth < 768;
        const margin = isMobile ? 10 : 20;
        const minSpace = isMobile ? 100 : 200;
        const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

        if (buttonReact.right + contentReact.width > viewportWidth - margin) {
          if (buttonReact.left - contentReact.width > margin) {
            position = `left`;
          } else {
            position = `down`;
          }
        }

        if (position === `down` && buttonReact.bottom + contentReact.height > viewportHeight - margin) {
          if (buttonReact.top - contentReact.height > 20) {
            position = 'down'; 'up';
          }
        }
        setDropdownPosition(position);
      }
    }
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(calculatePosition, 0);
    }
  }, [open, calculatePosition]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeDropdown]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
      setOpen(true);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="dropdown-button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={`dropdown-menu=${buttonLabel}`}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-label={buttonLabel}
      >
        {buttonLabel}
      </button>

      <div
        ref={contentRef}
        className={`dropdown-content dropdown-content--${dropdownPosition}`}
        id={`dropdown-menu-${buttonLabel}`}
        role="menu"
        style={{ display: open ? 'block' : 'none' }}
        aria-hidden={!open}
      >
        {menuItems.map((item, inx) =>
          renderMenuItems(item, open, inx, closeDropdown, dropdownPosition)
        )}
      </div>

    </div>
  );
};
export default SingleLevelDropdownMenu;