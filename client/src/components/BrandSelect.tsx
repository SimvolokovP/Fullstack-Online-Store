import { Select } from "antd";
import { FC, useEffect } from "react";
import { IBrand } from "../models/IBrand";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { getAllBrands } from "../store/slices/devicesSlice";

interface BrandSelectProps {
  onChange: (value: number) => void;
  brands: IBrand[] | null;
}

const BrandSelect: FC<BrandSelectProps> = ({ onChange, brands }) => {
  const options = brands
    ? brands.map((brand) => ({ value: brand.id, label: brand.name }))
    : [];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
  }, [dispatch]);

  return (
    <Select
      defaultValue={1}
      style={{ width: 120 }}
      onChange={onChange}
      options={options}
    />
  );
};

export default BrandSelect;
