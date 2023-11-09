import Image from "next/image";
import StandardTemplate from "@/components/templates/StandardTemplate";
import Sidebar from "@/components/organisms/Sidebar";

export default function Page() {
  return (
    <StandardTemplate>
      <Sidebar />
    </StandardTemplate>
  );
}
