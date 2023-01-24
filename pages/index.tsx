import Card from "@/components/card";
import { cssContainer, cssGrid } from "@/styles/home";

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
    </div>
  );
}
