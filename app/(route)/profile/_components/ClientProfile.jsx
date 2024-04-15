import React, { useState } from 'react';

const ClientProfile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(user ? user.name : '');
  const [newLastName, setNewLastName] = useState(user ? user.lastName : '');
  const [newEmail, setNewEmail] = useState(user ? user.email : '');

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Здесь вы можете добавить логику для сохранения изменений
    setEditing(false);
    // Например, можно отправить данные на сервер
    console.log("Сохранить изменения:", newName, newLastName, newEmail);
  };

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md m-5">
      <h2 className="text-green-700 text-2xl font-semibold mb-5">Client Profile</h2>
      {!editing ? (
        <>
          <p className="text-green-900 mb-3">Name: {user && user.name}</p>
          <p className="text-green-900 mb-3">Nachname: {user && user.lastName}</p>
          <p className="text-green-900 mb-3">Email: {user && user.email}</p>
          <button onClick={handleEditClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Изменить профиль
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="block border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Новое имя"
          />
          <input
            type="text"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            className="block border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Новая фамилия"
          />
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="block border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Новый email"
          />
          <button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            Сохранить изменения
          </button>
          <button onClick={() => setEditing(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Отмена
          </button>
        </>
      )}
    </div>
  );
}

export default ClientProfile;
