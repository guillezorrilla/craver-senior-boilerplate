import data from '@/data/products_mock.json';
import { IProducts } from '@/models/products';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="container space-y-3">
      {data.map((item: IProducts) => {
        return (
          <Card key={item.id} className="p-4">
            <CardTitle>{item.product_name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardContent>{item.price}</CardContent>
            <Button>Add item to cart</Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
