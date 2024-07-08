// src/components/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Flex, Text, Button } from '@radix-ui/themes';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  return (
    <Flex py="4" px="6" justify="between" align="center" style={{ borderBottom: '1px solid var(--gray-a5)' }}>
      <Text size="5" weight="bold">Pakistan Fragrance Marketplace</Text>
      <Flex align="center" gap="4">
        <Link href="/search" passHref>
          <Button variant="ghost" size="2"><Search size={18} /></Button>
        </Link>
        <Link href="/products">Products</Link>
        <Link href="/vendors">Vendors</Link>
        <Link href="/cart" passHref>
          <Button variant="ghost" size="2"><ShoppingCart size={18} /></Button>
        </Link>
        <Link href="/account" passHref>
          <Button variant="ghost" size="2"><User size={18} /></Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;