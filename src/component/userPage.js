import React, { useState } from 'react';

const UserPage = () => {
  const [userData] = useState({
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg',
    cartItems: [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 15 }
    ]
  });

  const { name, avatar, cartItems } = userData;

  return (
    <div>
      <div className="user-info">
        <img src={avatar} alt="Avatar" />
        <h1>Ласкаво просимо, {name}!</h1>
      </div>

      <h2>Ваша корзина:</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина порожня.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} грн
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserPage;