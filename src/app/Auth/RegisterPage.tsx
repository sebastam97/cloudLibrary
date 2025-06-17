'use client';

import styled from 'styled-components';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f5f5f5;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function RegisterPage() {
  return (
    <RegisterContainer>
      <RegisterForm>
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </RegisterForm>
    </RegisterContainer>
  );
}
