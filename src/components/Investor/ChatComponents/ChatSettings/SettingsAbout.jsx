import React from "react";
import IconInfoCircle from "../../SvgIcons/IconInfoCircle";

export default function SettingsAbout() {
  return (
    <div className="settings_about d-flex flex-column gap-1 py-3 border-bottom">
      <div className="d-flex gap-1">
        <IconInfoCircle />
        <p
          style={{
            color: "rgba(128, 128, 128, 1)",
            fontSize: "12px",
            fontWeight: "500",
          }}
          className="m-0"
        >
          ABOUT
        </p>
      </div>

      <p className="m-0" style={{ fontWeight: "400", fontSize: "16px" }}>
        I’m a UI/UX designer and i love the design and also create a good design
        .{" "}
      </p>
    </div>
  );
}
