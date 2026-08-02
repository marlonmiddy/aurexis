import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'
import { company } from '@/lib/site-data'
export const metadata: Metadata = { title: 'Privacy Policy', description: 'How Aurexis handles website and enquiry information.' }
const sections = [
{id:'information',title:'Information we receive',paragraphs:['We receive the information you choose to send through an enquiry, email, phone call or WhatsApp conversation. This may include your name, contact details, project location, photographs and project requirements.','Basic technical and usage information may be collected by our hosting and analytics providers to keep the website secure and understand aggregate performance.']},
{id:'use',title:'How we use information',paragraphs:['We use enquiry information to respond, assess project suitability, prepare proposals, deliver agreed work and provide aftercare. We do not sell personal information.','We retain project and communication records only for legitimate operational, legal and assurance purposes.']},
{id:'sharing',title:'Service providers',paragraphs:['Information may be processed by services that host this website or enable communications. We disclose only what is reasonably necessary and expect providers to protect it. We may also disclose information when required by law.']},
{id:'choices',title:'Your choices',paragraphs:['You may request access to, correction of or deletion of personal information we control, subject to legal and operational retention requirements. You can also ask us to stop non-essential communication.']},
{id:'contact',title:'Contact',paragraphs:[`Privacy enquiries can be sent to ${company.email} or directed to Aurexis Surface Transformations, 30 Cole Street, Observatory, Cape Town, South Africa.`]},
]
export default function PrivacyPage(){return <LegalPage eyebrow="Legal" title="Privacy, without ambiguity." intro="A clear account of the information we receive and how it supports your Aurexis experience." updated="1 August 2026" sections={sections} />}
