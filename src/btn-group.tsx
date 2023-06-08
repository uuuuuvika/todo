import React, { useState } from "react";

interface ThemeButton {
  iconCode: string;
  theme: string;
}

export default function BtnGroup(): JSX.Element {
  const [themeBtn, setThemeBtn] = useState<ThemeButton[]>([
    { iconCode: "x", theme: "greyWorm" },
    { iconCode: "å", theme: "blueSilence" },
    { iconCode: "ł", theme: "winterSaddness" },
    { iconCode: "ø", theme: "soapyMarryJane" },
    { iconCode: "ę", theme: "walkIntoHorizon" },
  ]);

  const changeTheme = (selectedTheme: string): void => {
    document.body.className = selectedTheme;
  };

  return (
    <div className="btn-group">
      {themeBtn &&
        themeBtn.map((el: ThemeButton, i: number) => (
          <button key={i} className="btn" onClick={() => changeTheme(el.theme)}>
            <span>{el.iconCode}</span>
          </button>
        ))}
    </div>
  );
}

