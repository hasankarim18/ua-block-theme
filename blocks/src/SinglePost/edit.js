import { useBlockProps } from "@wordpress/block-editor";
import "./edit.scss";

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className="uabt_placeholder_blocks">
        <h2>Single Post placehoder</h2>
      </div>
    </div>
  );
}
