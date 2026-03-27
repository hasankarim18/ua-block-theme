import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import "./edit.scss";

export default function Edit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <div
          className="page-banner__bg-image"
          style={{
            backgroundImage:
              "url('/wp-content/themes/ua-block-theme/images/library-hero.jpg')",
          }}
        ></div>
        <div className="page-banner__content container t-center c-white">
          <InnerBlocks
            allowedBlocks={["core/paragraph", "core/heading", "core/list"]}
          />
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
