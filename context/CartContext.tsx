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

  clearCart: () => void;

  cartCount: number;

  subtotal: number;

  shipping: number;

  taxes: number;

  total: number;

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

  clearCart: () => {},

  cartCount: 0,

  subtotal: 0,

  shipping: 0,

  taxes: 0,

  total: 0,

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

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  // LOAD CART
  useEffect(() => {

    const savedCart =
      localStorage.getItem("voidwear-cart");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }

  }, []);

  // SAVE CART
  useEffect(() => {

    localStorage.setItem(
      "voidwear-cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // CALCULATIONS
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc +
      Number(item.price.replace("$", "")) *
        item.quantity,
    0
  );

  const shipping =
    cartItems.length > 0 ? 20 : 0;

  const taxes = subtotal * 0.1;

  const total =
    subtotal + shipping + taxes;

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

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

  // REMOVE
  const removeFromCart = (index: number) => {

    setCartItems((prev) =>
      prev.filter((_, i) => i !== index)
    );

    toast.error("Item removed from cart");
  };

  // INCREASE
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

  // DECREASE
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

  // CLEAR
  const clearCart = () => {

    setCartItems([]);

    toast.success(
      "Cart cleared successfully"
    );
  };

  // OPEN
  const openCart = () => {
    setIsCartOpen(true);
  };

  // CLOSE
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

        clearCart,

        cartCount,

        subtotal,

        shipping,

        taxes,

        total,

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