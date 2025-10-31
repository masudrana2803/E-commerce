export function getCart() {
  try {
    const raw = localStorage.getItem('cart');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('getCart parse error', e);
    return [];
  }
}

export function saveCart(cart) {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (e) {
    console.error('saveCart error', e);
  }
}

export function addToCart(product, qty = 1) {
  if (!product || !product.id) {
    console.warn('addToCart: product must have an id');
    return;
  }
  const cart = getCart();
  const existing = cart.find((p) => p.id === product.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title || product.name || product.Description || '',
      price: product.price || product.Price || 0,
      thumbnail: product.thumbnail || product.productImage || product.image || '',
      quantity: qty,
    });
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(id) {
  const cart = getCart();
  const next = cart.filter((p) => p.id !== id);
  saveCart(next);
  return next;
}

export function updateQuantity(id, qty) {
  const cart = getCart();
  const item = cart.find((p) => p.id === id);
  if (item) {
    item.quantity = qty;
    if (item.quantity <= 0) return removeFromCart(id);
    saveCart(cart);
  }
  return cart;
}
