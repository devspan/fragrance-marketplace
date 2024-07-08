// src/app/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Theme, Box, Flex, Text, Button, Card, Container, Avatar } from '@radix-ui/themes';
import Header from '../components/Header';

const ProductCard = ({ name, price, image }) => (
  <Card style={{ width: '250px' }}>
    <Flex direction="column" gap="2">
      <Box style={{ height: '200px', background: `url(${image}) no-repeat center/cover`, borderRadius: 'var(--radius-2)' }}></Box>
      <Text weight="bold">{name}</Text>
      <Text>${price.toFixed(2)}</Text>
      <Button size="2">Add to Cart</Button>
    </Flex>
  </Card>
);

const CategoryCard = ({ name, icon }) => (
  <Card style={{ width: '150px', textAlign: 'center' }}>
    <Flex direction="column" align="center" gap="2">
      <Avatar size="5" fallback={icon} />
      <Text weight="bold">{name}</Text>
    </Flex>
  </Card>
);

const HomePage = () => {
  const [featuredProducts] = useState([
    { id: 1, name: "Rose Delight", price: 59.99, image: "https://example.com/rose-perfume.jpg" },
    { id: 2, name: "Oud Mystique", price: 79.99, image: "https://example.com/oud-perfume.jpg" },
    { id: 3, name: "Citrus Burst", price: 49.99, image: "https://example.com/citrus-perfume.jpg" },
  ]);

  const [categories] = useState([
    { id: 1, name: "Floral", icon: "🌸" },
    { id: 2, name: "Woody", icon: "🌳" },
    { id: 3, name: "Oriental", icon: "🏵️" },
    { id: 4, name: "Fresh", icon: "🍃" },
  ]);

  return (
    <Theme accentColor="violet" grayColor="sand" radius="medium" scaling="95%">
      <Box>
        <Header />

        <Box py="8">
          <Container size="4">
            {/* Hero Section */}
            <Box mb="8" style={{ background: 'var(--violet-9)', borderRadius: 'var(--radius-3)', padding: '60px 40px' }}>
              <Flex direction="column" align="center" gap="4">
                <Text size="9" weight="bold" align="center" style={{ color: 'white' }}>Discover Your Signature Scent</Text>
                <Text size="5" align="center" style={{ color: 'var(--gray-3)', maxWidth: '600px' }}>
                  Explore a world of fragrances from Pakistan&apos;s finest creators
                </Text>
                <Button size="4" variant="surface">Shop Now</Button>
              </Flex>
            </Box>

            {/* Featured Products */}
            <Box mb="8">
              <Flex justify="between" align="baseline" mb="4">
                <Text size="6" weight="bold">Featured Products</Text>
                <Link href="/products">View all</Link>
              </Flex>
              <Flex gap="4" wrap="wrap">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </Flex>
            </Box>

            {/* Categories */}
            <Box mb="8">
              <Text size="6" weight="bold" mb="4">Shop by Category</Text>
              <Flex gap="4" wrap="wrap">
                {categories.map((category) => (
                  <CategoryCard key={category.id} {...category} />
                ))}
              </Flex>
            </Box>

            {/* Newsletter Signup */}
            <Box mb="8" style={{ background: 'var(--gray-2)', borderRadius: 'var(--radius-3)', padding: '40px' }}>
              <Flex direction="column" align="center" gap="4">
                <Text size="6" weight="bold">Stay Updated</Text>
                <Text align="center">Subscribe to our newsletter for exclusive offers and fragrance tips</Text>
                <Flex gap="2">
                  <input type="email" placeholder="Enter your email" style={{ padding: '8px', borderRadius: 'var(--radius-2)' }} />
                  <Button>Subscribe</Button>
                </Flex>
              </Flex>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Box style={{ borderTop: '1px solid var(--gray-a5)', background: 'var(--gray-1)' }}>
          <Container size="4">
            <Flex justify="between" py="6">
              <Flex direction="column" gap="2">
                <Text weight="bold">Quick Links</Text>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/faq">FAQ</Link>
              </Flex>
              <Flex direction="column" gap="2">
                <Text weight="bold">Policies</Text>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/returns">Returns & Refunds</Link>
              </Flex>
              <Flex direction="column" gap="2">
                <Text weight="bold">Connect With Us</Text>
                <Text>Follow us on social media</Text>
                {/* Add social media icons here */}
              </Flex>
            </Flex>
            <Box py="4" style={{ borderTop: '1px solid var(--gray-a5)' }}>
              <Text size="2" align="center">© 2024 Pakistan Fragrance Marketplace. All rights reserved.</Text>
            </Box>
          </Container>
        </Box>
      </Box>
    </Theme>
  );
};

export default HomePage;