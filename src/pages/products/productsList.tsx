import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { FETCH_PRODUCTS, FETCH_MORE_PRODUCTS, ProductActions, type IProduct } from "../../features/products/products.slice";
import { selectProducts, selectProductTotal, selectProductLoading } from "../../features/products/productSelector";
import { Card, CardContent, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useDebounce } from "../../hooks/useDebounce";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const total = useSelector(selectProductTotal);
  const loading = useSelector(selectProductLoading);
  const parentRef = useRef<HTMLDivElement>(null);
  const debounce = useDebounce(300)
  const [catagory, setCatagory] = useState();

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
  }, [dispatch]);

  const virtualizer = useVirtualizer({
    count: products?.length ?? 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 100,
    overscan: 5,
  });

  const virtualItems = virtualizer.getVirtualItems();
  useEffect(() => {
    const lastItem = virtualItems[virtualItems.length - 1];
    if (!lastItem) return;                          // no items rendered yet
    if (loading) return;                            // already fetching
    if (products.length >= total && total !== 0) return;  // all data loaded
    if (lastItem.index < products.length - 1) return;    // not at last item yet
    dispatch({ type: FETCH_MORE_PRODUCTS });
  }, [virtualItems, products.length, total, loading, dispatch]);

  function fetchProducts(){
    dispatch(ProductActions.resetPage());
    dispatch({ type: FETCH_PRODUCTS });
  }

  return (
    <div className="flex flex-col items-center h-screen p-4">


      <TextField id="filled-basic" label="Search for Products" variant="filled"
       onChange={(e)=>{
            dispatch(ProductActions.setProductsSearch(e.target.value))
            dispatch(ProductActions.resetPage())
            debounce(fetchProducts)
      }} />
      {/* <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={catagory}
        label="Catagory"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
       
      </Select> */}

      <div
        ref={parentRef}
        style={{ height: '70vh', width: '100%', overflowY: 'auto' }}
      >
        <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
          {virtualItems.map((virtualItem) => {
            const product: IProduct = products[virtualItem.index];
            return (
              <div
                key={virtualItem.key}
                style={{
                  position: 'absolute',
                  top: virtualItem.start,
                  width: '100%',
                  height: virtualItem.size,
                  padding: '4px 0',
                }}
              >
                <Card>
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.brand} — ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
