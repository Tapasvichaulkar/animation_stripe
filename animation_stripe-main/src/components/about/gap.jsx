'use client'

export default function Gap() {
  const Card = ({ title, items }) => (
    <div className="bg-[#112240] p-4 w-64 rounded-xl shadow-lg border border-gray-700">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {items.map((item, i) => (
          <li key={i} className="text-gray-300">{item}</li>
        ))}
      </ul>
    </div>
  )

  const IconBox = ({ name }) => (
    <div className="bg-[#0a192f] px-3 py-2 rounded-md border border-gray-400 text-sm text-center">
      {name}
    </div>
  )

  return (
    <div className="relative min-h-screen bg-[#0a192f] text-white px-6 py-12 font-sans overflow-hidden flex flex-col items-center">
      {/* Top Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-10 relative z-10">
        <Card title="Acquire" items={['Trials', 'Quotes', 'Pricing Page', 'Customer Portal']} />
        <Card title="Collect" items={['Payments', 'Subscriptions', 'Invoicing', 'Sales Tax and VAT']} />
        <Card title="Report" items={['Business metrics', 'Revenue recognition', 'Trends and insights', 'Accounting reports']} />
        <Card title="Grow" items={['Churn analytics', 'Recovery and collection', 'Automations', 'Optimisations']} />
      </div>

      {/* Left Box */}
      <div className="absolute left-[2%] top-1/2 transform -translate-y-1/2 bg-[#112240] p-4 w-64 rounded-xl shadow-xl border border-dashed border-gray-500 z-10">
        <h2 className="font-semibold text-center mb-3">Self-serve and sales-negotiated channels</h2>
        <div className="flex justify-around mt-2">
          <IconBox name="Salesforce" />
          <IconBox name="HubSpot" />
        </div>
        <div className="flex justify-center mt-3">
          <IconBox name="Shopify" />
        </div>
      </div>

      {/* Right Box */}
      <div className="absolute right-[2%] top-1/2 transform -translate-y-1/2 bg-[#112240] p-4 w-64 rounded-xl shadow-xl border border-dashed border-gray-500 z-10">
        <h2 className="font-semibold text-center mb-3">ERP and accounting software</h2>
        <div className="flex flex-col gap-3 items-center mt-4">
          <IconBox name="Xero" />
          <IconBox name="Oracle NetSuite" />
        </div>
      </div>

      {/* Bottom Center Box */}
      <div className="mt-64 relative z-10 bg-[#112240] p-10 rounded-xl w-[850px] shadow-xl border border-dashed border-gray-500">
        <h2 className="text-center text-lg font-semibold mb-6">Data storage</h2>
        <div className="grid grid-cols-3 gap-4 text-sm text-center">
          {['Snowflake', 'Amazon Redshift', 'Amazon S3', 'Google Cloud Storage', 'Microsoft Azure'].map((service, idx) => (
            <div key={idx} className="bg-[#0a192f] p-3 rounded-lg border border-white">{service}</div>
          ))}
        </div>
      </div>

      {/* CONNECTING LINES */}
      {/* Top Horizontal Line */}
      <div className="absolute top-[120px] left-[10%] w-[80%] h-[2px] bg-white z-0" />

      {/* Vertical Left Line from top to bottom */}
      <div className="absolute top-[120px] left-[10%] w-[2px] h-[calc(65vh)] bg-white z-0" />

      {/* Vertical Right Line from top to bottom */}
      <div className="absolute top-[120px] right-[10%] w-[2px] h-[calc(65vh)] bg-white z-0" />

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-[140px] left-[10%] w-[80%] h-[2px] bg-white z-0" />

      {/* Vertical lines connecting bottom line to the bottom block */}
      <div className="absolute bottom-[140px] right-[10%] w-[2px] h-[calc(65vh)] bg-white z-0" />
      <div className="absolute bottom-[140px] left-[10%] w-[2px] h-[calc(65vh)] bg-white z-0" />
      </div>
  )
}
