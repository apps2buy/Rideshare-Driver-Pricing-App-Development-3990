import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useApp } from '../context/AppContext';

const { FiBookmark, FiPlus, FiTrash2, FiEdit3, FiCheck, FiX } = FiIcons;

const PresetsPage = () => {
  const { state, dispatch } = useApp();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [presetForm, setPresetForm] = useState({
    name: '',
    baseFare: state.config.baseFare,
    ratePerUnit: state.config.ratePerUnit,
    waitFee: state.config.waitFee
  });

  const handleSavePreset = () => {
    const preset = {
      id: editingId || Date.now(),
      ...presetForm,
      createdAt: new Date().toISOString()
    };

    if (editingId) {
      const updatedPresets = state.presets.map(p => 
        p.id === editingId ? preset : p
      );
      dispatch({ type: 'LOAD_DATA', payload: { ...state, presets: updatedPresets } });
    } else {
      dispatch({ type: 'SAVE_PRESET', payload: preset });
    }
    resetForm();
  };

  const handleEditPreset = (preset) => {
    setEditingId(preset.id);
    setPresetForm({
      name: preset.name,
      baseFare: preset.baseFare,
      ratePerUnit: preset.ratePerUnit,
      waitFee: preset.waitFee
    });
    setShowAddForm(true);
  };

  const handleDeletePreset = (id) => {
    dispatch({ type: 'DELETE_PRESET', payload: id });
  };

  const handleLoadPreset = (preset) => {
    dispatch({ type: 'LOAD_PRESET', payload: preset });
  };

  const resetForm = () => {
    setShowAddForm(false);
    setEditingId(null);
    setPresetForm({
      name: '',
      baseFare: state.config.baseFare,
      ratePerUnit: state.config.ratePerUnit,
      waitFee: state.config.waitFee
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8 pb-32 min-h-screen">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <SafeIcon icon={FiBookmark} className="text-3xl text-purple-600 mr-4" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Presets</h1>
                <p className="text-gray-600">Save and manage your pricing configurations</p>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowAddForm(true)}
              className="p-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors shadow-lg"
            >
              <SafeIcon icon={FiPlus} className="text-2xl" />
            </motion.button>
          </div>
        </motion.div>

        {/* Add/Edit Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {editingId ? 'Edit Preset' : 'Add New Preset'}
              </h2>
              <button
                onClick={resetForm}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <SafeIcon icon={FiX} className="text-2xl" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preset Name
                </label>
                <input
                  type="text"
                  value={presetForm.name}
                  onChange={(e) => setPresetForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., Airport Runs, City Center"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Base Fare ({state.config.currency})
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={presetForm.baseFare}
                    onChange={(e) => setPresetForm(prev => ({ ...prev, baseFare: parseFloat(e.target.value) || 0 }))}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Rate per {state.config.unit}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={presetForm.ratePerUnit}
                    onChange={(e) => setPresetForm(prev => ({ ...prev, ratePerUnit: parseFloat(e.target.value) || 0 }))}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Wait Fee per Minute ({state.config.currency})
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={presetForm.waitFee}
                  onChange={(e) => setPresetForm(prev => ({ ...prev, waitFee: parseFloat(e.target.value) || 0 }))}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleSavePreset}
                disabled={!presetForm.name.trim()}
                className="w-full bg-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
              >
                <SafeIcon icon={FiCheck} className="text-xl" />
                <span className="text-lg">{editingId ? 'Update Preset' : 'Save Preset'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Presets List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {state.presets.length === 0 ? (
            <div className="text-center py-16">
              <SafeIcon icon={FiBookmark} className="text-6xl text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Presets Yet</h3>
              <p className="text-gray-600 mb-8">Create your first pricing preset to get started</p>
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAddForm(true)}
                className="bg-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-purple-700 transition-colors"
              >
                Add Preset
              </motion.button>
            </div>
          ) : (
            state.presets.map((preset) => (
              <motion.div
                key={preset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{preset.name}</h3>
                  <div className="flex space-x-3">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleEditPreset(preset)}
                      className="p-3 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
                    >
                      <SafeIcon icon={FiEdit3} className="text-xl" />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDeletePreset(preset.id)}
                      className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                    >
                      <SafeIcon icon={FiTrash2} className="text-xl" />
                    </motion.button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Base Fare</p>
                    <p className="text-lg font-bold text-gray-900">{state.config.currency} {preset.baseFare.toFixed(2)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Per {state.config.unit}</p>
                    <p className="text-lg font-bold text-gray-900">{state.config.currency} {preset.ratePerUnit.toFixed(2)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Wait Fee</p>
                    <p className="text-lg font-bold text-gray-900">{state.config.currency} {preset.waitFee.toFixed(2)}/min</p>
                  </div>
                </div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleLoadPreset(preset)}
                  className="w-full bg-purple-100 text-purple-700 font-bold py-4 px-6 rounded-xl hover:bg-purple-200 transition-colors"
                >
                  Load This Preset
                </motion.button>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PresetsPage;