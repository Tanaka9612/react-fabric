import React, { useState, useEffect } from "react";
import { Input } from "blocksin-system";
import { SketchPicker } from "react-color"; // Importing color picker

function Settings({ canvas }) {
  const [selectedObject, setSelectedObject] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [color, setColor] = useState("#000000"); // Default color to black

  useEffect(() => {
    if (canvas) {
      canvas.on("selection:created", (event) => {
        handleObjectSelection(event.selected[0]);
      });
      canvas.on("selection:updated", (event) => {
        handleObjectSelection(event.selected[0]);
      });
      canvas.on("selection:cleared", () => {
        setSelectedObject(null);
        clearSettings();
      });
      canvas.on("object:modified", (event) => {
        handleObjectSelection(event.target);
      });
      canvas.on("object:scaling", (event) => {
        handleObjectSelection(event.target);
      });
    }
  }, [canvas]);

  const handleObjectSelection = (object) => {
    if (!object) return;

    setSelectedObject(object);

    if (object.type === "rect") {
      setWidth(Math.round(object.width * object.scaleX));
      setHeight(Math.round(object.height * object.scaleY));
      setColor(object.fill);
      setDiameter("");
    } else if (object.type === "circle") {
      setDiameter(Math.round(object.diameter * 2 * object.scaleX));
      setColor(object.fill);
      setHeight("");
      setWidth("");
    }
  };

  const clearSettings = () => {
    setHeight("");
    setWidth("");
    setDiameter("");
    setColor("#000000"); // Reset color to black
  };

  // Real-time change handling for height (for rectangles)
  const handleHeightChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const initValue = parseInt(value, 10);

    setHeight(initValue);
    if (selectedObject && selectedObject.type === "rect" && initValue >= 0) {
      selectedObject.set({ height: initValue / selectedObject.scaleY });
      canvas.renderAll();
    }
  };

  // Real-time change handling for diameter (for circles)
  const handleDiameterChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const initValue = parseInt(value, 10);

    setDiameter(initValue);
    if (selectedObject && selectedObject.type === "circle" && initValue >= 0) {
      selectedObject.set({ radius: initValue / 2 / selectedObject.scaleX });
      canvas.renderAll();
    }
  };

  // Real-time color change handler
  const handleColorChange = (color) => {
    setColor(color.hex); // Color picker returns the color in hex format

    if (selectedObject) {
      selectedObject.set({ fill: color.hex });
      canvas.renderAll();
    }
  };

  // Real-time change handling for width (for rectangles)
  const handleWidthChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const initValue = parseInt(value, 10);

    setWidth(initValue);
    if (selectedObject && selectedObject.type === "rect" && initValue >= 0) {
      selectedObject.set({ width: initValue / selectedObject.scaleX});
      canvas.renderAll();
    }
  };

  return (
    <div className="Settings darkmode">
      {selectedObject && selectedObject.type === "rect" && (
        <>
          <Input
            fluid
            label="Width"
            value={width}
            onChange={handleWidthChange}
          />
          <Input
            fluid
            label="Height"
            value={height}
            onChange={handleHeightChange}
          />
        </>
      )}
      {selectedObject && selectedObject.type === "circle" && (
        <>
          <Input
            fluid
            label="Diameter"
            value={diameter}
            onChange={handleDiameterChange}
          />
        </>
      )}

      {/* Color picker for changing the object color */}
      {selectedObject && (
        <div>
          <label>Color</label>
          <SketchPicker
            color={color} // Controlled color state
            onChange={handleColorChange} // Updates color in real-time
          />
        </div>
      )}
    </div>
  );
}

export default Settings;
