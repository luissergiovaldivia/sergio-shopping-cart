# Sergio Shopping Cart

# Step 1: Create React A

# Step 2: Clear App.js, Delete App.css

          Delete the server.

# Step 3: Products Components, Show list of products on the home page

# Step 4: Create Filter Componet, filter products on their sizes and

          sort and price.

# Step 5: Create Cart component Show select items in the cart on the 
          rigth sidebar

# Step 6: Checkout Form, Show the checkout form to get buyer data

# Step 7: Add Animation Animated producut list and adding to cart

# Step 13: Add Redux To Cart
    1. Update task and branch
    2.type.js
    3.create ADD_TO_CART
    4.create REMOVE_FROM_CART
    5.actions/cartActions.js
    6.create addToCart
    7.create removeFromCart
    8.reducers/cartReducers.js
    9.case ADD_TO_CART
    10.case REMOVE_FROM_CART
    11.Cart.js
    12.connect props: cartItems
    13.connect actions: removeFromCart
    14.Products.js
    15.add actions addToCart
    16.App.js
    17.remove Cart props
    18.store.js
    19.set initial cartItems to localStorage
    20.check result
    21.update task and branch

# Step 14 Create Order
    1.Create Order
    2.Backend
    3.server.js
    4.create order modal
    5.get /api/orders
    6.post /api/orders
    7.delete /api/orders/:id
    8.Frontend
    9.create types
    10.types.js
    11.CLEAR_ORDER, CLEAR_CART, CREATE_ORDER
    12.create actions
    13.actions/orderActions.js
    14.createOrder(order)
    15.clearOrder()
    16.create reducers
    17.reducers/orderReducers.js
    18.case CREATE_ORDER
    19.case CLEAR_ORDER
    20.Update Cart Component
    21.components/Cart.js
    22.connect order, createOrder, clearOrder
    23.form onSubmit={this.createOrder}
    24.createOrder() this.props.createOrder(order)
    25.closeModal() this.props.clearOrder()
    26.render()
    27.const { cartItems, order } = this.props;
    28.{order && (}