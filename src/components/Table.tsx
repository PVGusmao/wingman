import React, {SVGProps, useState, useMemo, useCallback} from "react";
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

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type UserType = {
  [key: string]: string | number;
  id: number;
  name: string;
  date: string;
  hour: string;
  timeSpent: string;
  orderValue: string;
  comission: string;
  avatar: string;
  description: string;
}

export const columns = [
  {name: "Product", uid: "name"},
  {name: "Date", uid: "date"},
  {name: "Time Spent", uid: "timeSpent"},
  {name: "Order Value", uid: "orderValue"},
  {name: "Comission", uid: "comission"},
  {name: "Chat", uid: "chat"},
];

export const users = [
  {
    id: 1,
    name: "Product A",
    date: "24 Apr ´2024",
    hour: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    comission: "$55",
    avatar: "https://down-br.img.susercontent.com/file/sg-11134201-22100-03hkywfvsaiv64",
    description: "Product description A",
  },
  {
    id: 2,
    name: "Product B",
    date: "23 Apr ´2024",
    hour: "09:20 AM",
    timeSpent: "3h 10m",
    orderValue: "$80.00",
    comission: "$40",
    avatar: "https://down-br.img.susercontent.com/file/sg-11134201-22100-03hkywfvsaiv64",
    description: "Product description B",
  },
  {
    id: 3,
    name: "Product C",
    date: "25 Apr ´2024",
    hour: "11:00 AM",
    timeSpent: "1h 30m",
    orderValue: "$200.00",
    comission: "$100",
    avatar: "https://down-br.img.susercontent.com/file/sg-11134201-22100-03hkywfvsaiv64",
    description: "Product description C",
  },
  {
    id: 4,
    name: "Product D",
    date: "20 Apr ´2024",
    hour: "08:24 AM",
    timeSpent: "4h 20m",
    orderValue: "$50.21",
    comission: "$25",
    avatar: "https://down-br.img.susercontent.com/file/sg-11134201-22100-03hkywfvsaiv64",
    description: "Product description D",
  },
  {
    id: 5,
    name: "Product E",
    date: "24 Apr ´2024",
    hour: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    comission: "$55",
    avatar: "https://down-br.img.susercontent.com/file/sg-11134201-22100-03hkywfvsaiv64",
    description: "Product description E",
  },
];

export const EyeIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const DeleteIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const EditIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function TableComponent() {
  const [sortConfig, setSortConfig] = useState<{key: string; direction: 'asc' | 'desc'} | null>(null);

  const sortedUsers = useMemo(() => {
    if (!sortConfig) return users;
    const sorted = [...users];
    sorted.sort((a: UserType, b: UserType): number => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
  
      if (typeof aVal === 'string' && typeof bVal === 'string' && aVal.includes('$')) {
        // Exemplo: remover símbolo de dólar e converter para número
        const aNum = parseFloat(aVal.replace('$', ''));
        const bNum = parseFloat(bVal.replace('$', ''));
        return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum;
      }
      if (typeof aVal === 'string') {
        // Tentar converter data/hora ou comparar strings
        // Exemplo simplificado: comparação lexicográfica
        if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      }
      // Caso genérico para números
      return sortConfig.direction === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
    });
    return sorted;
  }, [sortConfig]);

  const handleSort = (columnKey: string) => {
    setSortConfig((prev) => {
      if (prev && prev.key === columnKey) {
        // Toggle direction
        return {
          key: columnKey,
          direction: prev.direction === 'asc' ? 'desc' : 'asc'
        };
      } else {
        return {key: columnKey, direction: 'asc'};
      }
    });
  };

  const renderCell = useCallback((user: UserType, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof UserType];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.description}
            name={cellValue}
          >
            {user.description}
          </User>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.hour}</p>
          </div>
        );
      case "timeSpent":
        return (
          <p className="capitalize" color={statusColorMap[user.timeSpent]} variant="flat">
            {cellValue}
          </p>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      case "chat":
        return (
          <a
            href="#"
            className="text-[12px] text-[#8A94A6] font-[400]"
            onClick={() => console.log(`Viewing chat for ${user.name}`)}
          >
            <p>View Chat</p>
          </a>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table className="px-[20px] mb-[50px]" aria-label="Example table with sorting">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
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
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
