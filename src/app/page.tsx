// src/app/page.tsx
'use client';

import React from 'react';
import { Theme, Box, Flex, Grid, Card, Text, Button, Container, Avatar, Badge } from '@radix-ui/themes';
import Header from '../components/Header';
import { ArrowRight, Star, TrendingUp, Award, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

// Mock data (in a real app, this would come from an API)
const featuredProducts = [
  { id: 1, name: 'Rose Elegance', price: 59.99, image: '/images/product1.jpg', rating: 4.5, reviews: 120 },
  { id: 2, name: 'Oud Mystique', price: 79.99, image: '/images/product2.jpg', rating: 4.8, reviews: 95 },
  { id: 3, name: 'Citrus Burst', price: 49.99, image: '/images/product3.jpg', rating: 4.2, reviews: 78 },
  { id: 4, name: 'Lavender Dreams', price: 54.99, image: '/images/product4.jpg', rating: 4.6, reviews: 110 },
];

const categories = [
  { id: 1, name: 'Floral', icon: '🌸', description: 'Blooming scents' },
  { id: 2, name: 'Woody', icon: '🌳', description: 'Earthy aromas' },
  { id: 3, name: 'Oriental', icon: '🏵️', description: 'Exotic fragrances' },
  { id: 4, name: 'Fresh', icon: '🍃', description: 'Crisp and clean' },
];

const testimonials = [
  { id: 1, name: 'Sarah M.', avatar: '/avatars/sarah.jpg', text: 'I found my signature scent here! Amazing selection.' },
  { id: 2, name: 'Ali K.', avatar: '/avatars/ali.jpg', text: 'Great prices and fast shipping. Highly recommend!' },
];

const HomePage = () => {
  return (
    <Theme accentColor="violet" grayColor="sand">
      <Box>
        <Header />
        <Container size="4">
          {/* Hero Section */}
          <Box my="6" py="9" px="6" style={{
            background: 'linear-gradient(45deg, var(--violet-9), var(--violet-10))',
            borderRadius: 'var(--radius-3)',
            boxShadow: 'var(--shadow-5)'
          }}>
            <Flex direction="column" align="center" gap="4">
              <Text size="9" weight="bold" align="center" style={{ color: 'white' }}>
                Discover Your Signature Scent
              </Text>
              <Text size="4" align="center" style={{ color: 'var(--gray-3)', maxWidth: '600px' }}>
                Explore a world of fragrances from Pakistan's finest creators
              </Text>
              <Button size="4" variant="surface" style={{ fontWeight: 'bold' }}>
                Shop Now
              </Button>
            </Flex>
          </Box>

          {/* Featured Products */}
          <Box my="8">
            <Flex justify="between" align="baseline" mb="4">
              <Text size="7" weight="bold">Featured Products</Text>
              <Button variant="ghost">
                View All <ArrowRight size={16} />
              </Button>
            </Flex>
            <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="4">
              {featuredProducts.map((product) => (
                <Card key={product.id} style={{ overflow: 'hidden' }}>
                  <Image src={product.image} alt={product.name} width={300} height={300} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                  <Box p="3">
                    <Text weight="bold">{product.name}</Text>
                    <Flex justify="between" align="center" mt="2">
                      <Text weight="bold" size="5" color="violet">${product.price.toFixed(2)}</Text>
                      <Badge size="1" color="orange">
                        <Flex gap="1" align="center">
                          <Star size={12} fill="currentColor" /> {product.rating}
                        </Flex>
                      </Badge>
                    </Flex>
                    <Text size="1" color="gray">{product.reviews} reviews</Text>
                    <Button size="2" mt="3" variant="soft" style={{ width: '100%' }}>Add to Cart</Button>
                  </Box>
                </Card>
              ))}
            </Grid>
          </Box>

          {/* Categories */}
          <Box my="8">
            <Text size="7" weight="bold" mb="4">Shop by Category</Text>
            <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="4">
              {categories.map((category) => (
                <Card key={category.id} style={{ textAlign: 'center', cursor: 'pointer' }}>
                  <Box p="4">
                    <Text size="8" mb="2">{category.icon}</Text>
                    <Text weight="bold">{category.name}</Text>
                    <Text size="2" color="gray">{category.description}</Text>
                  </Box>
                </Card>
              ))}
            </Grid>
          </Box>

          {/* Promotional Section */}
          <Box my="8" p="6" style={{
            background: 'linear-gradient(45deg, var(--violet-3), var(--violet-4))',
            borderRadius: 'var(--radius-3)',
            boxShadow: 'var(--shadow-2)'
          }}>
            <Flex direction="column" align="center" gap="4">
              <Badge size="2" color="violet">Limited Time</Badge>
              <Text size="7" weight="bold" align="center">Get 20% off on Premium Fragrances</Text>
              <Text align="center" size="4">Use code PREMIUM20 at checkout</Text>
              <Button size="3" variant="surface" style={{ fontWeight: 'bold' }}>Shop Premium Collection</Button>
            </Flex>
          </Box>

          {/* Trust Indicators */}
          <Grid columns={{ initial: '2', md: '3' }} gap="4" my="8">
            <Flex align="center" gap="2">
              <ShieldCheck size={24} />
              <Text weight="bold">Authentic Products</Text>
            </Flex>
            <Flex align="center" gap="2">
              <TrendingUp size={24} />
              <Text weight="bold">Free Shipping</Text>
            </Flex>
            <Flex align="center" gap="2">
              <Award size={24} />
              <Text weight="bold">Quality Guarantee</Text>
            </Flex>
          </Grid>

          {/* Testimonials */}
          <Box my="8">
            <Text size="7" weight="bold" mb="4">What Our Customers Say</Text>
            <Grid columns={{ initial: '1', sm: '2' }} gap="4">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <Flex gap="3" align="center">
                    <Avatar size="5" src={testimonial.avatar} fallback={testimonial.name[0]} />
                    <Box>
                      <Text weight="bold">{testimonial.name}</Text>
                      <Text size="2">{testimonial.text}</Text>
                    </Box>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Box>
        </Container>

        {/* Footer */}
        <Box py="6" style={{ borderTop: '1px solid var(--gray-5)', background: 'var(--gray-1)' }}>
          <Container size="4">
            <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="4">
              <Box>
                <Text weight="bold" mb="2">About Us</Text>
                <Text size="2" as="p">Discover the finest fragrances from Pakistan's top creators.</Text>
              </Box>
              <Box>
                <Text weight="bold" mb="2">Quick Links</Text>
                <Flex direction="column" gap="1">
                  {['Shop', 'Categories', 'About', 'Contact'].map((link) => (
                    <Text key={link} size="2" as="a" href="#" style={{ textDecoration: 'none' }}>{link}</Text>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text weight="bold" mb="2">Customer Service</Text>
                <Flex direction="column" gap="1">
                  {['FAQ', 'Shipping', 'Returns', 'Track Order'].map((link) => (
                    <Text key={link} size="2" as="a" href="#" style={{ textDecoration: 'none' }}>{link}</Text>
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text weight="bold" mb="2">Newsletter</Text>
                <Text size="2" as="p" mb="2">Stay updated with our latest offers</Text>
                <Flex>
                  <input type="email" placeholder="Your email" style={{ padding: '8px', borderRadius: 'var(--radius-2) 0 0 var(--radius-2)', border: '1px solid var(--gray-5)' }} />
                  <Button size="2" variant="solid" style={{ borderRadius: '0 var(--radius-2) var(--radius-2) 0' }}>Subscribe</Button>
                </Flex>
              </Box>
            </Grid>
            <Text align="center" size="2" color="gray" mt="6">
              © 2024 Pakistan Fragrance Marketplace. All rights reserved.
            </Text>
          </Container>
        </Box>
      </Box>
    </Theme>
  );
};

export default HomePage;