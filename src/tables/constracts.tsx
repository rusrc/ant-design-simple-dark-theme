import { Space, Table, TableProps, Tag, Typography } from "antd";
const { Text, Link } = Typography;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "#2c96c7" : "#6eaf52";
          if (tag === "loser") {
            color = "#c42a9d";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Link href={"#"}>Invite {record.name}</Link>
        <Link href={"#"}>Delete</Link>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "5",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "8",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "9",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "10",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "11",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "12",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "13",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "14",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const ContractsTable: React.FC = () => (
  <Table columns={columns} dataSource={data} />
);

export default ContractsTable;
