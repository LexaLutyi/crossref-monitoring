import Image from "next/image";
import { CheckTable } from "@/components/component/check-table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <h2 className="text-2xl font-bold mb-4">April 2023 Public Data File from Crossref</h2>
      <CheckTable></CheckTable>
    </main>
  );
}
