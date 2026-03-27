## Brad -> 188/189

```
Edit.js
import {
  BlockControls,
  __experimentalLinkControl as LinkControl,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  Button,
  Popover,
  ToolbarButton,
  ToolbarGroup,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { link } from "@wordpress/icons";
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

  console.log(linkObject);

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
          <RichText
            allowedFormats={["core/bold", "core/italic"]}
            className={`ua-btn btn-${size}`}
            placeholder="Button text..."
            tagName="a"
            value={text}
            href={linkObject.url}
            target={target}
            style={{
              color: textColor,
              backgroundColor: backgroundColor,
              padding: `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`,
              borderRadius: borderRadius,
            }}
          />
          {isLinkPickerVisible && (
            <Popover position="middle center">
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

```
