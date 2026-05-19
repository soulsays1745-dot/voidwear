"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { toast } from "sonner";

type WishlistItem = {
  name: string;
  price: string;
  image: string;
};

type WishlistContextType = {
  wishlistItems: WishlistItem[];

  addToWishlist: (
    product: WishlistItem
  ) => void;

  removeFromWishlist: (
    name: string
  ) => void;

  isInWishlist: (
    name: string
  ) => boolean;

  clearWishlist: () => void;

  wishlistCount: number;
};

const WishlistContext =
  createContext<WishlistContextType>({
    wishlistItems: [],

    addToWishlist: () => {},

    removeFromWishlist: () => {},

    isInWishlist: () => false,

    clearWishlist: () => {},

    wishlistCount: 0,
  });

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [wishlistItems, setWishlistItems] =
    useState<WishlistItem[]>([]);

  // LOAD
  useEffect(() => {

    const savedWishlist =
      localStorage.getItem(
        "voidwear-wishlist"
      );

    if (savedWishlist) {
      setWishlistItems(
        JSON.parse(savedWishlist)
      );
    }

  }, []);

  // SAVE
  useEffect(() => {

    localStorage.setItem(
      "voidwear-wishlist",
      JSON.stringify(wishlistItems)
    );

  }, [wishlistItems]);

  // CHECK
  const isInWishlist = (name: string) => {

    return wishlistItems.some(
      (item) => item.name === name
    );
  };

  // ADD
  const addToWishlist = (
    product: WishlistItem
  ) => {

    if (isInWishlist(product.name)) {

      toast.error(
        `${product.name} already in wishlist`
      );

      return;
    }

    setWishlistItems((prev) => [
      ...prev,
      product,
    ]);

    toast.success(
      `${product.name} added to wishlist`
    );
  };

  // REMOVE
  const removeFromWishlist = (
    name: string
  ) => {

    setWishlistItems((prev) =>
      prev.filter(
        (item) => item.name !== name
      )
    );

    toast.error(
      `${name} removed from wishlist`
    );
  };

  // CLEAR
  const clearWishlist = () => {

    setWishlistItems([]);

    toast.success(
      "Wishlist cleared"
    );
  };

  const wishlistCount =
    wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,

        addToWishlist,

        removeFromWishlist,

        isInWishlist,

        clearWishlist,

        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}