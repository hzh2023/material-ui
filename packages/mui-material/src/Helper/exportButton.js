import React from 'react';
import { exportRowsToCSV } from './exportUtils'; // 导入导出功能模块

function ExportButton({ rows, fileHeaders }) {
  const handleExport = () => {
    const filePath = 'output.csv'; 
    exportRowsToCSV(rows, filePath, fileHeaders)
      .then(() => console.log('The CSV file was written successfully.'))
      .catch((error) => console.error('Error exporting CSV:', error));
  };

  return (
    <button onClick={handleExport}>导出</button>
  );
}

export default ExportButton;