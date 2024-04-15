import React, { useState } from 'react';

const MasterProfile = ({ user }) => {
    const [editing, setEditing] = useState(false);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [newName, setNewName] = useState(user ? user.name : '');
    const [newLastName, setNewLastName] = useState(user ? user.lastName : '');
    const [newEmail, setNewEmail] = useState(user ? user.email : '');
    const [address, setAddress] = useState(user ? user.address : '');
    const [phone, setPhone] = useState(user ? user.phone : '');
    const [photo, setPhoto] = useState(user ? user.photo : '');
    const [category, setCategory] = useState(user ? user.category : '');
    const [procedure, setProcedure] = useState(user ? user.procedure : '');

    const handleEditClick = () => {
      setEditing(true);
    };

    const handleSaveClick = () => {
      // Здесь вы можете добавить логику для сохранения изменений
      setEditing(false);
      // Например, можно отправить данные на сервер
      console.log("Сохранить изменения:", newName, newLastName, newEmail);
    };

    const handleShowAdditionalInfo = () => {
      setShowAdditionalInfo(true);
    };

    const handleHideAdditionalInfo = () => {
      setShowAdditionalInfo(false);
    };

    return (
      <div className="bg-green-100 p-4 rounded-lg shadow-md m-5">
        <h2 className="text-green-700 text-2xl font-semibold mb-5">Master Profile </h2>
        {!editing ? (
          <>
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-green-900 mb-1">Name: {user && user.name}</p>
                <p className="text-green-900 mb-1">Nachname: {user && user.lastName}</p>
                <p className="text-green-900 mb-1">Email: {user && user.email}</p>
              </div>
              <button onClick={handleEditClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Profil bearbeiten
              </button>
            </div>
            {!showAdditionalInfo && (
              <button onClick={handleShowAdditionalInfo} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Weitere Informationen
              </button>
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="block border border-gray-300 rounded-md p-2 mb-2"
              placeholder="Neuer Name"
            />
            <input
              type="text"
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
              className="block border border-gray-300 rounded-md p-2 mb-2"
              placeholder="Neuer Nachname"
            />
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="block border border-gray-300 rounded-md p-2 mb-2"
              placeholder="Neue E-Mail"
            />
            <button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            Änderungen speichern
            </button>
            <button onClick={() => setEditing(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Annullierung
            </button>
          </>
        )}
        {showAdditionalInfo && (
          <div className="mt-5">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="block border border-gray-300 rounded-md p-2 mb-2"
              placeholder="Die Adresse"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block border border-gray-300 rounded-md p-2 mb-2"
              placeholder="Telefonnummer"
            />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block border border-gray-300 rounded-md p-2 mb-2"
              placeholder="Kategorie"
            />
            <input
              type="text"
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              className="block border border-gray-300 rounded-md p-2 mb-2"
              placeholder="Procedure"
            />
            <button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
              Save
            </button>
            <button onClick={handleHideAdditionalInfo} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Cancel
            </button>
          </div>
        )}
      </div>
    );
  }

export default MasterProfile;

