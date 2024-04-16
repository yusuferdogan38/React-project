import { Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";

const UserPage = () => {
  const [dataSource, setdataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },
  ];
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/users`);
      if (response.ok) {
        const data = await response.json();
        setdataSource(data);
      } else {
        message.error("işlem başarısız");
      }
    } catch (error) {
      console.log({ error: "kullanıcı hatası" });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default UserPage;
