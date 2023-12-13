export interface ITableColumn {
  label: string;
  property: string;
  headerClass?: string;
  cellClass?: string;
}

type props = {
  columns: ITableColumn[];
  data: any;
};

const LibTable: React.FC<props> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-2 text-left text-sm border-b border-border whitespace-nowrap ${column.headerClass}`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index} className="even:bg-gray-50 hover:bg-gray-100">
              {columns.map((column, index) => (
                <td
                  key={index}
                  className={`p-2 text-sm sm:text-md whitespace-nowrap ${column.cellClass}`}
                >
                  {item[column.property]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibTable;
