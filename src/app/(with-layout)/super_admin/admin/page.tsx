import ActionBar from "@/app/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
  return (
    <div>
      <ActionBar title="Manage Admin lists">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdminPage;
