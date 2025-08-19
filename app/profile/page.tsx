import { siteData, navigation } from '../lib/data'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">{siteData?.settings?.appName || 'SocialConnect'}</h1>
            <div className="flex space-x-6">
              <a key={index} href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                undefined
              </a>
              <a key={index} href="/explore" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                undefined
              </a>
              <a key={index} href="/messages" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                undefined
              </a>
              <a key={index} href="/notifications" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                undefined
              </a>
              <a key={index} href="/profile" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                undefined
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container py-8">
        <div className="card p-8 max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Profile</h2>
          <p className="text-gray-600 text-lg leading-relaxed">User profile page with posts and information</p>
          <div className="mt-6">
            <button className="btn btn-primary mr-4">Learn More</button>
            <button className="btn btn-secondary">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.users?.map((user: any, index: number) => (
            <div key={index} className="card p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{user.name?.charAt(0) || 'U'}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
            </div>
          )) || []}
        </div>
      </div>

      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">List View</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">List Item {item}</h3>
                  <p className="text-gray-600 mt-1">This is a sample list item with some description.</p>
                </div>
                <button className="btn btn-secondary">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container text-center">
          <p>&copy; 2024 {siteData?.settings?.appName || 'SocialConnect'}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}