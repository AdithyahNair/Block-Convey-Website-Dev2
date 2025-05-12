import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { NavLinksProps } from '../../../types/blog'
import { ChevronDown } from 'lucide-react'
import { MegaMenuDropdown } from './MegaMenuDropdown'

const mockSections = [
  {
    label: 'PRODUCTS',
    items: [
      { title: 'Automated Compliance', description: 'Get (and stay) compliant with ease.' },
      { title: 'Vendor Risk Management', description: 'Streamline vendor security reviews.' },
      { title: 'Questionnaire Automation', description: 'Auto-fill security questionnaires.' },
      { title: 'Trust Center', description: 'Demonstrate trust in real-time.' },
      { title: 'Continuous GRC', description: 'Join the modern way to GRC.' },
      { title: 'Streamlined Audits', description: 'Simplify audits from start to finish.' },
      { title: 'Risk Management', description: 'Centralize risk, stay informed.' },
      { title: 'Personnel and Access', description: 'Manage compliance across employees.' },
    ],
  },
  {
    label: 'PLATFORM',
    items: [
      { title: 'Trust management platform', description: 'Deepen your security—and customer trust.' },
      { title: 'Vanta Integrations', description: 'Sync with 375+ tools.' },
      { title: 'Vanta AI ✨', description: 'Hand off your most tedious tasks.' },
      { title: 'Vanta API', description: 'Enhance your security and compliance automation.' },
    ],
  },
  {
    label: 'FRAMEWORKS',
    items: [
      { title: 'SOC 2' },
      { title: 'ISO 27001' },
      { title: 'GDPR' },
      { title: 'HIPAA' },
      { title: 'HITRUST CSF' },
      { title: 'USDP' },
      { title: 'NIST AI RMF' },
      { title: 'ISO 42001' },
      { title: 'CMMC' },
    ],
  },
];

export const NavLinks: React.FC<NavLinksProps> = ({ items }) => {
  const navigate = useNavigate()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>('PRODUCTS')

  const handleClose = useCallback(() => {
    setOpenDropdown(null)
  }, [])

  const handleItemClick = (path?: string) => {
    if (path) {
      navigate(path)
      handleClose()
    }
  }

  const ref = useClickOutside(handleClose)

  const handleToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  // Desktop: Vanta-style mega menu for the first nav item only (for demo)
  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-3 relative"
    >
      {items.map((item, idx) => (
        <div
          key={item.label}
          className="relative group"
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            onClick={() => handleToggle(item.label)}
            className={`flex items-center py-2 px-2 text-gray-700 hover:text-purple-700 focus:outline-none font-medium transition-colors ${openDropdown === item.label ? 'text-purple-700' : ''}`}
          >
            <span className="text-base font-semibold">{item.label}</span>
            <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
          </button>
          {/* Mega menu for the first nav item only (for demo) */}
          {idx === 0 && (
            <MegaMenuDropdown
              open={openDropdown === item.label}
              sections={mockSections}
              activeSection={activeSection}
              onSectionHover={setActiveSection}
            />
          )}
          {/* Simple dropdown for others (mobile or fallback) */}
          {idx !== 0 && openDropdown === item.label && (
            <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-30">
              {item.subitems.map((subitem, i) => (
                <div key={i} className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => handleItemClick(subitem.path)}>
                  <span className="block text-gray-800 text-sm font-medium">{subitem.title}</span>
                  {subitem.description && <span className="block text-xs text-gray-500 mt-1">{subitem.description}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
