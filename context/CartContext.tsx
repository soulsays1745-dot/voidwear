"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

import { toast } from "sonner";

type CartItem = {
  name: string;
  price: string;
  image: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];

  addToCart: (product: CartItem) => void;

  removeFromCart: (index: number) => void;

  increaseQuantity: (name: string) => void;

  decreaseQuantity: (name: string) => void;

  isCartOpen: boolean;

  openCart: () => void;

  closeCart: () => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],

  addToCart: () => {},

  removeFromCart: () => {},

  increaseQuantity: () => {},

  decreaseQuantity: () => {},

  isCartOpen: false,

  openCart: () => {},

  closeCart: () => {},
});

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  // LOAD CART FROM LOCAL STORAGE
  useEffect(() => {
    const savedCart =
      localStorage.getItem("voidwear-cart");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // SAVE CART TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(
      "voidwear-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (product: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setIsCartOpen(true);

    toast.success(
      `${product.name} added to cart`
    );
  };

  // REMOVE ITEM
  const removeFromCart = (index: number) => {
    setCartItems((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // INCREASE QUANTITY
  const increaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (name: string) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // OPEN CART
  const openCart = () => {
    setIsCartOpen(true);
  };

  // CLOSE CART
  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        isCartOpen,

        openCart,

        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}