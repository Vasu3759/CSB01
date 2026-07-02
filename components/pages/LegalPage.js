"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft, Mail, Phone, Shield, FileText, Users, Lock, Eye, Database, Cookie, AlertTriangle } from "lucide-react"

export default function LegalPage({ activeTab }) {
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleBackToHome = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      {/* Page Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="h-6 w-px bg-slate-600"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-red-500" />
              <h1 className="text-xl font-bold">Legal & Privacy</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex space-x-8">
            <button
              onClick={() => router.push("/privacy-policy")}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === "privacy"
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </div>
            </button>
            <button
              onClick={() => router.push("/terms-and-conditions")}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === "terms"
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Terms & Conditions</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {activeTab === "privacy" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Privacy Policy Content */}
              <div className="bg-slate-800 rounded-lg p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-red-500" />
                  <h2 className="text-2xl font-bold">Privacy Policy</h2>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-6">
                    This Privacy Policy along with its terms and uses discloses the privacy practices for "Bodvid Private Limited" with regard to your use of the online platform www.chalksnboard.in ("website"). This privacy policy governs your use of the application "ChalksnBoard" - Classrooms redefined' ('Application'), www.chalksnboard.in ('website') and the other associated applications, products, websites and services are managed by the Company.
                  </p>

                  <div className="bg-slate-700 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-500 mb-2">Important Notice</h4>
                        <p className="text-gray-300 text-sm">
                          Please read this privacy policy ('Policy') carefully before using the Application, website, our services and products, along with the Terms of Use provided on the Application and the website.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <Users className="w-5 h-5 text-red-500" />
                    <span>Information Collection & Use</span>
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
                  </p>

                  <p className="text-gray-300 mb-6">
                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <Database className="w-5 h-5 text-red-500" />
                    <span>User-Provided Information</span>
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    When you visit our website, as part of a purchase of one of our courses or registering on our website, we may collect a variety of information that you will voluntarily provide to us via one of our contact forms, via a chat or phone session (Personal Identifying Information), such as:
                  </p>

                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-4">
                    <li><strong>Contact Information:</strong> name, email address, display picture, facial recognition, mailing address, phone number, IP address, geographic location</li>
                    <li><strong>Billing Information:</strong> debit card number, credit card number and billing address</li>
                    <li><strong>Unique Identifiers:</strong> username or password</li>
                    <li><strong>Preferences:</strong> reviews or ratings, syllabus and course preferences, account settings</li>
                    <li><strong>Interaction Data:</strong> information provided through our service, interaction with customer service, participation in surveys or marketing promotions</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-red-500" />
                    <span>Data Security & Protection</span>
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    We are concerned about safeguarding the confidentiality of your Information. We provide physical, electronic, and procedural safeguards to protect Information we process and maintain.
                  </p>

                  <p className="text-gray-300 mb-6">
                    We value your trust in providing us with your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <Cookie className="w-5 h-5 text-red-500" />
                    <span>Cookies & Tracking</span>
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                  </p>

                  <p className="text-gray-300 mb-6">
                    This Service does not use these "cookies" explicitly. However, the app may use third party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device.
                  </p>

                  <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                    <Eye className="w-5 h-5 text-red-500" />
                    <span>Information Disclosure</span>
                  </h3>
                  
                  <p className="text-gray-300 mb-4">We may disclose Information:</p>
                  
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-4">
                    <li>As required by law, such as to comply with a subpoena or similar legal process</li>
                    <li>To enforce applicable terms of uses, including investigation of potential violations thereof</li>
                    <li>When we believe that disclosure is necessary to protect our rights, protect your safety or the safety of others</li>
                    <li>With our trusted services providers who work on our behalf</li>
                    <li>To protect against imminent harm to the rights, property or safety of the Application/website</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Data Retention</h3>
                  <p className="text-gray-300 mb-6">
                    We retain user data when an account is active and 2 years afterwards. We may change this practice according to legal and business needs.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">European Users</h3>
                  <p className="text-gray-300 mb-6">
                    We transfer your personal information from the European Economic Area and Switzerland to India. By submitting your data and/or using our services, you consent to the transfer, storing, and processing of your personal information in India.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Changes to Privacy Policy</h3>
                  <p className="text-gray-300 mb-6">
                    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                  </p>

                  <div className="bg-slate-700 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-500 mb-2">Effective Date</h4>
                        <p className="text-gray-300 text-sm">
                          This policy is effective as of 2020-08-15
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                  <p className="text-gray-300 mb-4">
                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us:
                  </p>
                  
                  <div className="flex items-center space-x-2 text-gray-300 mb-6">
                    <Mail className="w-4 h-4" />
                    <span>info@chalksnboard.com</span>
                  </div>

                  <div className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-500 mb-2">Grievance Officer</h4>
                        <p className="text-gray-300 text-sm">
                          In accordance with Information Technology Act 2000 and rules made thereunder, the contact details of the Grievance Officer are provided below: info@chalksnboard.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Terms and Conditions Content */}
              <div className="bg-slate-800 rounded-lg p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <FileText className="w-8 h-8 text-red-500" />
                  <h2 className="text-2xl font-bold">Terms and Conditions</h2>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-6">
                    These terms & Conditions ("terms") of (a) use of our website www.chalksnboard.com ("website"), our applications ("application") or any products or services in connection with the application/, website/products ("services") or (b) any modes of registrations or usage of products, are between Bodvid Private Limited ("Company/We/Us/Our") and its users ("user/You/Your").
                  </p>

                  <div className="bg-slate-700 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-500 mb-2">Important Notice</h4>
                        <p className="text-gray-300 text-sm">
                          By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">App Usage & Restrictions</h3>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-4">
                    <li>You're not allowed to copy or modify the app, any part of the app, or our trademarks in any way</li>
                    <li>You're not allowed to attempt to extract the source code of the app</li>
                    <li>You shouldn't try to translate the app into other languages or make derivative versions</li>
                    <li>The app itself, and all the trademarks, copyright, database rights and other intellectual property rights related to it, still belong to "ChalksnBoard (Bodvid Private Limited)"</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Service Changes & Charges</h3>
                  <p className="text-gray-300 mb-6">
                    "ChalksnBoard" is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you're paying for.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Data & Security</h3>
                  <p className="text-gray-300 mb-6">
                    The education app stores and processes personal data that you have provided to us, in order to provide our Service. It's your responsibility to keep your phone and access to the app secure. We, therefore, recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Third-Party Services</h3>
                  <p className="text-gray-300 mb-4">The app does use third party services that declare their own Terms and Conditions:</p>
                  <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-4">
                    <li>Google Play Services</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Internet Connection & Charges</h3>
                  <p className="text-gray-300 mb-6">
                    Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but "ChalksnBoard" cannot take responsibility for the app not working at full functionality if you don't have access to Wi-Fi, and you don't have any of your data allowance left.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Updates & Termination</h3>
                  <p className="text-gray-300 mb-6">
                    At some point, we may wish to update the app. The app is available on Android & iOS – the requirements for both systems may change, and you'll need to download the updates if you want to keep using the app. "ChalksnBoard" does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Disclaimer</h3>
                  <p className="text-gray-300 mb-6">
                    The materials within "ChalksnBoard" are provided on an 'as is' basis. "Bodvid Pvt. Ltd." makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Governing Law and Jurisdiction</h3>
                  <p className="text-gray-300 mb-6">
                    In the event of any dispute arising between the parties with respect to this Agreement, the same shall be referred to the Sole Arbitrator and the arbitration shall be in accordance with Arbitration and Conciliation Act of 1996. The language of the arbitration proceeding shall be English. The seat and place of arbitration shall be New Delhi and the decision of the Arbitrator shall be final and binding on both parties herein.
                  </p>

                  <div className="bg-slate-700 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-500 mb-2">Effective Date</h4>
                        <p className="text-gray-300 text-sm">
                          These terms and conditions are effective as of 2020-08-15
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">Refund And Cancellation Policy</h3>
                  <p className="text-gray-300 mb-4">
                    For detailed refund and cancellation policy, please visit:
                  </p>
                  <a 
                    href="https://merchant.razorpay.com/policy/N34iBjnErgKO0L/refund" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 underline"
                  >
                    Razorpay Refund Policy
                  </a>

                  <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
                  <p className="text-gray-300 mb-4">
                    We make all best endeavours to provide You with a pleasant experience. In the unlikely event that You face any issues, please contact us:
                  </p>
                  
                  <div className="flex items-center space-x-2 text-gray-300 mb-6">
                    <Mail className="w-4 h-4" />
                    <span>info@chalksnboard.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
