import {
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import {
  ColorPalette,
  PanelBody,
  SelectControl,
  ToolbarButton,
  ToolbarGroup,
} from "@wordpress/components";
import "./edit.scss";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { textAlign, text, color, fontSize, fontWeight } = attributes;

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={fontSize === "small"}
            onClick={() => {
              setAttributes({
                fontSize: "small",
              });
            }}
          >
            Small
          </ToolbarButton>
          <ToolbarButton
            isPressed={fontSize === "medium"}
            onClick={() => {
              setAttributes({
                fontSize: "medium",
              });
            }}
          >
            Medium
          </ToolbarButton>
          <ToolbarButton
            isPressed={fontSize === "large"}
            onClick={() => {
              setAttributes({
                fontSize: "large",
              });
            }}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={fontSize === "extra-large"}
            onClick={() => {
              setAttributes({
                fontSize: "extra-large",
              });
            }}
          >
            Extra Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={fontSize === "x-extra-large"}
            onClick={() => {
              setAttributes({
                fontSize: "x-extra-large",
              });
            }}
          >
            X Extra Large
          </ToolbarButton>
        </ToolbarGroup>
        <AlignmentToolbar
          value={textAlign}
          onChange={(value) => {
            setAttributes({
              textAlign: value,
            });
          }}
        />
      </BlockControls>
      <InspectorControls>
        <PanelBody>
          <p>Text Color</p>
          <ColorPalette
            value={color}
            onChange={(newColor) => {
              setAttributes({
                color: newColor,
              });
            }}
          />

          <SelectControl
            label="Font Size"
            value={fontSize}
            options={[
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
              { label: "X Large", value: "extra-large" },
              { label: "XX Large", value: "x-extra-large" },
            ]}
            onChange={(newValue) => {
              setAttributes({
                fontSize: newValue,
              });
            }}
          />
          <p>Font Weight</p>
          <SelectControl
            value={fontWeight}
            options={[
              { label: "Regular", value: "400" },
              { label: "Bold", value: "700" },
              { label: "Extra Bold", value: "900" },
            ]}
            onChange={(newValue) => {
              setAttributes({
                fontWeight: newValue,
              });
            }}
          />
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <RichText
          tagName="h1"
          value={text}
          onChange={(value) => {
            setAttributes({ text: value });
          }}
          className={`uatb-generic-heading uatb-generic-heading-${fontSize}`}
          style={{
            color: color,
            textAlign: textAlign,
            fontWeight: fontWeight,
          }}
          allowedFormats={["core/bold", "core/italic"]}
          placeholder="Heading text..."
        />
      </div>
    </>
  );
}
