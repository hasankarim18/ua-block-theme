import {
  BlockControls,
  getColorObjectByColorValue,
  InspectorControls,
  __experimentalLinkControl as LinkControl,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  Button,
  ColorPalette,
  PanelBody,
  Popover,
  ToolbarButton,
  ToolbarGroup,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { link } from "@wordpress/icons";
import ourColors from "../../../inc/ourColors";
import "./edit.scss";

export default function Edit({ attributes, setAttributes }) {
  //    console.log(attributes);
  const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false);
  const {
    text,
    linkObject,
    target,
    size,
    textColor,
    backgroundColor,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    borderRadius,
  } = attributes;
  const blockProps = useBlockProps();

  function buttonHandler() {
    setIsLinkPickerVisible((prev) => {
      return !prev;
    });
  }

  function handleLinkPickerChange(newLinkObject) {
    setAttributes({ linkObject: newLinkObject });
  }

  /*
  const ourColors = [
    { name: "blue", color: "#0deb66" },
    { name: "orange", color: "#ee964b" },
    { name: "dark_orange", color: "#f95738" },
  ];
  */
  const currentColoerValue = ourColors.filter((color) => {
    return color.name === backgroundColor;
  })[0];
  // console.log(currentColoerValue.color);

  function handleColorChange(colorCode) {
    // from the hex value that the color pallette give us , we need to find it's color name
    console.log(colorCode);
    const { name } = getColorObjectByColorValue(ourColors, colorCode);
    setAttributes({
      backgroundColor: name,
    });
  }

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton label="link" icon={link} onClick={buttonHandler} />
        </ToolbarGroup>
      </BlockControls>
      <div {...blockProps}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InspectorControls>
            <PanelBody title="Background Color" initialOpen={true}>
              <ColorPalette
                disableCustomColors={true}
                clearable={false}
                colors={ourColors}
                value={currentColoerValue ? currentColoerValue.color : ""}
                onChange={(e) => {
                  handleColorChange(e);
                }}
              />
            </PanelBody>
            <PanelBody title="Button Size" initialOpen={true}>
              <ToolbarGroup>
                <ToolbarButton
                  isPressed={size === "small"}
                  onClick={() => {
                    setAttributes({
                      size: "small",
                    });
                  }}
                >
                  Small
                </ToolbarButton>
                <ToolbarButton
                  isPressed={size === "medium"}
                  onClick={() => {
                    setAttributes({
                      size: "medium",
                    });
                  }}
                >
                  Medium
                </ToolbarButton>
                <ToolbarButton
                  isPressed={size === "large"}
                  onClick={() => {
                    setAttributes({
                      size: "large",
                    });
                  }}
                >
                  Large
                </ToolbarButton>
              </ToolbarGroup>
            </PanelBody>
          </InspectorControls>

          <RichText
            allowedFormats={["core/bold", "core/italic"]}
            className={`uabt-btn btn-${size} uatb-btn--${backgroundColor}`}
            placeholder="Button text..."
            tagName="a"
            value={text}
            onChange={(newValue) => {
              setAttributes({ text: newValue });
            }}
            href={linkObject.url}
            target={target}
            style={{
              color: textColor,
              borderRadius: borderRadius,
            }}
          />
          {isLinkPickerVisible && (
            <Popover
              onFocusOutside={() => setIsLinkPickerVisible(false)}
              position="middle center"
            >
              {" "}
              <LinkControl
                settings={[]}
                value={linkObject}
                onChange={handleLinkPickerChange}
              />{" "}
              <Button
                style={{ display: "block", width: "100%" }}
                variant="primary"
                onClick={() => {
                  setIsLinkPickerVisible(false);
                }}
              >
                Confirm Link
              </Button>
            </Popover>
          )}
        </div>
      </div>
    </>
  );
}
