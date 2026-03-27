import { InnerBlocks } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";
import "./style.scss";

registerBlockType(metadata, {
  edit: Edit,
  save: function () {
    return <InnerBlocks.Content />;
  },
});
