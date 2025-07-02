import { projectList, Project } from "./data";
import ShopifyClient from "./ShopifyClient";

export default function ShopifyPage() {
  return (
    <ShopifyClient projectList={projectList} />
  );
}
