import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const MasterProfile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(user?.description || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [address, setAddress] = useState(user?.address || '');
  const [categoryIds, setCategoryIds] = useState(user?.categoryIds || []);
  const [procedureIds, setProcedureIds] = useState(user?.procedureIds || []);

  useEffect(() => {
    setDescription(user?.description || '');
    setPhoneNumber(user?.phoneNumber || '');
    setAddress(user?.address || '');
    setCategoryIds(user?.categoryIds || []);
    setProcedureIds(user?.procedureIds || []);
  }, [user]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    if (!user || !user.user_id || isNaN(user.user_id)) {
      console.error('Invalid user_id');
      return;
    }

    const userDetails = {
      description,
      phoneNumber,
      address,
      categoryIds: categoryIds.map(id => parseInt(id)),
      procedureIds: procedureIds.map(id => parseInt(id))
    };
 
    console.log('Data being sent to the server:', userDetails)
    
    try {
      const response = await fetch(`/api/users/${user.user_id}/details`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      });

      if (response.ok) {
        toast("Information successfully saved on the server");
        console.log('Information successfully saved on the server');
      } else {
        toast("Error while saving information on the server");
        console.error('Error while saving information on the server');
      }
    } catch (error) {
      toast("Error while executing request");
      console.error('Error while executing request:', error);
    }

    setEditing(false);
  };


  
  useEffect(() => {
    if (user?.user_id) {
      getMasterById();
    }
  }, [user?.user_id]);
  

  const getMasterById = async () => {
    try {
      const res = await fetch(`/api/users/${user?.user_id}`, {
        headers: { accept: "*/*" },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching master:", error);
    }
  };

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow-md m-5">
      <h2 className="text-green-700 text-2xl font-semibold mb-5">Master Profile</h2>
      {!editing ? (
        <>
          <p className="text-green-900 mb-3">Name: {user?.name}</p>
          <p className="text-green-900 mb-3">Last Name: {user?.lastName}</p>
          <p className="text-green-900 mb-3">Email: {user?.email}</p>
          <p className="text-green-900 mb-3">User ID: {user?.user_id}</p>
          <p className="text-green-900 mb-3">Phone Number: {phoneNumber}</p> 
          <p className="text-green-900 mb-3">Address: {address}</p> 
          <p className="text-green-900 mb-3">Category: {categoryIds}</p> 
          <p className="text-green-900 mb-3">Procedure: {procedureIds}</p> 

          <p className="bg-green-300 p-4 rounded-lg shadow-md m-5">Description: {description}</p> 
          <button onClick={handleEditClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Description"
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Phone Number"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Address"
          />
          <input
            type="text"
            value={categoryIds.join(',')}
            onChange={(e) => setCategoryIds(e.target.value.split(','))}
            className="block border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Category IDs (comma separated)"
          />
          <input
            type="text"
            value={procedureIds.join(',')}
            onChange={(e) => setProcedureIds(e.target.value.split(','))}
            className="block border border-gray-300 rounded-md p-2 mb-2"
            placeholder="Procedure IDs (comma separated)"
          />
          <button onClick={handleSaveClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
            Save Changes
          </button>
          <button onClick={() => setEditing(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </>
      )}
    </div>
  );
}

export default MasterProfile;
