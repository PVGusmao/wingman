import React, { SVGProps, useState, useMemo, useCallback, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
  ChipProps,
} from "@nextui-org/react";
import api from "@/services/api";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type UserType = {
  id: number;
  name: string;
  date: string;
  hour: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
  avatar: string;
  description: string;
};

export const columns = [
  { name: "Product", uid: "name" },
  { name: "Date", uid: "date" },
  { name: "Time Spent", uid: "timeSpent" },
  { name: "Order Value", uid: "orderValue" },
  { name: "Commission", uid: "commission" },
  { name: "Chat", uid: "chat" },
];

export default function TableComponent() {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [tableData, setTableData] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleData = useCallback(() => {
    setLoading(true);
    api
      .get("/tableData")
      .then((res) => setTableData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    handleData();
  }, [handleData]);

  const sortedUsers = useMemo(() => {
    if (!sortConfig) return loading ? [] : tableData;
    const sorted = [...(loading ? [] : tableData)];
    sorted.sort((a: UserType, b: UserType): number => {
      const aVal = a[sortConfig.key as keyof UserType];
      const bVal = b[sortConfig.key as keyof UserType];

      // Comparação para valores monetários
      if (sortConfig.key === "orderValue" || sortConfig.key === "commission") {
        const aNum = parseFloat((aVal as string).replace('$', ''));
        const bNum = parseFloat((bVal as string).replace('$', ''));
        return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum;
      }

      // Comparação para strings
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      }

      // Comparação para números
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });
    return sorted;
  }, [tableData, sortConfig]);

  const handleSort = (columnKey: string) => {
    setSortConfig((prev) => {
      if (prev && prev.key === columnKey) {
        return {
          key: columnKey,
          direction: prev.direction === 'asc' ? 'desc' : 'asc'
        };
      } else {
        return { key: columnKey, direction: 'asc' };
      }
    });
  };

  const renderCell = useCallback((user: UserType, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof UserType];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.description}
            name={user.name}
          >
            {user.description}
          </User>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className="font-bold text-sm capitalize">{user.date}</p>
            <p className="font-bold text-sm capitalize text-default-400">{user.hour}</p>
          </div>
        );
      case "timeSpent":
        return (
          <p className="capitalize">
            {cellValue}
          </p>
        );
      case "chat":
        return (
          <a
            href="#"
            className="text-[12px] text-[#8A94A6] font-[400]"
            onClick={() => console.log(`Viewing chat for ${user.name}`)}
          >
            View Chat
          </a>
        );
      case "orderValue":
      case "commission":
        return (
          <p className="capitalize">
            {cellValue}
          </p>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table className="px-[20px] mb-[50px]" aria-label="Example table with sorting" isSortable>
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "chat" ? "center" : "start"}
            allowsSorting
            onClick={() => handleSort(column.uid)}
            className="cursor-pointer"
          >
            {column.name}
            {sortConfig?.key === column.uid && (
              <span style={{ marginLeft: 8 }}>
                {sortConfig.direction === 'asc' ? '↑' : '↓'}
              </span>
            )}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={sortedUsers}>
        {(item: UserType) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
