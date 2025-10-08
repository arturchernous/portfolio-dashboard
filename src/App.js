import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartComponent from './components/ChartComponent';
import ContactForm from './components/ContactForm';
import './App.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [leads, setLeads] = useState([]);
  const data = {
    labels: ['Completed Projects', 'Active Clients', 'Skill Mastery %'],
    datasets: [
      {
        label: '# Portfolio Stats',
        data: [12, 8, 95],
        backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-400">My Portfolio Dashboard</h1>
        <p className="text-gray-300 mt-2">Interactive stats and lead capture</p>
      </header>
      <main className="max-w-4xl mx-auto space-y-8">
        <ChartComponent data={data} />
        <ContactForm leads={leads} setLeads={setLeads} />
        <div className="text-center text-gray-400">
          <p>Total Leads: {leads.length}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
