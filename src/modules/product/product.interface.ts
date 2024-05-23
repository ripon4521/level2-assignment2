
  export type Product = {
    name: string,
    productId : string,
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants:[
        {
            type: string;
            value: string;
        },
        {
            type: string;
            value: string;
        }
    ];
    inventory : {
        quantity: number;
        inStock: boolean;
    },
   
    
  };
  