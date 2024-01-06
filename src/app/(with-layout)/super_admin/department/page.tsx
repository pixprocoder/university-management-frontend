import ActionBar from "@/app/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  return (
    <div>
      <ActionBar title="Manage Department">
        <Link href="/super_admin/department/create">
          <Button type="primary">Create Department</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default DepartmentPage;
