"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React from "react";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={5}
      className={`z-50 min-w-[150px] rounded-md border border-gray-200 bg-white p-1 shadow-lg
        dark:border-gray-700 dark:bg-gray-800
        focus:outline-none
        ${className || ""}`}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={`cursor-pointer select-none rounded px-2 py-1.5 text-sm text-gray-700
      hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
      dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:bg-gray-700
      ${className || ""}`}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenuItem";
