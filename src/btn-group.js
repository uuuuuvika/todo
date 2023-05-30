import { useState } from "react";

export default function BtnGroup() {
  const [themeBtn, setThemeBtn] = useState([
    { iconCode: "x", theme: "greyWorm" },
    { iconCode: "å", theme: "blueSilence" },
    { iconCode: "ł", theme: "winterSaddness" },
    { iconCode: "ø", theme: "soapyMarryJane" },
    { iconCode: "ę", theme: "walkIntoHorizon" },
  ]);

  const changeTheme = (selectedTheme) => {
    document.body.className = selectedTheme;
  };

  return (
    <div className="btn-group">
      {themeBtn &&
        themeBtn.map((el, i) => (
          <button key={i} className="btn" onClick={() => changeTheme(el.theme)}>
            <span>{el.iconCode}</span>
          </button>
        ))}
    </div>
  );
}
