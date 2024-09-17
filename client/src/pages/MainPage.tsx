import { FC, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../hooks/useTypedSelector";
import { getAllProducts } from "../store/slices/devicesSlice";
import TypeBar from "../components/TypeBar";
import { Divider, Pagination, Row } from "antd";
import ProductsList from "../components/ProductsList";
import BrandSelect from "../components/BrandSelect";
import AppPagination from "../components/AppPagination";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { devices, limit, page, types, brands } = useTypedSelector(
    (state) => state.devices
  );

  const [settings, setSettings] = useState({
    brandId: brands && brands.length > 0 ? brands[0].id : 1,
    typeId: types && types.length > 0 ? types[0].id : 1,
    page,
    limit,
  });

  useEffect(() => {
    dispatch(getAllProducts(settings));
    console.log(devices);
  }, [dispatch, settings]);

  return (
    <Row style={{ padding: "0 48px" }}>
      <Row
        style={{ width: "100%", paddingTop: "16px" }}
        justify={"space-between"}
        align={"middle"}
      >
        <TypeBar
          value={settings.typeId}
          onChange={(value: number) =>
            setSettings({ ...settings, typeId: value })
          }
          types={types}
        />
        <BrandSelect
          brands={brands}
          onChange={(value: number) =>
            setSettings((prevSettings) => ({
              ...prevSettings,
              brandId: value,
            }))
          }
        />
      </Row>
      <Divider />
      <Row justify={"center"} align={"middle"}>
        <ProductsList devices={devices?.rows} />
      </Row>
      <Divider />
      <AppPagination
        defaultCurrent={page}
        size={limit}
        totalCount={devices?.count}
        changePage={(value) => setSettings({ ...settings, page: value })}
      />
    </Row>
  );
};

export default MainPage;
