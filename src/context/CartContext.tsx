"use client";
import { createContext, useContext, useState, useCallback } from "react";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
  image: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string, color: string, size: string) => void;
  updateQty: (id: string, color: string, size: string, qty: number) => void;
  total: number;
  count: number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1", slug: "velocity-running-short", name: "Velocity Running Short",
      price: 68, color: "Black", size: "M", quantity: 1,
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&q=80",
    },
    {
      id: "2", slug: "aeroflow-performance-tee", name: "AeroFlow Performance Tee",
      price: 55, color: "Navy", size: "L", quantity: 2,
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200&q=80",
    },
    {
      id: "3", slug: "marathon-jacket", name: "Marathon Jacket",
      price: 125, color: "Sage", size: "S", quantity: 1,
      image: "https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=200&q=80",
    },
  ]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.color === item.color && i.size === item.size);
      if (existing) return prev.map(i => i.id === item.id && i.color === item.color && i.size === item.size ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id: string, color: string, size: string) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.color === color && i.size === size)));
  }, []);

  const updateQty = useCallback((id: string, color: string, size: string, qty: number) => {
    if (qty < 1) { removeItem(id, color, size); return; }
    setItems(prev => prev.map(i => i.id === id && i.color === color && i.size === size ? { ...i, quantity: qty } : i));
  }, [removeItem]);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, total, count, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
