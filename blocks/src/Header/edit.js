//"$schema": "https://schemas.wp.org/trunk/block.json",

import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <div className="header_placehoder">
          <h1>University header placeholder</h1>
        </div>
      </div>
    </>
  );
}
