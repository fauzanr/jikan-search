import Card from "@/components/card";
import {
  cssContainer,
  cssGrid,
  cssPagination,
  cssResultText,
  cssSearch,
} from "@/styles/home";
import { Pagination, Input } from "@geist-ui/core";

export default function Home() {
  return (
    <div className={cssContainer}>
      <div className={cssSearch}>
        <h1>Jikan App</h1>
        <Input
          scale={4 / 3}
          width="100%"
          clearable
          placeholder="Search Anime..."
        />
      </div>

      <h3 className={cssResultText}>All Anime</h3>

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
