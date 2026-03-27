import {
  BlockControls,
  InnerBlocks,
  useBlockProps,
} from "@wordpress/block-editor";
import "./edit.scss";

import { ToolbarButton, ToolbarGroup } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { align } = attributes;
  const blockProps = useBlockProps({
    className: align ? `align${align}` : "",
  });

  return (
    <>
      <BlockControls>
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
      </BlockControls>
      <div {...blockProps}>
        <div class="page-banner">
          <div
            className="page-banner__bg-image"
            style={{
              backgroundImage:
                "url('/wp-content/themes/ua-block-theme/images/library-hero.jpg')",
            }}
          ></div>
          <div className="page-banner__content container t-center c-white">
            <InnerBlocks
              allowedBlocks={[
                "core/heading",
                "ua-blocks/generic-heading",
                "ua-blocks/custom-button",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

/**
 

const userMelater = (
    <>
      
        <h1 className="headline headline--large"> Welcome! </h1>
        <h2 className="headline headline--medium">
          We think you&rsquo;ll like it here.
        </h2>
        <h3 className="headline headline--small">
          Why don&rsquo;t you check out the <strong>major</strong> you&rsquo;re
          interested in?
        </h3>
        <a href="#" className="btn btn--large btn--blue">
          Find Your Majorsss
        </a>
     
    </>
  );
 */
