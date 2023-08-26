import CardGrid from "@/components/notebooks/CardGrid";
import { NOTEBOOKS } from "@/data/pluto-notebooks";

export default function OurWork() {
  return (
    <div>
      <CardGrid notebooks={NOTEBOOKS} />
    </div>
  );
}
