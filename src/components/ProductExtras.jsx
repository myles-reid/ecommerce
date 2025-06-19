import Review from './Review';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/productExtra.css';

function ProductExtras({ product }) {
  const reviews = [];

  for (let i = 0; i < 3; i++) {
    reviews.push (i);
  }

  return (
    <div className="product-extras-wrapper">
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Additional Information</Tab>
          <Tab>Reviews({product.rating?.count})</Tab>
          <Tab>Brand</Tab>
          <Tab>Shipping & Delivering</Tab>
        </TabList>
        <TabPanel>
          <div className="product-description container flex tab-content">
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-content additional-info container ">
            <div>
              {product?.category !== 'Electronics' || product?.category !== 'Jewelry' ? (
                <p><strong>Sizes:</strong> S, M, L, XL</p>
              ) : (
                <></>
              )
                        }
              <p><strong>Brands:</strong> Brand1, Brand2, Brand3</p>
              <p><strong>Colors: </strong> Black, Orange, Green</p>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="reviews-wrapper container tab-content">
            <div className="reviews-list">
              {reviews.map((key) => (
                <Review key={key} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="brand-info container tab-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Recusandae neque consectetur voluptatum aut distinctio eos nesciunt 
              error molestias ullam minus quas labore, repellat, consequuntur 
              aliquam laboriosam architecto quis odio delectus!
            </p>
            <div className="brand-image"></div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="shipping-delivery container tab-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Doloribus, cumque! Quisquam, voluptatum. 
              Doloremque, asperiores. Quod, cumque? 
              Doloribus, cumque! Quisquam, voluptatum. 
              Doloremque, asperiores. Quod, cumque?
            </p>
            <div className="shipping-details">
              <p><strong>Shipping Time:</strong> 3-5 business days</p>
              <p><strong>Delivery Time:</strong> 5-7 business days</p>
              <p><strong>Shipping Cost:</strong> Free for orders over $50</p>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ProductExtras;