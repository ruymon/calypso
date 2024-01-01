import { Map } from "@/components/map";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function MapPage() {
  return (
    // <main className="flex-1 flex relative">
    //   <Sidebar />
    //   <section className="relative flex-1">
    //     {/* <Navbar /> */}
    //     <Map />
    //   </section>
    // </main>

    <main className="flex-1 relative">
      <Sidebar />
      <Navbar />
      <Map />
    </main>

  )
}
