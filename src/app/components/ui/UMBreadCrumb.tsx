import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

//TODO: Do the items type later
const UMBreadCrumb = ({ items }: any) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined />
        </Link>
      ),
    },

    ...items.map((item: any) => {
      return {
        title: item.link ? (
          <Link href={item.link}> {item.label}</Link>
        ) : (
          <span>{item.link}</span>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadCrumbItems} />;
};

export default UMBreadCrumb;
