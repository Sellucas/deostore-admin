"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  CreditCard,
  Home,
  LayoutDashboard,
  Palette,
  Scaling,
  Settings,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Home",
      active: pathName === `/${params.storeId}`,
      icon: <Home size={15} />,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathName === `/${params.storeId}/billboards`,
      icon: <CreditCard size={15} />,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categorias",
      active: pathName === `/${params.storeId}/categories`,
      icon: <LayoutDashboard size={15} />,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Tamanhos",
      active: pathName === `/${params.storeId}/sizes`,
      icon: <Scaling size={15} />,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Cores",
      active: pathName === `/${params.storeId}/colors`,
      icon: <Palette size={15} />,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Produtos",
      active: pathName === `/${params.storeId}/products`,
      icon: <ShoppingBag size={15} />,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Pedidos",
      active: pathName === `/${params.storeId}/orders`,
      icon: <ShoppingCart size={15} />,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Configurações",
      active: pathName === `/${params.storeId}/settings`,
      icon: <Settings size={15} />,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-6 lg:space-x-8", className)}>
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            "flex flex-row items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.icon}
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
