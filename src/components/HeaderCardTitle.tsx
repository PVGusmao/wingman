import {Select, SelectItem} from "@nextui-org/select";

const items = [
  {
    key: 1,
    label: "7 dias",
  },
  {
    key: 2,
    label: "30 dias",
  },
  {
    key: 3,
    label: "60 dias",
  },
]

type Props = {
  title: string;
  showSelect: boolean;
}

export default function HeaderCardTitle({title, showSelect}: Props) {

  return (
    <main className="flex items-center justify-between px-[20px] py-[10px]">
      <h1 className="text-[#212636] text-[32px] font-[500]">{title}</h1>

     {showSelect &&
      <Select
        className="w-[96px] h-[36px]"
        classNames={{
          selectorIcon: "text-[#212636]",
        }}
        items={items}
        labelPlacement="outside"
        placeholder="7 dias"
        variant="bordered"
      >
        {(item) => (
          <SelectItem key={item.key} textValue={item.label}>
            <span className="text-tiny text-[#212636]">{item.label}</span>
          </SelectItem>
        )}
      </Select>

     }
    </main>
  )
}