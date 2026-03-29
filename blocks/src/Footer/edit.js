import { useBlockProps } from "@wordpress/block-editor";
import "./edit.scss";

export default function Edit() {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <div className="events-and-blogs">
        <h2>Footer placehoder</h2>
      </div>
    </div>
  );
}
