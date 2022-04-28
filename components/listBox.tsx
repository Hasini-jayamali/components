// import { SearchIcon } from "@heroicons/react/solid";

type Props = {
  lable?: string;
  items: {}[];
};

export const ListBox = ({ lable, items }: Props) => {
  return (
    <div>
      <label
        htmlFor="company_website"
        className="block text-sm font-medium text-gray-700"
      >
        {lable}
      </label>
      <select name="Names" size={5}>
        {items.map((anObjectMapped) => {
          return (
            <option key={anObjectMapped.id} value={anObjectMapped.name}>
              {anObjectMapped.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};