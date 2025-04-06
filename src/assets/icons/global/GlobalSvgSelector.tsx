import React from 'react';


interface GlobalSvgSelectorProps {
  id: string;
}

function GlobalSvgSelector({ id }: GlobalSvgSelectorProps) {
  switch (id) {
    case "header-logo":
      return (
        <img src="/icon/logo.svg" alt="Header Logo"  width="50" height="50" />
      );

    case "change_theme":
      return (
        <img src="/icon/d-n.png" alt="change_theme" width="30" height="30"/>
      );

      case "sun":
      return (
        <img src="/icon/sun.svg" alt="change_theme" width="70" height="70"/>
      );

    default:
      return null; 
  }
}

export default GlobalSvgSelector;