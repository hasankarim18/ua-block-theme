import apiFetch from "@wordpress/api-fetch";
import {
  BlockControls,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import "./edit.scss";

import {
  Button,
  PanelBody,
  PanelRow,
  ToolbarButton,
  ToolbarGroup,
} from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
  const { align, backgroundImageUrl, imageId } = attributes;
  const blockProps = useBlockProps({
    className: align ? `align${align}` : "",
  });

  useEffect(
    function () {
      async function fetchImage() {
        const response = await apiFetch({
          path: `/wp/v2/media/${imageId}`,
          method: "GET",
        });
        setAttributes({
          backgroundImageUrl:
            response.media_details.sizes.pageBanner.source_url,
        });
      }
      if (imageId) {
        fetchImage();
      }
      // console.log(backgroundImageUrl);
    },
    [imageId],
  );

  function onFileSelect(file) {
    setAttributes({ imageId: file.id });
  }

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
        <InspectorControls>
          <PanelBody title="Background Image" initialOpen={true}>
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onFileSelect}
                  value={imageId}
                  render={({ open }) => {
                    return (
                      <Button onClick={open}>
                        {imageId ? "Change Image" : "Choose Image"}
                      </Button>
                    );
                  }}
                />
              </MediaUploadCheck>
            </PanelRow>
          </PanelBody>
        </InspectorControls>
      </BlockControls>
      <div {...blockProps}>
        <div class="page-banner">
          <div
            className="page-banner__bg-image"
            style={{
              backgroundImage: `url("${backgroundImageUrl}")`,
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
