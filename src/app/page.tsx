import { Map } from "@/components/map";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function MapPage() {
  return (
    <main className="flex-1 relative">
      <Sidebar />
      <Navbar />
      <Map />
    </main>
  )
}
