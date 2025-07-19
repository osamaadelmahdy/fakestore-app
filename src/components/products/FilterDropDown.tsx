import DropdownMenu from "../DropdownMenu";
import { IoChevronDown } from "react-icons/io5";

function FilterDropDown({
  title,
  options,
  onSelect = () => {},
}: {
  title: string;
  options: string[];
  onSelect?: (option: string) => void;
}) {
  return (
    <DropdownMenu
      trigger={
        <div className="flex items-center gap-1 font-semibold text-sm">
          {title}
          <span className="text-xs">
            <IoChevronDown />
          </span>
        </div>
      }
    >
      {options.map((option) => (
        <div
          onClick={() => onSelect && onSelect(option)}
          key={option}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {option}
        </div>
      ))}
    </DropdownMenu>
  );
}

export default FilterDropDown;
