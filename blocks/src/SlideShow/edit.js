import {
  BlockControls,
  InnerBlocks,
  useBlockProps,
} from "@wordpress/block-editor";

import { ToolbarButton, ToolbarGroup } from "@wordpress/components";

import "./edit.scss";

export default function Edit({ attributes, setAttributes }) {
  const { align } = attributes;
  const blockProps = useBlockProps({
    className: align ? `uabt-align-${align}` : "",
  });

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon="align-wide"
            label="Wide"
            isPressed={align === "wide"}
            onClick={() => setAttributes({ align: "wide" })}
          />

          <ToolbarButton
            icon="align-full-width"
            label="Full"
            isPressed={align === "full"}
            onClick={() => setAttributes({ align: "full" })}
          />
        </ToolbarGroup>
      </BlockControls>

      <div {...blockProps}>
        <div
          style={{
            padding: "35px",
            backgroundColor: "#333",
          }}
          className=""
        >
          <p style={{ textAlign: "center", fontSize: "20px", color: "#fff" }}>
            Slideshow
          </p>
          {/* No slide show on backend slides will be stack  */}
          <InnerBlocks allowedBlocks={["ua-blocks/slide-item"]} />
        </div>
      </div>
    </>
  );
}

// allowedBlocks={["ua-blocks/slide-item"]}
