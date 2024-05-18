'use client'

import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {

  const router = useRouter();

  if(!isLoggedIn()){
    return  router.push('/login')
  }

  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
    