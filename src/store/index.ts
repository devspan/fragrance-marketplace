// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: User | null
  token: string | null
}

const initialState: AuthState = {
  user: null,
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    logout: (state) => {
      state.user = null
      state.token = null
    },
  },
})

export const { setUser, setToken, logout } = authSlice.actions
export default authSlice.reducer

// src/store/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer