import { Pagination, Row } from "antd";
import { FC } from "react";

interface AppPaginationProps {
  size: number;
  defaultCurrent: number;
  totalCount: number | undefined;
  changePage: (value: number) => void;
}

const AppPagination: FC<AppPaginationProps> = ({
  size,
  defaultCurrent,
  totalCount,
  changePage,
}) => {
  return (
    <Row justify={"center"} style={{ width: "100%" }}>
      <Pagination
        onChange={changePage}
        pageSize={size}
        align="center"
        defaultCurrent={defaultCurrent}
        total={totalCount}
      />
    </Row>
  );
};

export default AppPagination;
