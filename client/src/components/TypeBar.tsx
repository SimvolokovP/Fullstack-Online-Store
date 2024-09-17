import { FC, useEffect } from "react";
import { IType } from "../models/IType";
import { Radio, Space } from "antd";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { getAllTypes } from "../store/slices/devicesSlice";

interface TypeBarProps {
  types: IType[] | null;
  value: number;
  onChange: (value: number) => void;
}

const TypeBar: FC<TypeBarProps> = ({ types, value, onChange }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTypes());
  }, [dispatch]);

  return (
    <div>
      <Radio.Group onChange={(e) => onChange(e.target.value)} value={value}>
        <Space direction="vertical">
          {types && types.length > 0 ? (
            types.map((type) => (
              <Radio key={type.id} value={type.id}>
                {type.name}
              </Radio>
            ))
          ) : (
            <Radio disabled>No types available</Radio>
          )}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default TypeBar;
