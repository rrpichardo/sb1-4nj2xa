import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, Save, Send } from 'lucide-react';

export default function InspectionForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    inspectorName: '',
    inspectionDate: '',
    siteAddress: '',
    gateType: '',
    siteConditions: '',
    recommendations: '',
  });

  const gateTypes = [
    'Corredera',
    'Batiente',
    'Levadiza',
    'Enrollable',
    'Basculante',
    'Otro',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Dashboard
        </button>
      </div>

      {/* Rest of the InspectionForm component remains the same */}
    </div>
  );
}