import apiFetch from "@wordpress/api-fetch";
import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
  useBlockProps,
} from "@wordpress/block-editor";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import { useEffect } from "@wordpress/element";

export default function Edit(props) {
  const blockProps = useBlockProps();

  useEffect(function () {
    if (props.attributes.themeimage) {
      props.setAttributes({
        imgURL: `${ourThemeData.themePath}/images/${props.attributes.themeimage}`,
      });
    }
    if (!props.attributes.themeimage && !props.attributes.imgURL) {
      props.setAttributes({
        imgURL: `${ourThemeData.themePath}/images/bus.jpg`,
      });
    }
  }, []);

  useEffect(
    function () {
      if (props.attributes.imgID) {
        async function go() {
          const response = await apiFetch({
            path: `/wp/v2/media/${props.attributes.imgID}`,
            method: "GET",
          });
          props.setAttributes({
            themeimage: "",
            imgURL: response.media_details.sizes.pageBanner.source_url,
          });
        }
        go();
      }
    },
    [props.attributes.imgID],
  );

  function onFileSelect(x) {
    props.setAttributes({ imgID: x.id });
  }

  return (
    <>
      <InspectorControls>
        <PanelBody title="Background" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={props.attributes.imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>;
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div
          className="hero-slider__slide"
          style={{ backgroundImage: `url('${props.attributes.imgURL}')` }}
        >
          <div className="hero-slider__interior container">
            <div className="hero-slider__overlay t-center">
              <InnerBlocks
                allowedBlocks={[
                  "ua-blocks/generic-heading",
                  "core/heading",
                  "ua-blocks/custom-button",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
