//"$schema": "https://schemas.wp.org/trunk/block.json",

import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        <h1>Header</h1>
      </div>
    </>
  );
}
