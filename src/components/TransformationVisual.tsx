import { useState, useEffect } from 'react';
import { FileSpreadsheet, Network, TrendingUp, FileText, Users, Building, DollarSign, ShoppingCart, Briefcase, UserCheck, ArrowRight, CheckCircle, ChevronRight, Database, Cloud, Zap } from 'lucide-react';

const logoImage = "src/assets/logo.png";
type Stage = 'excels' | 'processes' | 'orgmap' | 'bloomberg' | 'deliverables' | 'cta';

export function TransformationVisual() {
  const [stage, setStage] = useState<Stage>('excels');
  const [highlightedExcels, setHighlightedExcels] = useState<number[]>([]);
  const [visibleProcessNodes, setVisibleProcessNodes] = useState<number[]>([]);
  const [activeOrgNodes, setActiveOrgNodes] = useState<number[]>([]);
  const [visibleDeliverables, setVisibleDeliverables] = useState<number[]>([]);

  useEffect(() => {
    // Excel stage
    if (stage === 'excels') {
      const timer1 = setTimeout(() => setHighlightedExcels([0]), 300);
      const timer2 = setTimeout(() => setHighlightedExcels([0, 1]), 700);
      const timer3 = setTimeout(() => setHighlightedExcels([0, 1, 2]), 1100);
      const timer4 = setTimeout(() => setStage('processes'), 2500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }

    // Processes stage
    if (stage === 'processes') {
      const timer1 = setTimeout(() => setVisibleProcessNodes([0]), 300);
      const timer2 = setTimeout(() => setVisibleProcessNodes([0, 1]), 500);
      const timer3 = setTimeout(() => setVisibleProcessNodes([0, 1, 2]), 700);
      const timer4 = setTimeout(() => setVisibleProcessNodes([0, 1, 2, 3]), 900);
      const timer5 = setTimeout(() => setVisibleProcessNodes([0, 1, 2, 3, 4]), 1100);
      const timer6 = setTimeout(() => setVisibleProcessNodes([0, 1, 2, 3, 4, 5]), 1300);
      const timer7 = setTimeout(() => setVisibleProcessNodes([0, 1, 2, 3, 4, 5, 6]), 1500);
      const timer8 = setTimeout(() => setStage('orgmap'), 2500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
        clearTimeout(timer8);
      };
    }

    // Org map stage
    if (stage === 'orgmap') {
      const timer1 = setTimeout(() => setActiveOrgNodes([0]), 200);
      const timer2 = setTimeout(() => setActiveOrgNodes([0, 1]), 350);
      const timer3 = setTimeout(() => setActiveOrgNodes([0, 1, 2]), 500);
      const timer4 = setTimeout(() => setActiveOrgNodes([0, 1, 2, 3]), 650);
      const timer5 = setTimeout(() => setActiveOrgNodes([0, 1, 2, 3, 4]), 800);
      const timer6 = setTimeout(() => setActiveOrgNodes([0, 1, 2, 3, 4, 5]), 950);
      const timer7 = setTimeout(() => setActiveOrgNodes([0, 1, 2, 3, 4, 5, 6]), 1100);
      const timer8 = setTimeout(() => setActiveOrgNodes([0, 1, 2, 3, 4, 5, 6, 7]), 1250);
      const timer9 = setTimeout(() => setActiveOrgNodes([0, 1, 2, 3, 4, 5, 6, 7, 8]), 1400);
      const timer10 = setTimeout(() => setStage('bloomberg'), 2800);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
        clearTimeout(timer6);
        clearTimeout(timer7);
        clearTimeout(timer8);
        clearTimeout(timer9);
        clearTimeout(timer10);
      };
    }

    // Bloomberg stage
    if (stage === 'bloomberg') {
      const timer = setTimeout(() => setStage('deliverables'), 3500);
      return () => clearTimeout(timer);
    }

    // Deliverables stage
    if (stage === 'deliverables') {
      const timer1 = setTimeout(() => setVisibleDeliverables([0]), 300);
      const timer2 = setTimeout(() => setVisibleDeliverables([0, 1]), 500);
      const timer3 = setTimeout(() => setVisibleDeliverables([0, 1, 2]), 700);
      const timer4 = setTimeout(() => setVisibleDeliverables([0, 1, 2, 3]), 900);
      const timer5 = setTimeout(() => setStage('cta'), 3500);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    }

    // CTA stage
    if (stage === 'cta') {
      const timer = setTimeout(() => {
        // Restart the loop
        setStage('excels');
        setHighlightedExcels([]);
        setVisibleProcessNodes([]);
        setActiveOrgNodes([]);
        setVisibleDeliverables([]);
      }, 3500);
      
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl border-2 border-gray-200 shadow-2xl" style={{ height: '500px', maxWidth: '900px', margin: '0 auto', overflow: 'hidden' }}>
      {/* Stage 1: Enhanced Realistic Excel Files with ERP Integration */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'excels' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-4 h-full flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
          <div className="text-center mb-3">
            <div className="text-gray-900 font-mono text-xs mb-1">SCANNING DATA SOURCES</div>
            <div className="text-gray-500 text-[10px] mb-2">Auto-ingesting financial records from multiple systems</div>
            
            {/* ERP Integration Indicators */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-300 shadow-sm">
                <Database className="w-3 h-3 text-blue-600" />
                <span className="text-[10px] text-gray-700">QuickBooks</span>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-300 shadow-sm">
                <Cloud className="w-3 h-3 text-purple-600" />
                <span className="text-[10px] text-gray-700">Xero</span>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-300 shadow-sm">
                <Zap className="w-3 h-3 text-orange-600" />
                <span className="text-[10px] text-gray-700">NetSuite</span>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-300 shadow-sm">
                <Database className="w-3 h-3 text-red-600" />
                <span className="text-[10px] text-gray-700">SAP</span>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 w-full px-2" style={{ maxWidth: '800px' }}>
            {/* Enhanced Invoice Excel with Tabs */}
            <div className={`transition-all duration-500 ${highlightedExcels.includes(0) ? 'scale-105' : 'scale-100 opacity-60'}`}>
              <div className={`bg-white rounded-lg shadow-xl border-2 overflow-hidden ${highlightedExcels.includes(0) ? 'border-[#FF4500]' : 'border-gray-300'}`}>
                <div className="bg-gradient-to-r from-green-700 to-green-600 px-2 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-[10px]">Invoices_Q4_2024.xlsx</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                </div>
                
                {/* Excel Ribbon */}
                <div className="bg-gray-100 px-2 py-0.5 flex gap-2 text-[7px] border-b border-gray-300">
                  <span className="text-gray-600">File</span>
                  <span className="text-gray-600">Home</span>
                  <span className="text-gray-900">Insert</span>
                  <span className="text-gray-600">Formulas</span>
                </div>

                <div className="p-1.5">
                  <div className="bg-green-50 border border-green-200 px-1.5 py-1 flex gap-1 text-[8px] font-mono mb-1">
                    <span className="w-5 text-center bg-white border border-gray-300 text-[7px]">E3</span>
                    <span className="flex-1 text-[7px]">fx =SUM(D2:D1000)</span>
                  </div>
                  <table className="w-full text-[7px] border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]"></th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">A</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">B</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">C</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">D</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">E</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-100">
                        <td className="border border-gray-300 px-0.5 py-0.5 text-center bg-gray-100 text-gray-500 text-[7px]">1</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Invoice #</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Client Name</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Date</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Amount</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Status</td>
                      </tr>
                      {[
                        ['2', 'INV-2024-1847', 'Acme Corp Solutions', '11/10/2024', '$12,450.00', 'Paid'],
                        ['3', 'INV-2024-1848', 'TechFlow Industries', '11/11/2024', '$8,200.00', 'Paid'],
                        ['4', 'INV-2024-1849', 'BuildRight LLC', '11/12/2024', '$15,750.00', 'Pending'],
                        ['5', 'INV-2024-1850', 'DataSystems Global', '11/13/2024', '$6,890.00', 'Paid'],
                        ['6', 'INV-2024-1851', 'CloudBase Inc', '11/14/2024', '$22,100.00', 'Paid'],
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-0.5 py-0.5 text-center bg-gray-100 text-gray-500 text-[7px]">{row[0]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-blue-600">{row[1]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5">{row[2]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5">{row[3]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-right text-green-700">{row[4]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-center">
                            <span className={`px-1 py-0.5 rounded text-[6px] ${row[5] === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                              {row[5]}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Excel Tabs */}
                <div className="bg-gray-200 px-1.5 py-0.5 flex gap-1 border-t border-gray-300">
                  <div className="bg-white px-2 py-0.5 text-[7px] border border-gray-400 rounded-t">Sheet1</div>
                  <div className="bg-gray-100 px-2 py-0.5 text-[7px] text-gray-500">Q3_Data</div>
                  <div className="bg-gray-100 px-2 py-0.5 text-[7px] text-gray-500">Archive</div>
                </div>

                {highlightedExcels.includes(0) && (
                  <div className="bg-[#FF4500] px-2 py-1">
                    <div className="text-white text-[8px] font-mono animate-pulse">✓ Processing 1,847 rows...</div>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Expenses Excel */}
            <div className={`transition-all duration-500 ${highlightedExcels.includes(1) ? 'scale-105' : 'scale-100 opacity-60'}`}>
              <div className={`bg-white rounded-lg shadow-xl border-2 overflow-hidden ${highlightedExcels.includes(1) ? 'border-[#FF4500]' : 'border-gray-300'}`}>
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-2 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-[10px]">Expenses_2024_Detailed.xlsx</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                </div>
                
                <div className="bg-gray-100 px-2 py-0.5 flex gap-2 text-[7px] border-b border-gray-300">
                  <span className="text-gray-600">File</span>
                  <span className="text-gray-900">Home</span>
                  <span className="text-gray-600">Insert</span>
                  <span className="text-gray-600">Data</span>
                </div>

                <div className="p-1.5">
                  <div className="bg-blue-50 border border-blue-200 px-1.5 py-1 flex gap-1 text-[8px] font-mono mb-1">
                    <span className="w-5 text-center bg-white border border-gray-300 text-[7px]">C5</span>
                    <span className="flex-1 text-[7px]">fx =VLOOKUP(A5,Categories!$A$2:$B$50,2,FALSE)</span>
                  </div>
                  <table className="w-full text-[7px] border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]"></th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">A</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">B</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">C</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">D</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">E</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-100">
                        <td className="border border-gray-300 px-0.5 py-0.5 text-center bg-gray-100 text-gray-500 text-[7px]">1</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Date</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Vendor</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Category</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Amount</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">GL Code</td>
                      </tr>
                      {[
                        ['2', '11/08/24', 'Google LLC', 'Marketing', '$5,200.00', '6100'],
                        ['3', '11/09/24', 'Amazon Web Services', 'Infrastructure', '$3,100.00', '6200'],
                        ['4', '11/10/24', 'Salesforce.com', 'Software/SaaS', '$1,450.00', '6300'],
                        ['5', '11/11/24', 'United Airlines', 'Travel', '$890.00', '6500'],
                        ['6', '11/12/24', 'WeWork Companies', 'Office Space', '$2,340.00', '6600'],
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-0.5 py-0.5 text-center bg-gray-100 text-gray-500 text-[7px]">{row[0]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5">{row[1]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-blue-600">{row[2]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5">{row[3]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-right text-red-700">{row[4]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-center text-purple-700">{row[5]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-200 px-1.5 py-0.5 flex gap-1 border-t border-gray-300">
                  <div className="bg-white px-2 py-0.5 text-[7px] border border-gray-400 rounded-t">Transactions</div>
                  <div className="bg-gray-100 px-2 py-0.5 text-[7px] text-gray-500">Pivot</div>
                  <div className="bg-gray-100 px-2 py-0.5 text-[7px] text-gray-500">Categories</div>
                </div>

                {highlightedExcels.includes(1) && (
                  <div className="bg-[#FF4500] px-2 py-1">
                    <div className="text-white text-[8px] font-mono animate-pulse">✓ Processing 2,423 entries...</div>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Payroll Excel */}
            <div className={`transition-all duration-500 ${highlightedExcels.includes(2) ? 'scale-105' : 'scale-100 opacity-60'}`}>
              <div className={`bg-white rounded-lg shadow-xl border-2 overflow-hidden ${highlightedExcels.includes(2) ? 'border-[#FF4500]' : 'border-gray-300'}`}>
                <div className="bg-gradient-to-r from-purple-700 to-purple-600 px-2 py-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-white" />
                    <span className="text-white text-[10px]">Payroll_Nov_2024_v3.xlsx</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                </div>
                
                <div className="bg-gray-100 px-2 py-0.5 flex gap-2 text-[7px] border-b border-gray-300">
                  <span className="text-gray-600">File</span>
                  <span className="text-gray-600">Home</span>
                  <span className="text-gray-900">Formulas</span>
                  <span className="text-gray-600">Review</span>
                </div>

                <div className="p-1.5">
                  <div className="bg-purple-50 border border-purple-200 px-1.5 py-1 flex gap-1 text-[8px] font-mono mb-1">
                    <span className="w-5 text-center bg-white border border-gray-300 text-[7px]">E2</span>
                    <span className="flex-1 text-[7px]">fx =D2-(D2*F2)</span>
                  </div>
                  <table className="w-full text-[7px] border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]"></th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">A</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">B</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">C</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">D</th>
                        <th className="border border-gray-300 px-0.5 py-0.5 text-center text-gray-500 text-[7px]">E</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-100">
                        <td className="border border-gray-300 px-0.5 py-0.5 text-center bg-gray-100 text-gray-500 text-[7px]">1</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Emp ID</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Employee</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Role</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Gross Pay</td>
                        <td className="border border-gray-300 px-0.5 py-0.5 text-gray-900">Net Pay</td>
                      </tr>
                      {[
                        ['2', 'E-1043', 'Davis, John M.', 'Sr. Engineer', '$10,500.00', '$8,925.00'],
                        ['3', 'E-1072', 'Kim, Sarah J.', 'UX Designer', '$8,200.00', '$6,970.00'],
                        ['4', 'E-1085', 'Chen, Michael', 'Product Mgr', '$9,800.00', '$8,330.00'],
                        ['5', 'E-1091', 'Wong, Lisa A.', 'Marketing Dir', '$7,500.00', '$6,375.00'],
                        ['6', 'E-1102', 'Brown, Thomas', 'Sales Lead', '$11,200.00', '$9,520.00'],
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-0.5 py-0.5 text-center bg-gray-100 text-gray-500 text-[7px]">{row[0]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-purple-700">{row[1]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5">{row[2]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5">{row[3]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-right text-gray-900">{row[4]}</td>
                          <td className="border border-gray-300 px-0.5 py-0.5 text-right text-green-700">{row[5]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-200 px-1.5 py-0.5 flex gap-1 border-t border-gray-300">
                  <div className="bg-white px-2 py-0.5 text-[7px] border border-gray-400 rounded-t">Current</div>
                  <div className="bg-gray-100 px-2 py-0.5 text-[7px] text-gray-500">YTD</div>
                  <div className="bg-gray-100 px-2 py-0.5 text-[7px] text-gray-500">Benefits</div>
                </div>

                {highlightedExcels.includes(2) && (
                  <div className="bg-[#FF4500] px-2 py-1">
                    <div className="text-white text-[8px] font-mono animate-pulse">✓ Processing 147 employees...</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage 2: Clean Logistics-Style Workflow */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'processes' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
          <div className="text-center mb-6">
            <div className="text-gray-900 font-mono text-sm mb-1">AI-DISCOVERED WORKFLOW</div>
            <div className="text-gray-500 text-xs">Procure-to-Pay Process</div>
          </div>

          {/* Simple Linear Workflow */}
          <div className="relative w-full max-w-4xl">
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              {/* Connection lines */}
              {visibleProcessNodes.includes(1) && (
                <line x1="12%" y1="50%" x2="26%" y2="50%" stroke="#3B82F6" strokeWidth="2" className="animate-draw" />
              )}
              {visibleProcessNodes.includes(2) && (
                <line x1="38%" y1="50%" x2="52%" y2="50%" stroke="#3B82F6" strokeWidth="2" className="animate-draw" />
              )}
              {visibleProcessNodes.includes(3) && (
                <line x1="64%" y1="50%" x2="78%" y2="50%" stroke="#3B82F6" strokeWidth="2" className="animate-draw" />
              )}
              {visibleProcessNodes.includes(4) && (
                <line x1="90%" y1="50%" x2="98%" y2="50%" stroke="#10b981" strokeWidth="2" className="animate-draw" />
              )}
            </svg>

            {/* Process Nodes in a single row */}
            <div className="relative flex items-center justify-between px-4" style={{ minHeight: '120px' }}>
              {/* Start Node */}
              <div className={`transition-all duration-500 ${visibleProcessNodes.includes(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#FF4500] rounded-full flex items-center justify-center shadow-lg border-2 border-orange-600 mb-2">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-[10px] text-gray-600 text-center">Start</div>
                </div>
              </div>

              {/* Step 1 - Create Requisition */}
              <div className={`transition-all duration-500 ${visibleProcessNodes.includes(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg border-2 border-blue-700 w-32 mb-2">
                    <div className="text-[10px] text-center font-medium">Create Requisition</div>
                    <div className="text-[8px] text-center text-blue-100 mt-1">Step 1</div>
                  </div>
                  <div className="text-[9px] text-gray-500">11,178 cases</div>
                </div>
              </div>

              {/* Step 2 - Approve & Order */}
              <div className={`transition-all duration-500 ${visibleProcessNodes.includes(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg border-2 border-blue-700 w-32 mb-2">
                    <div className="text-[10px] text-center font-medium">Approve & Order</div>
                    <div className="text-[8px] text-center text-blue-100 mt-1">Step 2</div>
                  </div>
                  <div className="text-[9px] text-gray-500">9,240 cases</div>
                </div>
              </div>

              {/* Step 3 - Receive Goods */}
              <div className={`transition-all duration-500 ${visibleProcessNodes.includes(3) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg border-2 border-blue-700 w-32 mb-2">
                    <div className="text-[10px] text-center font-medium">Receive Goods</div>
                    <div className="text-[8px] text-center text-blue-100 mt-1">Step 3</div>
                  </div>
                  <div className="text-[9px] text-gray-500">8,156 cases</div>
                </div>
              </div>

              {/* Step 4 - Process Payment */}
              <div className={`transition-all duration-500 ${visibleProcessNodes.includes(4) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg border-2 border-blue-700 w-32 mb-2">
                    <div className="text-[10px] text-center font-medium">Process Payment</div>
                    <div className="text-[8px] text-center text-blue-100 mt-1">Step 4</div>
                  </div>
                  <div className="text-[9px] text-gray-500">3,834 cases</div>
                </div>
              </div>

              {/* Complete Node */}
              <div className={`transition-all duration-500 ${visibleProcessNodes.includes(5) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg border-2 border-green-700 mb-2">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-[10px] text-gray-600 text-center">Complete</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className={`mt-8 flex gap-8 ${visibleProcessNodes.includes(6) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <div className="text-center">
              <div className="text-2xl font-mono text-[#FF4500]">4</div>
              <div className="text-[10px] text-gray-500">Process Steps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono text-[#FF4500]">11.2K</div>
              <div className="text-[10px] text-gray-500">Total Cases</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono text-[#FF4500]">94%</div>
              <div className="text-[10px] text-gray-500">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage 3: Bloomberg-Style Relationship Map */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'orgmap' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-4 h-full bg-black overflow-hidden">
          {/* Bloomberg header */}
          <div className="bg-[#FF4500] px-3 py-1 flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="text-black text-xs">EMBERQUANT Equity</div>
              <div className="text-black/70 text-[10px] font-mono">Relationship Map</div>
            </div>
            <div className="flex gap-2 text-[9px] text-black">
              <span>Refresh</span>
              <span>Feedback</span>
            </div>
          </div>

          <div className="relative h-[calc(100%-40px)]">
            {/* Center - Your Company */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeOrgNodes.includes(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 10 }}>
              <div className="bg-gradient-to-br from-[#FF4500] to-orange-600 rounded-lg p-4 shadow-2xl border-2 border-[#FF4500] min-w-[140px]">
                <div className="text-white text-sm text-center mb-1">Your Org.</div>
                <div className="text-white/80 text-[9px] text-center">Price: $185.00</div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <div className="text-green-400 text-xs">▲ 3.2%</div>
                  <div className="text-white/60 text-[9px]">+$5.67</div>
                </div>
              </div>
            </div>

            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {/* Connection lines from center */}
              {activeOrgNodes.includes(1) && (
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#666" strokeWidth="1" strokeDasharray="2 2" />
              )}
              {activeOrgNodes.includes(2) && (
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#666" strokeWidth="1" strokeDasharray="2 2" />
              )}
              {activeOrgNodes.includes(3) && (
                <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#666" strokeWidth="1" strokeDasharray="2 2" />
              )}
              {activeOrgNodes.includes(4) && (
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#666" strokeWidth="1" strokeDasharray="2 2" />
              )}
              {activeOrgNodes.includes(5) && (
                <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#666" strokeWidth="1" strokeDasharray="2 2" />
              )}
              {activeOrgNodes.includes(6) && (
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#666" strokeWidth="1" strokeDasharray="2 2" />
              )}
              {activeOrgNodes.includes(7) && (
                <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#666" strokeWidth="1" strokeDasharray="2 2" />
              )}
              {activeOrgNodes.includes(8) && (
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#666" strokeWidth="1" strokeDasharray="2 2" />
              )}
            </svg>

            {/* Top - Indices */}
            <div className={`absolute top-[8%] left-1/2 -translate-x-1/2 transition-all duration-500 ${activeOrgNodes.includes(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 2 }}>
              <div className="text-[#FF4500] text-[9px] mb-2 text-center">Indices (7/20)</div>
              <div className="flex gap-2">
                <div className="bg-red-800 px-2 py-1 rounded text-white text-[8px]">SX5P</div>
                <div className="bg-red-800 px-2 py-1 rounded text-white text-[8px]">NMX MSPE</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-white text-[8px]">SXXP SXND</div>
              </div>
            </div>

            {/* Top Right - Peers */}
            <div className={`absolute top-[12%] right-[10%] transition-all duration-500 ${activeOrgNodes.includes(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 2 }}>
              <div className="text-[#FF4500] text-[9px] mb-2">Peers (13/80)</div>
              <div className="space-y-1">
                {['BNPP', 'GLEN', 'RDSB', 'HSBA'].map((ticker, idx) => (
                  <div key={ticker} className="bg-green-700 px-2 py-0.5 rounded text-white text-[8px] inline-block mr-1">
                    {ticker}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Holders */}
            <div className={`absolute top-1/2 right-[8%] -translate-y-1/2 transition-all duration-500 ${activeOrgNodes.includes(3) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 2 }}>
              <div className="text-[#FF4500] text-[9px] mb-2">Holders (16/80)</div>
              <div className="space-y-1">
                {['Vanguard', 'BlackRock', 'State Street', 'Fidelity'].map((holder, idx) => (
                  <div key={holder} className="bg-red-700 px-2 py-0.5 rounded text-white text-[8px]">
                    {holder}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Right - Analysts */}
            <div className={`absolute bottom-[12%] right-[10%] transition-all duration-500 ${activeOrgNodes.includes(4) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 2 }}>
              <div className="text-[#FF4500] text-[9px] mb-2">Analysts (11/37)</div>
              <div className="space-y-1">
                {['Goldman Sachs', 'Morgan Stanley', 'JP Morgan', 'Citi'].map((analyst, idx) => (
                  <div key={analyst} className="bg-blue-700 px-2 py-0.5 rounded text-white text-[8px]">
                    {analyst}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom - Board */}
            <div className={`absolute bottom-[8%] left-1/2 -translate-x-1/2 transition-all duration-500 ${activeOrgNodes.includes(5) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 2 }}>
              <div className="text-[#FF4500] text-[9px] mb-2 text-center">Board (12/12)</div>
              <div className="flex gap-2">
                {['Director 1', 'Director 2', 'Director 3', 'More...'].map((member, idx) => (
                  <div key={member} className="bg-orange-700 px-2 py-1 rounded text-white text-[8px]">
                    {member}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Left - Exchanges */}
            <div className={`absolute bottom-[15%] left-[10%] transition-all duration-500 ${activeOrgNodes.includes(6) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 2 }}>
              <div className="text-[#FF4500] text-[9px] mb-2">Exchanges (12/48)</div>
              <div className="space-y-1">
                <div className="bg-gray-700 border border-gray-600 p-2 rounded">
                  {['NYSE', 'NASDAQ', 'LSE'].map((exchange, idx) => (
                    <div key={exchange} className="text-white text-[8px] mb-1">{exchange}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Left - Options */}
            <div className={`absolute top-1/2 left-[8%] -translate-y-1/2 transition-all duration-500 ${activeOrgNodes.includes(7) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 2 }}>
              <div className="text-[#FF4500] text-[9px] mb-2">Options</div>
              <div className="bg-gray-800 border border-gray-700 p-2 rounded w-24">
                <div className="grid grid-cols-2 gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-700 h-6 rounded"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Left - Executives */}
            <div className={`absolute top-[12%] left-[10%] transition-all duration-500 ${activeOrgNodes.includes(8) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ zIndex: 2 }}>
              <div className="text-[#FF4500] text-[9px] mb-2">Executives (19/19)</div>
              <div className="space-y-1">
                {['CEO', 'CFO', 'CTO', 'COO'].map((exec, idx) => (
                  <div key={exec} className="bg-orange-700 px-2 py-0.5 rounded text-white text-[8px]">
                    {exec}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional bottom items for visual completeness */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-around px-8">
              <div className={`transition-all duration-500 ${activeOrgNodes.includes(5) ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-[#FF4500] text-[8px] mb-1">Balance Sheet</div>
                <div className="bg-gray-800 border border-gray-700 p-1 rounded w-20 h-12">
                  <div className="flex items-end justify-between h-full gap-0.5">
                    {[60, 70, 65, 75, 80, 70].map((h, idx) => (
                      <div key={idx} className="flex-1 bg-green-600 rounded-t" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`transition-all duration-500 ${activeOrgNodes.includes(6) ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-[#FF4500] text-[8px] mb-1">CDOS</div>
                <div className="bg-gray-800 border border-gray-700 p-2 rounded">
                  <div className="text-white text-[7px]">Credit Default</div>
                  <div className="text-green-400 text-[8px]">+2.3%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stage 4: Enhanced Bloomberg-Style Dashboard with More Graphs */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'bloomberg' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-2 h-full bg-black overflow-hidden">
          {/* Bloomberg-style header */}
          <div className="bg-[#FF4500] px-3 py-1 flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <div className="text-black text-xs">EMBERQUANT TERMINAL</div>
              <div className="text-black/70 text-[10px] font-mono">REAL-TIME ANALYTICS</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <div className="text-black text-[10px] font-mono">LIVE</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-2">
            {/* Top Metrics */}
            {[
              { label: 'REVENUE', value: '$847.2K', change: '+23.4%', positive: true },
              { label: 'EXPENSES', value: '$423.1K', change: '-8.2%', positive: true },
              { label: 'EBITDA', value: '$424.1K', change: '+34.8%', positive: true },
              { label: 'BURN', value: '$124K/mo', change: '-12.1%', positive: true },
            ].map((metric, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 p-2 animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-gray-500 text-[9px] font-mono mb-1">{metric.label}</div>
                <div className="text-[#FF4500] font-mono leading-none mb-1">{metric.value}</div>
                <div className={`text-[9px] font-mono ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change} MoM
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-6 gap-2 h-[calc(100%-90px)]">
            {/* Revenue Trend - 2 cols */}
            <div className="col-span-2 bg-gray-900 border border-gray-800 p-2">
              <div className="text-[#FF4500] text-[9px] font-mono mb-2">REVENUE TREND (12M)</div>
              <div className="flex items-end gap-0.5 h-20">
                {[42, 48, 45, 58, 55, 62, 68, 65, 72, 78, 75, 85].map((height, idx) => (
                  <div key={idx} className="flex-1 bg-[#FF4500] rounded-t animate-growUp" style={{ height: `${height}%`, animationDelay: `${idx * 0.05}s` }}></div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                <div className="text-gray-600 text-[7px] font-mono">JAN</div>
                <div className="text-gray-600 text-[7px] font-mono">DEC</div>
              </div>
            </div>

            {/* Expense Categories Pie - 1 col */}
            <div className="bg-gray-900 border border-gray-800 p-2">
              <div className="text-[#FF4500] text-[9px] font-mono mb-2">EXPENSE MIX</div>
              <div className="relative h-20 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#FF4500" strokeWidth="20" strokeDasharray="75 251" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#FF8C00" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-75" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#FFA500" strokeWidth="20" strokeDasharray="40 251" strokeDashoffset="-125" transform="rotate(-90 50 50)" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#444" strokeWidth="20" strokeDasharray="86 251" strokeDashoffset="-165" transform="rotate(-90 50 50)" />
                </svg>
              </div>
              <div className="space-y-0.5 text-[7px] font-mono">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[#FF4500]"></div><span className="text-gray-400">Payroll 42%</span></div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[#FF8C00]"></div><span className="text-gray-400">Ops 20%</span></div>
              </div>
            </div>

            {/* Cash Flow - 1 col */}
            <div className="bg-gray-900 border border-gray-800 p-2">
              <div className="text-[#FF4500] text-[9px] font-mono mb-2">CASH FLOW</div>
              <div className="h-20 relative">
                <div className="absolute bottom-1/2 left-0 right-0 h-px bg-gray-700"></div>
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline
                    points="0,60 16,55 33,65 50,45 66,50 83,40 100,35"
                    fill="none"
                    stroke="#FF4500"
                    strokeWidth="2"
                    className="animate-draw"
                  />
                  <polyline
                    points="0,60 16,55 33,65 50,45 66,50 83,40 100,35 100,100 0,100"
                    fill="url(#gradient)"
                    opacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF4500" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex justify-between mt-1">
                <div className="text-gray-600 text-[7px] font-mono">JUN</div>
                <div className="text-gray-600 text-[7px] font-mono">NOV</div>
              </div>
            </div>

            {/* Burn Rate - 1 col */}
            <div className="bg-gray-900 border border-gray-800 p-2">
              <div className="text-[#FF4500] text-[9px] font-mono mb-2">BURN RATE</div>
              <div className="flex items-end gap-1 h-20">
                {[85, 78, 72, 68, 62, 58].map((height, idx) => (
                  <div key={idx} className="flex-1 bg-gradient-to-t from-red-600 to-orange-500 rounded-t animate-growUp" style={{ height: `${height}%`, animationDelay: `${idx * 0.05}s` }}></div>
                ))}
              </div>
              <div className="text-center mt-1">
                <div className="text-green-400 text-[8px] font-mono">↓ 12%</div>
              </div>
            </div>

            {/* Runway Projection - 1 col */}
            <div className="bg-gray-900 border border-gray-800 p-2">
              <div className="text-[#FF4500] text-[9px] font-mono mb-2">RUNWAY</div>
              <div className="h-20 flex flex-col justify-center items-center">
                <div className="text-5xl text-white/90 font-mono">18</div>
                <div className="text-gray-400 text-[8px] font-mono mt-1">MONTHS</div>
                <div className="w-full bg-gray-800 h-2 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-[#FF4500] w-3/4 animate-progress"></div>
                </div>
              </div>
            </div>

            {/* CAC/LTV - 2 cols */}
            <div className="col-span-2 bg-gray-900 border border-gray-800 p-2">
              <div className="text-[#FF4500] text-[9px] font-mono mb-2">CAC vs LTV TREND</div>
              <div className="h-20 relative">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* LTV Line */}
                  <polyline
                    points="0,70 20,65 40,60 60,55 80,50 100,45"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                  {/* CAC Line */}
                  <polyline
                    points="0,50 20,48 40,45 60,42 80,40 100,38"
                    fill="none"
                    stroke="#FF4500"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex gap-3 mt-1 text-[7px] font-mono">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-0.5 bg-green-500"></div>
                  <span className="text-gray-400">LTV: $12.5K</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-0.5 bg-[#FF4500]"></div>
                  <span className="text-gray-400">CAC: $840</span>
                </div>
              </div>
            </div>

            {/* Customer Growth - 2 cols */}
            <div className="col-span-2 bg-gray-900 border border-gray-800 p-2">
              <div className="text-[#FF4500] text-[9px] font-mono mb-2">CUSTOMER ACQUISITION (6M)</div>
              <div className="space-y-1">
                {[
                  { month: 'JUN', new: 28, churn: 3 },
                  { month: 'JUL', new: 35, churn: 2 },
                  { month: 'AUG', new: 42, churn: 5 },
                  { month: 'SEP', new: 48, churn: 4 },
                  { month: 'OCT', new: 55, churn: 3 },
                  { month: 'NOV', new: 62, churn: 2 },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="text-gray-500 text-[7px] font-mono w-6">{item.month}</div>
                    <div className="flex-1 flex gap-1">
                      <div className="h-3 bg-green-600 animate-progress" style={{ width: `${item.new}%` }}></div>
                      <div className="h-3 bg-red-600 animate-progress" style={{ width: `${item.churn * 2}%` }}></div>
                    </div>
                    <div className="text-[7px] font-mono text-white">+{item.new - item.churn}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* MRR Breakdown - 2 cols */}
            <div className="col-span-2 bg-gray-900 border border-gray-800 p-2">
              <div className="text-[#FF4500] text-[9px] font-mono mb-2">MRR BREAKDOWN</div>
              <div className="space-y-1.5">
                {[
                  { label: 'New MRR', value: '$45K', pct: 60, color: 'from-green-600 to-green-500' },
                  { label: 'Expansion', value: '$28K', pct: 40, color: 'from-blue-600 to-blue-500' },
                  { label: 'Contraction', value: '-$8K', pct: 15, color: 'from-yellow-600 to-yellow-500' },
                  { label: 'Churn', value: '-$5K', pct: 10, color: 'from-red-600 to-red-500' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[8px] font-mono mb-0.5">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-white">{item.value}</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${item.color} animate-progress`} style={{ width: `${item.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom ticker */}
          <div className="mt-2 bg-gray-900 border border-gray-800 px-2 py-1 flex items-center gap-4 overflow-hidden">
            <div className="text-gray-500 text-[9px] font-mono">METRICS:</div>
            {['ARR: $2.4M', 'MRR: $200K', 'CAC: $840', 'LTV: $12.5K', 'RUNWAY: 18mo', 'BURN: $124K', 'CHURN: 2.1%', 'NPS: 68'].map((item, idx) => (
              <div key={idx} className="text-[#FF4500] text-[9px] font-mono whitespace-nowrap">{item}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Stage 5: Combined VC Deliverables & Audit Reports */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'deliverables' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-4 h-full bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center overflow-hidden">
          <div className="text-center mb-4">
            <div className="text-gray-900 font-mono text-sm mb-2">INVESTOR-READY DELIVERABLES</div>
            <div className="text-gray-500 text-xs">Cap tables, cash flow statements, audit reports & compliance</div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full px-4" style={{ maxWidth: '700px' }}>
            {/* Cap Table */}
            <div
              className={`transition-all duration-500 ${
                visibleDeliverables.includes(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <div className="bg-white rounded-xl p-4 border-2 border-gray-300 shadow-xl hover:border-[#FF4500] transition-all h-full">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-gray-200">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-700">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-gray-900 font-mono text-sm">Cap Table</h4>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-700">Founders</span>
                      <span className="text-gray-900 font-mono">65.0%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#FF4500] w-[65%]"></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-2 rounded">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-700">Series A</span>
                      <span className="text-gray-900 font-mono">25.0%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 w-[25%]"></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-2 rounded">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-700">ESOP Pool</span>
                      <span className="text-gray-900 font-mono">10.0%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 w-[10%]"></div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200 mt-3">
                  <div className="text-xs text-gray-500">Fully Diluted: 10M shares</div>
                </div>
              </div>
            </div>

            {/* Cash Flow Statement */}
            <div
              className={`transition-all duration-500 ${
                visibleDeliverables.includes(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <div className="bg-white rounded-xl p-4 border-2 border-gray-300 shadow-xl hover:border-[#FF4500] transition-all h-full">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-gray-200">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-600 to-green-700">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-gray-900 font-mono text-sm">Cash Flow</h4>
                </div>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-[10px] text-gray-500 mb-1">Operating</div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Net Income</span>
                      <span className="text-green-700 font-mono">+$424K</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500 mb-1">Investing</div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Equipment</span>
                      <span className="text-red-600 font-mono">-$120K</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-gray-500 mb-1">Financing</div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Series A</span>
                      <span className="text-green-700 font-mono">+$500K</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t-2 border-gray-300 mt-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-900">Net Change</span>
                    <span className="text-green-700 font-mono">+$760K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Audit Report */}
            <div
              className={`transition-all duration-500 ${
                visibleDeliverables.includes(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border-2 border-[#FF4500]/30 shadow-xl h-full">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-gray-700">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-white font-mono text-sm">Audit Report</h4>
                </div>
                
                <div className="space-y-2">
                  {[
                    { label: 'Revenue Recognition', status: '✓' },
                    { label: 'Expense Documentation', status: '✓' },
                    { label: 'Tax Compliance', status: '✓' },
                    { label: 'Internal Controls', status: '✓' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/50 p-2 rounded border border-gray-700">
                      <span className="text-gray-300 text-xs">{item.label}</span>
                      <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px]">
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-gray-700 mt-3">
                  <div className="text-gray-400 text-[10px]">Auditor: KPMG LLP</div>
                  <div className="text-white text-xs">Nov 15, 2024</div>
                </div>
              </div>
            </div>

            {/* Compliance Dashboard */}
            <div
              className={`transition-all duration-500 ${
                visibleDeliverables.includes(3) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border-2 border-[#FF4500]/30 shadow-xl h-full">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-gray-700">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-700">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-white font-mono text-sm">Compliance</h4>
                </div>
                
                <div className="space-y-2">
                  {[
                    { category: 'Tax Compliance', score: 98 },
                    { category: 'GAAP Standards', score: 96 },
                    { category: 'SOX Controls', score: 94 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300 text-xs">{item.category}</span>
                        <span className="text-[#FF4500] font-mono text-xs">{item.score}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#FF4500] to-orange-600"
                          style={{ width: `${item.score}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 bg-gray-800/50 rounded p-2 border border-gray-700">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-white text-xs">Fully Compliant</span>
                  </div>
                  <div className="text-gray-400 text-[9px]">0 open issues</div>
                </div>
              </div>
            </div>
          </div>

          {visibleDeliverables.length === 4 && (
            <div className="mt-4">
              <button className="bg-[#FF4500] hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-xs font-mono transition-colors">
                Download All Reports
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Stage 6: EmberQuant Try It Now CTA */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          stage === 'cta' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-8 h-full bg-[#FF4500] flex flex-col items-center justify-center relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10 text-center space-y-8">
            {/* Logo */}
            <div className="flex items-center justify-center gap-4 animate-fadeIn">
              <img 
                src={logoImage} 
                alt="EmberQuant Logo" 
                className="h-24 w-auto"
              />
            </div>

            {/* Brand Name */}
            <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="text-white font-serif tracking-tight" style={{ fontSize: '4rem', lineHeight: '1' }}>
                EmberQuant
              </div>
              <div className="text-white/80 font-mono text-lg tracking-wider mt-2">QUANTIFY EXCELLENCE</div>
            </div>

            {/* CTA Button */}
            <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://calendly.com/request-emberquant/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-white hover:bg-gray-100 text-[#FF4500] px-12 py-5 rounded-xl shadow-2xl transition-all hover:scale-105 text-xl font-mono">
                  Try Now →
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stage indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {(['excels', 'processes', 'orgmap', 'bloomberg', 'deliverables', 'cta'] as Stage[]).map((s) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full transition-all ${
              stage === s ? 'bg-[#FF4500] w-6' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes growUp {
          from { height: 0; }
        }
        .animate-growUp {
          animation: growUp 0.6s ease-out forwards;
        }
        
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoomIn {
          animation: zoomIn 0.6s ease-out;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes progress {
          from { width: 0; }
        }
        .animate-progress {
          animation: progress 1s ease-out forwards;
        }

        @keyframes draw {
          from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-out forwards;
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
