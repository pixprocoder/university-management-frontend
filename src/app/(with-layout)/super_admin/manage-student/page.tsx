import ActionBar from "@/app/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentsPage = () => {
  return (
    <div>
      <ActionBar title="Manage Students">
        <Link href="/super_admin/manage-student/create">
          <Button type="primary">Create Student</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageStudentsPage;
