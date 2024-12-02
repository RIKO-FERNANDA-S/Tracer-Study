import React from 'react'
import { auth } from '../../../../auth';
import { redirect } from 'next/navigation';

async function DashboardUser() {
  const session = await auth();
  if (!session?.user ) {
    redirect("/login");
  }
  return (
    <div>DashboardUser</div>
  )
}

export default DashboardUser