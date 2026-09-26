import { listAssets, listProjects } from "@/lib/store";
import DashboardClient from "@/components/DashboardClient";
export default async function DashboardPage() {
  const [assets, projects] = await Promise.all([listAssets(), listProjects()]);
  return <DashboardClient initialAssets={assets} initialProjects={projects} />;
}