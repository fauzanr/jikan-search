import Card from "@/components/card";
import { cssContainer, cssGrid, cssPagination } from "@/styles/home";
import { Pagination } from "@geist-ui/core";

export default function Home() {
  return (
    <div className={cssContainer}>
      Home
      <div className={cssGrid}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={cssPagination}>
        <Pagination limit={5} page={1} count={10} />
      </div>
    </div>
  );
}
