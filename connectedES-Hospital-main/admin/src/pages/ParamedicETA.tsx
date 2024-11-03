import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Make sure to set this for accessibility reasons

const data = [
  { id: '001', eta: '12:54', customer: 'John Doe', email: 'john.doe@email.com' },
  { id: '002', eta: '12:54', customer: 'Jane Smith', email: 'jane.smith@email.com' },
  { id: '003', eta: '12:55', customer: 'Michael Johnson', email: 'michael.johnson@email.com' },
  { id: '004', eta: '12:59', customer: 'Emily Brown', email: 'emily.brown@email.com' },
];

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-left text-3xl font-bold mb-4">Traveling Time</h1>
      <div className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 p-4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">ETA</th>
                <th className="py-2 px-4 border-b">Customer</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="py-2 px-4 border-b">{item.id}</td>
                  <td className="py-2 px-4 border-b">{item.eta}</td>
                  <td className="py-2 px-4 border-b">{item.customer}</td>
                  <td className="py-2 px-4 border-b">{item.email}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => openModal(item)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-1/2 ml-36">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452349.833763453!2d16.59064794799112!3d-30.989498661393244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e636627c1e9fd65%3A0xb24b60e0e0787b34!2sSouth%20Africa!5e0!3m2!1sen!2sza!4v1687533284512!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Details Modal"
        className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      >
        {selectedItem && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <p><strong>ID:</strong> {selectedItem.id}</p>
            <p><strong>ETA:</strong> {selectedItem.eta}</p>
            <p><strong>Customer:</strong> {selectedItem.customer}</p>
            <p><strong>Email:</strong> {selectedItem.email}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
