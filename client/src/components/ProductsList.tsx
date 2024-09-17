import { FC } from "react";
import { IDevice } from "../models/IDevice";
import { Card, List } from "antd";
import Meta from "antd/es/card/Meta";

interface ProductsListProps {
  devices: IDevice[] | undefined;
}

const ProductsList: FC<ProductsListProps> = ({ devices }) => {
  return (
    <List
      grid={{
        gutter: 16,
       
      }}
      dataSource={devices}
      renderItem={(item: IDevice) => (
        <List.Item>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={item.img} />}
          >
            <Meta title={item.name} description={item.price + " руб."} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ProductsList;
