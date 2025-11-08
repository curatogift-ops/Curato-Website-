'use client';

import Dropdown from '@/components/ui/Dropdown';
import AccordionDropdown from '@/components/ui/AccordionDropdown';

export default function DropdownExamplePage() {
  const optionsItems = [
    { label: 'Account settings', href: '/account/settings' },
    { label: 'Support', href: '/support' },
    { label: 'License', href: '/license' },
    { 
      label: 'Sign out', 
      onClick: () => {
        console.log('Signing out...');
        // Add your sign out logic here
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-8">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Dropdown Menu Examples
        </h1>

        {/* Sidebar Accordion Styled like the provided design */}
        <div className="md:col-start-1">
          <AccordionDropdown
            sections={[
              { title: 'Home', items: [{ label: 'All Services', href: '/' }], defaultOpen: true },
              {
                title: 'Driver Service',
                defaultOpen: true,
                items: [
                  { label: 'All Services', href: '/driver-services' },
                  { label: 'Daily Drivers', href: '/driver-services/daily' },
                  { label: 'Permanent Drivers', href: '/driver-services/permanent' },
                  { label: 'Outstation Drivers', href: '/driver-services/outstation' },
                  { label: 'Temporary Drivers', href: '/driver-services/temporary' },
                  { label: 'Hourly Drivers', href: '/driver-services/hourly' },
                  { label: 'Night Drivers', href: '/driver-services/night' },
                ],
              },
              { title: 'City', items: [], defaultOpen: false },
              { title: 'Company', items: [], defaultOpen: false },
            ]}
          />
        </div>

        {/* Examples Area */}
        <div className="space-y-8">
          {/* Example 1: Options Dropdown */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Options Menu
            </h2>
            <Dropdown 
              label="Options" 
              items={optionsItems}
            />
          </div>

          {/* Example 2: Products Dropdown */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Products Menu
            </h2>
            <Dropdown 
              label="Products" 
              items={[
                { label: 'Classic Diwali Hamper', href: '/products/classic-diwali-hamper' },
                { label: 'Luxury Diwali Hamper', href: '/products/luxury-diwali-hamper' },
                { label: 'Corporate Diwali Box', href: '/products/corporate-diwali-box' },
                { label: 'Christmas Cheer Hamper', href: '/products/christmas-cheer-hamper' },
                { label: 'New Year Celebration', href: '/products/new-year-celebration-hamper' },
              ]}
            />
          </div>

          {/* Example 3: Custom Styled Dropdown */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Custom Styled Menu
            </h2>
            <Dropdown 
              label="Settings" 
              items={[
                { label: 'Profile', href: '/profile' },
                { label: 'Preferences', href: '/preferences' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Notifications', href: '/notifications' },
              ]}
              buttonClassName="bg-blue-50 border-blue-200 hover:border-blue-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
